import React, { memo } from "react";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import {
  changeCurrentLyricsAction,
  changeCurrentSongAction,
  changePlayListAction,
} from "../../../store/actionCreators";

import {
  PanelPlayHeaderWrapper,
  PlayHeaderLeft,
  PlayHeaderRight,
} from "./style";

export default memo(function KFPanelPlayHeader() {
  // redux hooks
  const dispatch = useDispatch();
  const { playList } = useSelector(
    (state) => ({
      playList: state.getIn(["player", "playList"]),
    }),
    shallowEqual
  );
  // 其他业务逻辑
  const clearPlayListHandler = () => {
    dispatch(changeCurrentLyricsAction([]));
    dispatch(changeCurrentSongAction({}))
    dispatch(changePlayListAction([]));
  };

  return (
    <PanelPlayHeaderWrapper>
      <PlayHeaderLeft>
        <h3>播放列表({playList.length})</h3>
        <div className="operator">
          <button>
            <i className="sprite_playlist icon favor"></i>收藏全部
          </button>
          <button onClick={() => clearPlayListHandler()}>
            <i className="sprite_playlist icon remove"></i>清除
          </button>
        </div>
      </PlayHeaderLeft>
      <PlayHeaderRight></PlayHeaderRight>
    </PanelPlayHeaderWrapper>
  );
});
