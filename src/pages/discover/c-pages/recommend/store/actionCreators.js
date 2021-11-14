import * as actionTypes from "./constants";
import { getTopBanners } from "@/service/recommend";
import { getHotRecommends } from "@/service/recommend";

export const changeTopBannerAction = (res) => ({
  type: actionTypes.CHANGE_TOP_BANNERS,
  topBanners: res.banners,
});

export const changeHotRecommendAction = (res) => ({
  type: actionTypes.CHANGE_HOT_RECOMMENDS,
  hotRecommends: res.result,
});

export const getTopBannerAction = () => {
  return (dispatch) => {
    getTopBanners().then((res) => {
      dispatch(changeTopBannerAction(res));
    });
  };
};

export const getHotRecommendsAction = (limit) => {
  return (dispatch) => {
    getHotRecommends().then((res) => {
      console.log(res.result);
      dispatch(changeHotRecommendAction(res));
    });
  };
};
