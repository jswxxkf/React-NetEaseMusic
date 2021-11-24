import * as actionTypes from "./constants";
import { PER_PAGE_NUMBER } from "./constants";
// services
import { getSongCategories, getCategorySongs } from "@/service/songs";
// utils
import { handleSongsCategory } from "@/utils/handle-data";

const changeCategoriesAction = (res) => ({
  type: actionTypes.CHANGE_CATEGORIES,
  categories: res,
});

const changeCategorySongsAction = (res) => ({
  type: actionTypes.CHANGE_CATEGORY_SONGS,
  categorySongs: res,
});

export const changeCurrentCategoryAction = (name) => ({
  type: actionTypes.CHANGE_CURRENT_CATEGORY,
  currentCategory: name,
});

export const getCategoriesAction = () => {
  return (dispatch) => {
    getSongCategories().then((res) => {
      const categoryData = handleSongsCategory(res);
      dispatch(changeCategoriesAction(categoryData));
    });
  };
};

export const getCategorySongsAction = (page) => {
  return (dispatch, getState) => {
    // 1. 获取当前类别的名字
    const name = getState().getIn(["songs", "currentCategory"]);
    // 2. 获取当前类别对应的歌单
    getCategorySongs(name, page * PER_PAGE_NUMBER).then((res) => {
      dispatch(changeCategorySongsAction(res));
    });
  };
};
