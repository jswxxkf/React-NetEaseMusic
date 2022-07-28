import * as actionTypes from "./constants";
import {
  getTopBanners,
  getHotRecommends,
  getNewAlbum,
  getTopList,
  getArtistList,
} from "@/service/recommend";

// 派发action mutate状态
export const changeTopBannersAction = (res) => ({
  type: actionTypes.CHANGE_TOP_BANNERS,
  topBanners: res.banners,
});

export const changeHotRecommendsAction = (res) => ({
  type: actionTypes.CHANGE_HOT_RECOMMENDS,
  hotRecommends: res.result,
});

export const changeNewAlbumsAction = (res) => ({
  type: actionTypes.CHANGE_NEW_ALBUMS,
  newAlbums: res.weekData,
});

export const changeThriveRankingAction = (res) => ({
  type: actionTypes.CHANGE_THRIVE_RANKING,
  thriveRanking: res.playlist,
});

export const changeNewRankingAction = (res) => ({
  type: actionTypes.CHANGE_NEW_RANKING,
  newRanking: res.playlist,
});

export const changeOriginRankingAction = (res) => ({
  type: actionTypes.CHANGE_ORIGIN_RANKING,
  originRanking: res.playlist,
});

export const changeSettleSingersAction = (res) => ({
  type: actionTypes.CHANGE_SETTLE_SINGERS,
  settleSingers: res.artists,
});

// 包含网络请求
export const getTopBannersAction = () => {
  return (dispatch) => {
    getTopBanners().then((res) => {
      dispatch(changeTopBannersAction(res));
    });
  };
};

export const getHotRecommendsAction = (limit) => {
  return (dispatch) => {
    getHotRecommends(limit).then((res) => {
      dispatch(changeHotRecommendsAction(res));
    });
  };
};

export const getNewAlbumsAction = (limit, offset) => {
  return (dispatch) => {
    getNewAlbum(limit, offset).then((res) => {
      dispatch(changeNewAlbumsAction(res));
    });
  };
};

export const getTopListAction = (idx) => {
  return (dispatch) => {
    getTopList(idx).then((res) => {
      switch (idx) {
        case 0:
          dispatch(changeThriveRankingAction(res));
          break;
        case 2:
          dispatch(changeNewRankingAction(res));
          break;
        case 3:
          dispatch(changeOriginRankingAction(res));
          break;
        default:
      }
    });
  };
};

export const getSettleSingers = () => {
  return (dispatch) => {
    getArtistList(5, 5001).then((res) => {
      dispatch(changeSettleSingersAction(res));
    });
  };
};
