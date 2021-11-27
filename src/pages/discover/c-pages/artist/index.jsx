import React, { memo } from "react";

import KFArtistCategory from "./c-cpns/artist-category";
import KFArtistList from "./c-cpns/artist-list";
import { ArtistWrapper } from "./style";

export default memo(function KFArtist() {
  return (
    <ArtistWrapper>
      <div className="content wrap-v2">
        <KFArtistCategory />
        <KFArtistList />
      </div>
    </ArtistWrapper>
  );
});
