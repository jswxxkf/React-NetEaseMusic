import React, { memo } from "react";

import { getScaledImage } from "../../utils/format-utils";

import { AlbumWrapper } from "./style";

export default memo(function KFAlbumCover(props) {
  // state and props
  const { info, width = 153, size = 130, bgp = "-845px" } = props;

  return (
    <AlbumWrapper width={width} size={size} bgp={bgp}>
      <div className="album-image">
        <img src={getScaledImage(info.picUrl, size)} alt="" />
        <a href="todo" className="image_cover cover">
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
