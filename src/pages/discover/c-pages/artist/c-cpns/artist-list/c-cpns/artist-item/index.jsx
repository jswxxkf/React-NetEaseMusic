import React, { memo } from "react";
import { getScaledImage } from "@/utils/format-utils";
import { ArtistItemWrapper } from "./style";

export default memo(function KFArtistItem(props) {
  // state & props
  const { info, index } = props;

  return (
    <ArtistItemWrapper>
      {index < 10 && (
        <div className="image">
          <img src={getScaledImage(info.img1v1Url, 130)} alt="" />
        </div>
      )}
      <div className="info">
        <span className="name text-nowrap" title={info.name}>
          {info.name}
        </span>
        <i className="sprite_icon2 icon"></i>
      </div>
    </ArtistItemWrapper>
  );
});
