import React, { memo, useEffect, useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { PER_PAGE_NUMBER } from "../../store/constants";
import { getTopAlbumsAction } from "../../store/actionCreators";

import KFThemeHeaderNormal from "@/components/theme-header-normal";
import KFAlbumCover from "@/components/album-cover";
import KFPagination from "@/components/pagination";
import { TopAlbumWrapper } from "./style";

export default memo(function KFTopAlbum() {
  // state & props
  const [currentPage, setCurrentPage] = useState(1);
  // redux hooks
  const dispatch = useDispatch();
  const { topAlbums, topTotal } = useSelector(
    (state) => ({
      topAlbums: state.getIn(["album", "topAlbums"]),
      topTotal: state.getIn(["album", "topTotal"]),
    }),
    shallowEqual
  );

  // other hooks
  useEffect(() => {
    dispatch(getTopAlbumsAction(1));
  }, [dispatch]);

  // 其他业务逻辑
  const onPageChange = (page) => {
    setCurrentPage(page);
    dispatch(getTopAlbumsAction(page));
  };

  return (
    <TopAlbumWrapper>
      <KFThemeHeaderNormal title="最佳新碟" />
      <div className="album-list">
        {topAlbums.map((item) => {
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
      <KFPagination
        currentPage={currentPage}
        total={topTotal}
        pageSize={PER_PAGE_NUMBER}
        onPageChange={onPageChange}
      />
    </TopAlbumWrapper>
  );
});
