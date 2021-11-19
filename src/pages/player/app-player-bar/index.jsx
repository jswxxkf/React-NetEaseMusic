import React, { memo, useCallback, useEffect, useRef, useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import {
  getSongDetailAction,
  changePlaySongAction,
  changePlaySequenceAction,
} from "../store/actionCreators";
import { getPlayUrl, formatMinuteSecond } from "@/utils/format-utils";

import { AppPlayerBarWrapper, Control, PlayInfo, Operator } from "./style";
import { Slider } from "antd";

export default memo(function KFAppPlayerBar(props) {
  // props & states
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [progress, setProgress] = useState(0);
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
    dispatch(getSongDetailAction(167876));
  }, [dispatch]);

  // currentSong发生改变，需要切换audio标签的状态
  useEffect(() => {
    audioRef.current.src = getPlayUrl(currentSong.id);
    audioRef.current
      .play()
      .then((res) => {
        setIsPlaying(true);
      })
      .catch((err) => {
        setIsPlaying(false);
      });
    setDuration(currentSong.dt);
  }, [currentSong]);

  // 其他业务逻辑
  const play = useCallback(() => {
    setIsPlaying(!isPlaying);
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch((err) => setIsPlaying(false));
    }
  }, [isPlaying]);

  return (
    <AppPlayerBarWrapper className="sprite_player">
      <div className="content wrap-v2">
        <Control>
          <button
            className="sprite_player prev"
            onClick={() => changePlaySongAction(-1)}
          ></button>
          <button
            className="sprite_player play"
            onClick={() => play()}
          ></button>
          <button
            className="sprite_player next"
            onClick={() => changePlaySongAction(1)}
          ></button>
        </Control>
        <PlayInfo>
          <div className="image">
            <a href="/todo">
              <img
                src="https://p4.music.126.net/_9irJFJaSp-hFZ2CHrXE9w==/109951165688557713.jpg?param=34y34"
                alt=""
              />
            </a>
          </div>
          <div className="info">
            <div className="song">
              <span className="song-name">{currentSong.name ?? "---"}</span>
              <a className="singer-name" href="/todo">
                {currentSong.ar[0].name ?? "---"}
              </a>
            </div>
            <div className="progress">
              <Slider className="ant-slider" value={progress} />
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
        <Operator>
          <div className="left">
            <button className="sprite_player btn favor"></button>
            <button className="sprite_player btn share"></button>
          </div>
          <div className="right sprite_player">
            <button className="sprite_player btn volume"></button>
            <button
              className="sprite_player btn loop"
              onClick={() => changePlaySequenceAction(playSequence + 1)}
            ></button>
            <button className="sprite_player btn playlist"></button>
          </div>
        </Operator>
      </div>
      <audio ref={audioRef} onEnded={() => {}}></audio>
    </AppPlayerBarWrapper>
  );
});
