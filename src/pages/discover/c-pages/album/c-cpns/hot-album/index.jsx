import React, { memo, useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

import { getHotAlbumsAction } from "../../store/actionCreators";

import KFThemeHeaderNormal from "@/components/theme-header-normal";
import KFAlbumCover from "@/components/album-cover";
import { HotAlbumWrapper } from "./style";

export default memo(function KFHotAlbum() {
  // redux hooks
  const dispatch = useDispatch();
  const { hotAlbums } = useSelector(
    (state) => ({
      hotAlbums: state.getIn(["album", "hotAlbums"]),
    }),
    shallowEqual
  );

  // other hooks
  useEffect(() => {
    dispatch(getHotAlbumsAction());
  }, [dispatch]);

  return (
    <HotAlbumWrapper>
      <KFThemeHeaderNormal title="热门新碟" />
      <div className="album-list">
        {hotAlbums.slice(0, 10).map((item) => {
          return (
            <KFAlbumCover
              key={item.id}
              width={153}
              size={130}
              bgp={"-845px"}
              info={item}
            />
          );
        })}
      </div>
    </HotAlbumWrapper>
  );
});
