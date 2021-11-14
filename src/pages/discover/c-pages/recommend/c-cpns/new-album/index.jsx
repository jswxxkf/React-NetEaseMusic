import React, { memo, useEffect, useRef } from "react";

import { useDispatch, useSelector } from "react-redux";
import { getNewAlbumsAction } from "../../store/actionCreators";
import { NEW_ALBUM_PAGE_NUM, NEW_ALBUM_PER_PAGE } from "@/common/constants";

import { Carousel } from "antd";
import KFThemeHeaderRCM from "@/components/theme-header-rcm";
import KFAlbumCover from "@/components/album-cover";
import { AlbumWrapper } from "./style";

export default memo(function KFNewAlbum() {
  // redux hooks
  const dispatch = useDispatch();
  const { newAlbums } = useSelector((state) => ({
    newAlbums: state.getIn(["recommend", "newAlbums"]),
  }));

  // other hooks
  useEffect(() => {
    dispatch(getNewAlbumsAction(NEW_ALBUM_PAGE_NUM * NEW_ALBUM_PER_PAGE));
  }, [dispatch]);
  const pageRef = useRef();

  return (
    <AlbumWrapper>
      <KFThemeHeaderRCM title="新碟上架" />
      <div className="content">
        <button
          className="sprite_02 arrow arrow-left"
          onClick={() => pageRef.current.prev()}
        ></button>
        <div className="album">
          <Carousel dots={false} ref={pageRef}>
            {new Array(NEW_ALBUM_PAGE_NUM).fill(0).map((_, index) => {
              return (
                <div key={index} className="page">
                  {newAlbums
                    .slice(
                      index * NEW_ALBUM_PER_PAGE,
                      (index + 1) * NEW_ALBUM_PER_PAGE
                    )
                    .map((item_) => {
                      return (
                        <KFAlbumCover
                          key={item_.id}
                          info={item_}
                          size={100}
                          width={118}
                          bgp="-570px"
                        >
                          {item_.name}
                        </KFAlbumCover>
                      );
                    })}
                </div>
              );
            })}
          </Carousel>
        </div>
        <button
          className="sprite_02 arrow arrow-right"
          onClick={() => pageRef.current.next()}
        ></button>
      </div>
    </AlbumWrapper>
  );
});
