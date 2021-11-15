import React, { memo, useState } from "react";

import { getScaledImage } from "../../utils/format-utils";

import { Skeleton } from "antd";
import { AlbumWrapper } from "./style";

export default memo(function KFAlbumCover(props) {
  // state and props
  const [loading, setLoading] = useState(1);
  const { info, width = 153, size = 130, bgp = "-845px" } = props;

  return (
    <AlbumWrapper width={width} size={size} bgp={bgp} loading={loading}>
      <div className="album-image">
        <img
          src={getScaledImage(info.picUrl, size)}
          alt=""
          onLoad={() => setLoading(0)}
        />
        {!!loading && <Skeleton.Image className="skeleton" />}
        <a href="todo" className="sprite_cover cover">
          {info.name}
        </a>
      </div>
      <div className="album-info">
        <div className="name text-no-wrap">{info.name}</div>
        <div className="artist text-no-wrap">{info.artist.name}</div>
      </div>
    </AlbumWrapper>
  );
});
