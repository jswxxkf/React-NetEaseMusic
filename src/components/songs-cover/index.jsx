import React, { memo } from "react";

import { SongsCoverWrapper } from "./style";
// utils
import { getCount, getScaledImage } from "../../utils/format-utils";

export default memo(function KGSongsCover(props) {
  const { info } = props;

  return (
    <SongsCoverWrapper>
      <div className="cover-top">
        <img src={getScaledImage(info.picUrl, 140)} alt="" />
        <div className="sprite_cover cover">
          <div className="sprite_cover info">
            <span>
              <i className="sprite_icon headset"></i>
              {getCount(info.playCount)}
            </span>
            <i className="play sprite_icon"></i>
          </div>
        </div>
      </div>
      <div className="cover-bottom text-nowrap">{info.name}</div>
      <div className="cover-source text-nowrap">
        by {info.copywriter || info.creator?.nickname || "N/A"}
      </div>
    </SongsCoverWrapper>
  );
});
