import { Map } from "immutable";
import * as actionType from "./constants";

const defaultState = Map({
  topList: [],
  currentIndex: 0,
  playList: {},
});

function reducer(state = defaultState, action) {
  switch (action.type) {
    case actionType.CHANGE_TOP_LIST:
      // 利用immutableJS优化新值的更改
      return state.set("topList", action.topList);
    case actionType.CHANGE_CURRENT_INDEX:
      return state.set("currentIndex", action.currentIndex);
    case actionType.CHANGE_PLAY_LIST:
      return state.set("playList", action.playList);
    default:
      return state;
  }
}

export default reducer;
