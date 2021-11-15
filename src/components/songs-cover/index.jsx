import React, { memo, useState } from "react";

import { Skeleton } from "antd";
import { SongsCoverWrapper } from "./style";
// utils
import { getCount, getScaledImage } from "../../utils/format-utils";

export default memo(function KGSongsCover(props) {
  // state & props
  const [loading, setLoading] = useState(1);
  const { info } = props;

  return (
    <SongsCoverWrapper loading={loading}>
      <div className="cover-top">
        <img
          src={getScaledImage(info.picUrl, 140)}
          alt=""
          onLoad={() => setLoading(0)}
        />
        {!!loading && <Skeleton.Image className="skeleton" />}
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
