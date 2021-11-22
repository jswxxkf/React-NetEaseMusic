import React, { memo } from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import classNames from "classnames";
import { formatMinuteSecond } from "@/utils/format-utils";
import { getSongDetailAction } from "../../../store/actionCreators";

import { PanelPlayListWrapper } from "./style";

export default memo(function KFPanelPlayList() {
  // redux hooks
  const dispatch = useDispatch();
  const { playList, currentSongIndex } = useSelector(
    (state) => ({
      playList: state.getIn(["player", "playList"]),
      currentSongIndex: state.getIn(["player", "currentSongIndex"]),
    }),
    shallowEqual
  );

  return (
    <PanelPlayListWrapper>
      {playList.map((item, index) => {
        return (
          <div
            key={item.id}
            className={classNames([
              "play-item",
              { active: index === currentSongIndex },
            ])}
            onClick={() => dispatch(getSongDetailAction(playList[index].id))}
          >
            <div className="left">{item.name ?? "---"}</div>
            <div className="right">
              <span className="singer">{item.ar[0]?.name ?? "---"}</span>
              <span className="duration">{formatMinuteSecond(item.dt)}</span>
              <span className="sprite_playlist link"></span>
            </div>
          </div>
        );
      })}
      {playList.length === 0 && (
        <div className="empty-list">您的音乐播放列表空空如也哦~~</div>
      )}
    </PanelPlayListWrapper>
  );
});
