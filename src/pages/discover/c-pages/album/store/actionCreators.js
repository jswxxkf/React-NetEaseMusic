import * as actionType from "./constants";
import { PER_PAGE_NUMBER } from "./constants";
import { getHotAlbums, getTopAlbums } from "@/service/album";

export const changeTopAlbumsAction = (res) => ({
  type: actionType.CHANGE_TOP_ALBUMS,
  topAlbums: res.albums,
});

export const changeHotAlbumsAction = (res) => ({
  type: actionType.CHANGE_HOT_ALBUMS,
  hotAlbums: res.albums,
});

export const changeTopTotalAction = (topTotal) => ({
  type: actionType.CHANGE_TOP_TOTAL,
  topTotal,
});

export const getHotAlbumsAction = () => {
  return (dispatch) => {
    getHotAlbums().then((res) => {
      dispatch(changeHotAlbumsAction(res));
    });
  };
};

export const getTopAlbumsAction = (pageNum) => {
  return (dispatch) => {
    getTopAlbums(PER_PAGE_NUMBER, (pageNum - 1) * PER_PAGE_NUMBER).then(
      (res) => {
        dispatch(changeTopAlbumsAction(res));
        dispatch(changeTopTotalAction(res.total));
      }
    );
  };
};
