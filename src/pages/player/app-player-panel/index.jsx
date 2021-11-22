import React, { memo } from "react";
import { shallowEqual, useSelector } from "react-redux";
import { getGaussianBlurredImage } from "@/utils/format-utils";

import { AppPlayerPanelWrapper } from "./style";
import KFPanelPlayList from "./c-cpns/play-list";
import KFPanelPlayHeader from "./c-cpns/play-header";

export default memo(function KFAppPlayerPanel() {
  // redux hooks
  const { currentSong } = useSelector(
    (state) => ({
      currentSong: state.getIn(["player", "currentSong"]),
    }),
    shallowEqual
  );

  return (
    <AppPlayerPanelWrapper>
      <KFPanelPlayHeader />
      <div className="main">
        <img
          className="image"
          // 施加高斯模糊
          src={getGaussianBlurredImage(currentSong.al?.picUrl, [40, 20])}
          alt=""
        />
        <KFPanelPlayList />
        <h2>Lyric Panel</h2>
      </div>
    </AppPlayerPanelWrapper>
  );
});
