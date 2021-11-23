import React, { memo, useState } from "react";
import { shallowEqual, useSelector } from "react-redux";

import { getScaledImage } from "@/utils/format-utils";

import KFSongOperationBar from "@/components/song-operation-bar";
import { PlayerInfoWrapper, InfoLeft, InfoRight } from "./style";

export default memo(function KFPlayerInfo() {
  // state and props
  const [isExpanded, setIsExpanded] = useState(false);
  // redux hooks
  const { currentSong, currentLyrics } = useSelector(
    (state) => ({
      currentSong: state.getIn(["player", "currentSong"]),
      currentLyrics: state.getIn(["player", "currentLyrics"]),
    }),
    shallowEqual
  );
  const totalLyricCount = isExpanded ? currentLyrics.length : 13;

  return (
    <PlayerInfoWrapper>
      <InfoLeft>
        <div className="image">
          <img src={getScaledImage(currentSong.al.picUrl, 130)} alt="" />
          <i className="image_cover cover"></i>
        </div>
        <div className="link">
          <i className="sprite_icon2"></i>
          <a href="#/">生成外联播放器</a>
        </div>
      </InfoLeft>
      <InfoRight isExpanded={isExpanded}>
        <div className="header">
          <i className="sprite_icon2"></i>
          <h3 className="title">{currentSong.name ?? "N/A"}</h3>
        </div>
        <div className="singer">
          <span className="label">歌手：</span>
          {currentSong.ar
            ? currentSong.ar.map((item, index) => {
                if (index < currentSong.ar.length - 1) {
                  return (
                    <React.Fragment key={item.name}>
                      <a href="#/" className="name">
                        {item.name}
                      </a>
                      <span className="slash">/</span>
                    </React.Fragment>
                  );
                } else {
                  return (
                    <a key={item.name} href="#/" className="name">
                      {item.name}
                    </a>
                  );
                }
              })
            : "N/A"}
        </div>
        <div className="album">
          <span className="label">所属专辑：</span>
          <a href="#/">{currentSong.al ? currentSong.al.name : "N/A"}</a>
        </div>
        <KFSongOperationBar
          favorTitle="收藏"
          shareTitle="分享"
          downloadTitle="下载"
          commentTitle="(14379)"
        />
        <div className="lyric">
          <div className="lyric-info">
            {currentLyrics.slice(0, totalLyricCount).map((item) => {
              return (
                <p key={item.time} className="text">
                  {item.content}
                </p>
              );
            })}
          </div>
          <button
            className="lyric-control"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            <span>{isExpanded ? "收起" : "展开"}</span>
            <i className="sprite_icon2"></i>
          </button>
        </div>
      </InfoRight>
    </PlayerInfoWrapper>
  );
});
