import React, { memo, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";

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
  const cat = useLocation().cat;

  // other hooks
  useEffect(() => {
    dispatch(getCategoriesAction());
    dispatch(getCategorySongsAction(0));
  }, [dispatch]);

  useEffect(() => {
    dispatch(changeCurrentCategoryAction(cat));
  }, [dispatch, cat]);

  // 其他业务逻辑

  return (
    <SongsWrapper className="wrap-v2">
      <KFSongsHeader />
      <KFSongsList />
    </SongsWrapper>
  );
});
