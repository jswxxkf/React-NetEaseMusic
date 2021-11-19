import { combineReducers } from "redux-immutable";
import { reducer as recommendReducer } from "../pages/discover/c-pages/recommend/store";
import { reducer as rankingReducer } from "../pages/discover/c-pages/ranking/store";
import { reducer as playerReducer } from "../pages/player/store";

const cReducer = combineReducers({
  recommend: recommendReducer,
  ranking: rankingReducer,
  player: playerReducer,
});

export default cReducer;
