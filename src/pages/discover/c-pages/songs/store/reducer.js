import { Map } from "immutable";
import * as actionTypes from "./constants";

const defaultState = Map({
  categories: [],
  currentCategory: "全部",
  categorySongs: {},
});

export default function reducer(state = defaultState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_CATEGORIES:
      return state.set("categories", action.categories);
    case actionTypes.CHANGE_CURRENT_CATEGORY:
      return state.set("currentCategory", action.currentCategory);
    case actionTypes.CHANGE_CATEGORY_SONGS:
      return state.set("categorySongs", action.categorySongs);
    default:
      return state;
  }
}
