import React, { memo } from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import {
  changeCurrentAreaAction,
  changeCurrentTypeAction,
} from "../../store/actionCreators";

import { artistCategories } from "@/service/local-data";

import { ArtistCategoryWrapper, ArtistCategoryItem } from "./style";
import classNames from "classnames";

export default memo(function KFArtistCategory() {
  // redux
  const dispatch = useDispatch();
  const { currentType, currentArea } = useSelector(
    (state) => ({
      // currentType是一个对象 {type:xxx, name:xxx, url:XXX}
      currentType: state.getIn(["artist", "currentType"]),
      currentArea: state.getIn(["artist", "currentArea"]),
    }),
    shallowEqual
  );

  // 其他业务逻辑
  const onArtistSelect = (area, type) => {
    dispatch(changeCurrentAreaAction(area));
    dispatch(changeCurrentTypeAction(type));
  };

  // render JSX
  const artistRenderer = (artists, area) => {
    return artists.map((artist) => {
      const isSelect = currentArea === area && currentType.type === artist.type;
      return (
        <ArtistCategoryItem
          key={artist.name}
          className={classNames({ active: isSelect })}
        >
          <span onClick={() => onArtistSelect(area, artist)}>
            {artist.name}
          </span>
        </ArtistCategoryItem>
      );
    });
  };

  return (
    <ArtistCategoryWrapper>
      {artistCategories.map((arCategory) => {
        return (
          <div key={arCategory.area} className="section">
            <h2 className="title">{arCategory.title}</h2>
            {artistRenderer(arCategory.artists, arCategory.area)}
          </div>
        );
      })}
    </ArtistCategoryWrapper>
  );
});
