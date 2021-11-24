import * as actionType from "./constants";
import { Map } from "immutable";

const defaultState = Map({
  hotAlbums: [],
  topAlbums: [],
  topTotal: 0,
});

export default function reducer(state = defaultState, action) {
  switch (action.type) {
    case actionType.CHANGE_HOT_ALBUMS:
      return state.set("hotAlbums", action.hotAlbums);
    case actionType.CHANGE_TOP_ALBUMS:
      return state.set("topAlbums", action.topAlbums);
    case actionType.CHANGE_TOP_TOTAL:
      return state.set("topTotal", action.topTotal);
    default:
      return state;
  }
}
