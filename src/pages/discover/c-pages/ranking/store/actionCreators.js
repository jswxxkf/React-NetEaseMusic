import * as actionType from "./constants";

import { getTopList, getPlayList } from "@/service/ranking";

// 相当于mutations
export const changeTopListAction = (res) => ({
  type: actionType.CHANGE_TOP_LIST,
  topList: res.list,
});

export const changePlayListAction = (res) => ({
  type: actionType.CHANGE_PLAY_LIST,
  playList: res.playlist,
});

export const changeCurrIndexAction = (index) => ({
  type: actionType.CHANGE_CURRENT_INDEX,
  currentIndex: index,
});

// 相当于actions
export const getTopListAction = () => {
  return (dispatch) => {
    getTopList().then((res) => {
      dispatch(changeTopListAction(res));
    });
  };
};

export const getPlayListAction = (id) => {
  return (dispatch) => {
    getPlayList(id).then((res) => {
      dispatch(changePlayListAction(res));
    });
  };
};
