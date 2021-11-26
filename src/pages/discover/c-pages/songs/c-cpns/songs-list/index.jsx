import React, { memo, useState } from "react";
import { shallowEqual, useSelector, useDispatch } from "react-redux";
import { getCategorySongsAction } from "../../store/actionCreators";
import { PER_PAGE_NUMBER } from "../../store/constants";

import KFSongsCover from "@/components/songs-cover";
import KFPagination from "@/components/pagination";
import { SongsListWrapper } from "./style";

export default memo(function KFSongsList() {
  const [currentPage, setCurrentPage] = useState(1);
  // redux
  const dispatch = useDispatch();
  const { categorySongs } = useSelector(
    (state) => ({
      categorySongs: state.getIn(["songs", "categorySongs"]),
    }),
    shallowEqual
  );
  const songList = categorySongs.playlists || [];
  const total = categorySongs.total || 0;

  // 其他业务逻辑
  const onPageChange = (pageNum, pageSize) => {
    setCurrentPage(pageNum);
    dispatch(getCategorySongsAction(pageNum));
  };

  console.log(songList);

  return (
    <SongsListWrapper>
      <div className="songs-list">
        {songList.map((item, index) => {
          return <KFSongsCover key={item.id} info={item} right={30} />;
        })}
      </div>
      <KFPagination
        currentPage={currentPage}
        total={total}
        pageSize={PER_PAGE_NUMBER}
        onPageChange={onPageChange}
      ></KFPagination>
    </SongsListWrapper>
  );
});
