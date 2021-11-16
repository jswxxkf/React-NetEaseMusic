import React, { memo } from "react";
import { useSelector } from "react-redux";
import { ThemeHeaderSongWrapper } from "./style";

export default memo(function KFThemeHeaderSong(props) {
  // redux hooks
  const { playList } = useSelector((state) => ({
    playList: state.getIn(["ranking", "playList"]),
  }));
  return (
    <ThemeHeaderSongWrapper>
      <div className="left">
        <h3 className="title">歌曲列表</h3>
        <div className="count">{playList.trackCount ?? "- - -"} 首歌</div>
      </div>
      <div className="right">
        <span>播放：</span>
        <span className="count">{playList.playCount ?? "- - -"}</span>
        <span>次</span>
      </div>
    </ThemeHeaderSongWrapper>
  );
});
