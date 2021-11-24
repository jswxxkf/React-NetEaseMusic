import React, { memo } from "react";

import KFHotAlbum from "./c-cpns/hot-album";
import KFTopAlbum from "./c-cpns/top-album";
import { AlbumWrapper } from "./style";

export default memo(function KFAlbum() {
  return (
    <AlbumWrapper className="wrap-v2">
      <KFHotAlbum />
      <KFTopAlbum />
    </AlbumWrapper>
  );
});
