import React, { memo, useCallback, useEffect, useRef, useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import {
  getSongDetailAction,
  changePlaySongAction,
  changePlaySequenceAction,
} from "../store/actionCreators";
import {
  getPlayUrl,
  formatMinuteSecond,
  getScaledImage,
} from "@/utils/format-utils";

import { AppPlayerBarWrapper, Control, PlayInfo, Operator } from "./style";
import { Slider } from "antd";

export default memo(function KFAppPlayerBar(props) {
  // props & states
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [progress, setProgress] = useState(0);
  // 进度条进度正在被拖拽而变化
  const [isChanging, setIsChanging] = useState(false);
  // hover时，上方提示文字
  const [tipText, setTipText] = useState("");
  // redux hooks
  const {
    currentSong,
    currentLyrics,
    currentLyricIndex,
    playList,
    playSequence,
  } = useSelector(
    (state) => ({
      currentSong: state.getIn(["player", "currentSong"]),
      currentLyrics: state.getIn(["player", "currentLyrics"]),
      currentLyricIndex: state.getIn(["player", "currentLyricIndex"]),
      playList: state.getIn(["player", "playList"]),
      playSequence: state.getIn(["player", "playSequence"]),
    }),
    shallowEqual
  );
  const dispatch = useDispatch();

  // other hooks
  const audioRef = useRef();
  useEffect(() => {
    dispatch(getSongDetailAction(21253806)); // one more night
  }, [dispatch]);

  // 切歌产生的副作用
  useEffect(() => {
    // 需要切换audio标签的播放源
    audioRef.current.src = getPlayUrl(currentSong.id);
    audioRef.current
      .play()
      .then((res) => {
        setIsPlaying(true);
      })
      .catch((err) => {
        setIsPlaying(false);
      });
    // 设置新歌曲的时长
    setDuration(currentSong.dt);
  }, [currentSong]);

  // 其他业务逻辑
  // 切换歌曲
  const switchMusic = (tag) => {
    // 若随机到相同歌曲，也应当置为从头开始
    audioRef.current.currentTime = 0;
    dispatch(changePlaySongAction(tag));
  };

  // 切换audio的播放/暂停
  const play = useCallback(() => {
    setIsPlaying(!isPlaying);
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch((err) => setIsPlaying(false));
    }
  }, [isPlaying]);

  // audio播放中，需要更新slider的progress
  const audioTimeUpdateHandler = (e) => {
    const currentTime = e.target.currentTime; // 拿到的是秒
    // 如果进度条没有在拖拽，则更新当前播放时间
    if (!isChanging) {
      setCurrentTime(currentTime);
      setProgress(((currentTime * 1000) / duration) * 100); // (当前时间[ms]/总时长[ms]%)
    }
  };

  // audio已经播放到末尾
  const audioTimeEndedHandler = (e) => {
    // 如果是单曲循环，或者列表中仅有一首歌曲，则重新播放
    if (playSequence === 2 || playList.length === 1) {
      audioRef.current.currentTime = 0;
      audioRef.current.play();
    } else {
      // 否则播放下一首
      dispatch(changePlaySongAction(1));
    }
  };

  // AntDesign进度条正在被拖拽
  const sliderChangeHandler = useCallback(
    (value) => {
      setProgress(value);
      const time = ((value / 100.0) * duration) / 1000;
      setCurrentTime(time);
      // 让audio停止更新当前时间
      setIsChanging(true);
    },
    [duration]
  );

  // AntDesign滚动条拖拽松手后
  const sliderAfterChangeHandler = useCallback(
    (value) => {
      const time = ((value / 100.0) * duration) / 1000;
      // 切换audio的当前时间
      audioRef.current.currentTime = time;
      setCurrentTime(time);
      // 让audio继续更新当前时间
      setIsChanging(false);
      // 若为暂停状态，则继续播放
      if (!isPlaying) {
        play();
      }
    },
    [duration, isPlaying, play]
  );

  return (
    <AppPlayerBarWrapper className="sprite_player">
      <div className="content wrap-v2">
        <Control isPlaying={isPlaying} tipText={tipText}>
          <button
            className="sprite_player prev"
            onClick={() => switchMusic(-1)}
            onMouseEnter={() => setTipText("上一首")}
          ></button>
          <button
            className="sprite_player play"
            onClick={() => play()}
            onMouseEnter={() => setTipText("播放/暂停")}
          ></button>
          <button
            className="sprite_player next"
            onClick={() => switchMusic(1)}
            onMouseEnter={() => setTipText("下一首")}
          ></button>
        </Control>
        <PlayInfo>
          <div className="image">
            <NavLink to="/discover/player">
              <img src={getScaledImage(currentSong.al?.picUrl, 34)} alt="" />
            </NavLink>
          </div>
          <div className="info">
            <div className="song">
              <span className="song-name">{currentSong.name ?? "---"}</span>
              <a className="singer-name" href="/todo">
                {currentSong.ar[0].name ?? "---"}
              </a>
            </div>
            <div className="progress">
              <Slider
                className="ant-slider"
                value={progress}
                tooltipVisible={false}
                onChange={sliderChangeHandler}
                onAfterChange={sliderAfterChangeHandler}
              />
              <div className="time">
                <span className="now-time">
                  {formatMinuteSecond(currentTime * 1000)}
                </span>
                <span className="divider">/</span>
                <span className="duration">{formatMinuteSecond(duration)}</span>
              </div>
            </div>
          </div>
        </PlayInfo>
        <Operator sequence={playSequence} tipText={tipText}>
          <div className="left">
            <button
              className="sprite_player btn favor"
              onMouseEnter={() => setTipText("收藏")}
            ></button>
            <button
              className="sprite_player btn share"
              onMouseEnter={() => setTipText("分享")}
            ></button>
          </div>
          <div className="right sprite_player">
            <button
              className="sprite_player btn volume"
              onMouseEnter={() => setTipText("音量")}
            ></button>
            <button
              className="sprite_player btn loop"
              onClick={() =>
                dispatch(changePlaySequenceAction(playSequence + 1))
              }
              onMouseEnter={() => setTipText("播放模式")}
            ></button>
            <button
              className="sprite_player btn playlist"
              onMouseEnter={() => setTipText("播放列表")}
            ></button>
          </div>
        </Operator>
      </div>
      <audio
        ref={audioRef}
        onTimeUpdate={audioTimeUpdateHandler}
        onEnded={audioTimeEndedHandler}
      />
    </AppPlayerBarWrapper>
  );
});
