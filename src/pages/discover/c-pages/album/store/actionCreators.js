import * as actionType from "./constants";
import { getHotAlbums, getTopAlbums } from "@/service/album";

export const changeTopAlbumsAction = (res) => ({
  type: actionType.CHANGE_TOP_ALBUMS,
  topAlbums: res.albums,
});

export const changeHotAlbumsAction = (res) => ({
  type: actionType.CHANGE_HOT_ALBUMS,
  hotAlbums: res.albums,
});

export const changeTopTotalAction = (total) => ({
  type: actionType.CHANGE_TOP_TOTAL,
  total,
});

export const getTopAlbumsAction = () => {
  return (dispatch) => {
    getHotAlbums().then((res) => {
      dispatch(changeHotAlbumsAction(res));
    });
  };
};

export const getHotAlbumsAction = (pageNum) => {
  return (dispatch) => {
    getTopAlbums(30, (pageNum - 1) * 30).then((res) => {
      dispatch(changeHotAlbumsAction(res));
      dispatch(changeTopTotalAction(res.total));
    });
  };
};
