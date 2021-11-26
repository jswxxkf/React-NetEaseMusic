import React, { memo, useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

import {
  getCategoriesAction,
  getCategorySongsAction,
  changeCurrentCategoryAction,
} from "./store/actionCreators";

import KFSongsHeader from "./c-cpns/songs-header";
import KFSongsList from "./c-cpns/songs-list";
import { SongsWrapper } from "./style";

export default memo(function KFSongs() {
  // redux hooks
  const dispatch = useDispatch();
  const { currentCategory } = useSelector(
    (state) => ({
      currentCategory: state.getIn(["songs", "currentCategory"]),
    }),
    shallowEqual
  );

  // other hooks
  // 一进入歌单页面，随即获取所有类别数据及默认类别(全部)下的歌曲
  useEffect(() => {
    dispatch(getCategoriesAction());
    dispatch(getCategorySongsAction(0));
  }, [dispatch]);

  useEffect(() => {
    dispatch(changeCurrentCategoryAction(currentCategory));
  }, [dispatch, currentCategory]);

  // 其他业务逻辑

  return (
    <SongsWrapper className="wrap-v2">
      <KFSongsHeader />
      <KFSongsList />
    </SongsWrapper>
  );
});
