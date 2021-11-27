import React, { memo } from "react";
import { useSelector, shallowEqual } from "react-redux";

import KFThemeHeaderNormal from "@/components/theme-header-normal";
import KFAlphabetList from "./c-cpns/alphabet-list";
import KFArtistItem from "./c-cpns/artist-item";
import { ArtistListWrapper } from "./style";

export default memo(function KFArtistList() {
  // redux
  const { currentType, artistList } = useSelector(
    (state) => ({
      currentType: state.getIn(["artist", "currentType"]),
      artistList: state.getIn(["artist", "artistList"]),
    }),
    shallowEqual
  );

  return (
    <ArtistListWrapper>
      <KFThemeHeaderNormal title={currentType.name} />
      <KFAlphabetList />
      <div className="artist-list">
        {artistList.map((item, index) => {
          return <KFArtistItem key={item.id} index={index} info={item} />;
        })}
      </div>
    </ArtistListWrapper>
  );
});
