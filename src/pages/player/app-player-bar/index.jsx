import React, { memo, useCallback, useEffect, useRef, useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import {
  getSongDetailAction,
  changePlaySongAction,
  changePlaySequenceAction,
  changeCurrentLyricIndexAction,
} from "../store/actionCreators";
import {
  getPlayUrl,
  formatMinuteSecond,
  getScaledImage,
} from "@/utils/format-utils";
import classNames from "classnames";

import { Slider, message } from "antd";
import { CSSTransition } from "react-transition-group";
import { AppPlayerBarWrapper, Control, PlayInfo, Operator } from "./style";
import KFAppPlayerPanel from "../app-player-panel";

export default memo(function KFAppPlayerBar(props) {
  // props & states & non-reactive
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [progress, setProgress] = useState(0);
  const [showPlayerPanel, setShowPlayerPanel] = useState(false);
  // 进度条进度正在被拖拽而变化
  const [isChanging, setIsChanging] = useState(false);
  // hover时，上方提示文字
  const [tipText, setTipText] = useState("");
  // 歌词同步微调值(s)
  const [lyricFineTune, setLyricFineTune] = useState(-0.5);
  const fineTuneValues = [-1, -0.5, 0, 0.5, 1];

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

  // 播放列表清空后的副作用
  useEffect(() => {
    if (playList.length === 0) {
      setIsPlaying(false);
      setCurrentTime(0);
      setProgress(0);
      setDuration(0);
      message.destroy();
    }
  }, [playList]);

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

  // 播放列表面板展示时的副作用(需隐藏播放条上方歌词)
  useEffect(() => {
    if (showPlayerPanel) {
      message.destroy();
    }
  }, [showPlayerPanel]);

  // 其他业务逻辑
  // 切换歌曲
  const switchMusic = (tag) => {
    if (playList.length === 0) return;
    // 若随机到相同歌曲，也应当置为从头开始
    audioRef.current.currentTime = 0;
    dispatch(changePlaySongAction(tag));
  };

  // 切换audio的播放/暂停
  const play = useCallback(() => {
    if (playList.length === 0) return;
    setIsPlaying(!isPlaying);
    if (isPlaying) {
      audioRef.current.pause();
      setTipText("播放");
    } else {
      audioRef.current
        .play()
        .then((res) => setTipText("暂停"))
        .catch((err) => setIsPlaying(false));
    }
  }, [isPlaying, playList.length]);

  // audio播放中，需要更新slider的progress
  const audioTimeUpdateHandler = (e) => {
    if (playList.length === 0) return;
    const currentTime = e.target.currentTime; // 拿到的是秒
    // 如果进度条没有在拖拽，则更新当前播放时间
    if (!isChanging) {
      setCurrentTime(currentTime);
      setProgress(((currentTime * 1000) / duration) * 100); // (当前时间[ms]/总时长[ms]%)
    }
    // 获取当前时间对应的歌词
    let lyricLength = currentLyrics.length;
    let i = 0;
    for (; i < lyricLength; ++i) {
      const lyricTime = currentLyrics[i].time;
      if ((currentTime + lyricFineTune) * 1000 < lyricTime) {
        break;
      }
    }
    // 当前的i指向的是下一句歌词，故减去一
    // 但假如微调后取到-1,即数组越界，则需要置为0
    const finalIndex = i - 1 < 0 ? 0 : i - 1;
    // finalIndex为0，也必须先行更新歌词(避免切歌后，仍显示上一首歌的第一句歌词)
    if (finalIndex === 0 && !showPlayerPanel) {
      message.open({
        content: currentLyrics[0]?.content ?? " ",
        key: "lyric",
        duration: 0,
        className: "lyric-msg",
      });
    }
    // 避免频繁操作redux
    if (finalIndex !== currentLyricIndex) {
      dispatch(changeCurrentLyricIndexAction(finalIndex));
      if (!showPlayerPanel) {
        message.open({
          content: currentLyrics[finalIndex]?.content ?? " ",
          key: "lyric",
          duration: 0,
          className: "lyric-msg",
        });
      }
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

  const mapPlaySeqToMode = (playSeq) => {
    switch (playSeq) {
      case 0:
        return "顺序播放";
      case 1:
        return "随机播放";
      case 2:
        return "单曲循环";
      default:
        return "顺序播放";
    }
  };

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
            onMouseEnter={() => setTipText(isPlaying ? "暂停" : "播放")}
          ></button>
          <button
            className="sprite_player next"
            onClick={() => switchMusic(1)}
            onMouseEnter={() => setTipText("下一首")}
          ></button>
        </Control>
        <PlayInfo tipText={tipText}>
          <div
            className="image"
            onMouseEnter={() => setTipText("进入歌曲详情页")}
          >
            <NavLink to="/discover/player">
              <img
                src={getScaledImage(
                  currentSong.al
                    ? currentSong.al.picUrl
                    : "https://s4.music.126.net/style/web2/img/default/default_album.jpg",
                  34
                )}
                alt=""
              />
            </NavLink>
          </div>
          <div className="info">
            <div className="song">
              <span className="song-name">{currentSong.name ?? "N/A"}</span>
              <a className="singer-name" href="/todo">
                {currentSong.ar ? currentSong.ar[0].name : "N/A"}
              </a>
              <div
                className="lyric-finetune-panel"
                onMouseEnter={() => setTipText("歌词同步微调")}
              >
                {fineTuneValues.map((item, index) => {
                  return (
                    <span
                      key={index}
                      className={classNames([
                        "finetune-value",
                        { activeFinetune: item === lyricFineTune },
                      ])}
                      onClick={() => setLyricFineTune(item)}
                    >
                      {item > 0 && "+"}
                      {item}s
                    </span>
                  );
                })}
              </div>
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
                  {playList.length === 0
                    ? "N/A"
                    : formatMinuteSecond(currentTime * 1000)}
                </span>
                <span className="divider">/</span>
                <span className="duration">
                  {playList.length === 0 ? "N/A" : formatMinuteSecond(duration)}
                </span>
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
              onClick={() => {
                setTipText(mapPlaySeqToMode(playSequence + 1));
                dispatch(changePlaySequenceAction(playSequence + 1));
              }}
              onMouseEnter={() => setTipText(mapPlaySeqToMode(playSequence))}
            ></button>
            <button
              className="sprite_player btn playlist"
              onClick={() => {
                setTipText(showPlayerPanel ? "显示播放列表" : "隐藏播放列表");
                setShowPlayerPanel(!showPlayerPanel);
              }}
              onMouseEnter={() =>
                setTipText(showPlayerPanel ? "隐藏播放列表" : "显示播放列表")
              }
            >
              <span className="play-num">{playList.length}</span>
            </button>
          </div>
        </Operator>
      </div>
      <audio
        ref={audioRef}
        onTimeUpdate={audioTimeUpdateHandler}
        onEnded={audioTimeEndedHandler}
      />
      <CSSTransition
        in={showPlayerPanel}
        timeout={500}
        unmountOnExit={true}
        classNames="panel"
      >
        <KFAppPlayerPanel />
      </CSSTransition>
    </AppPlayerBarWrapper>
  );
});
