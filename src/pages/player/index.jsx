import React, { memo } from "react";

import { PlayerWrapper, PlayerLeft, PlayerRight } from "./style";

export default memo(function KFPlayer() {
  return (
    <PlayerWrapper>
      <div className="content wrap-v2">
        <PlayerLeft>
          <h2>KFPlayerInfo</h2>
          <h2>KFSongContent</h2>
        </PlayerLeft>
        <PlayerRight>
          <h2>KFSongs</h2>
          <h2>KFSongContent</h2>
        </PlayerRight>
      </div>
    </PlayerWrapper>
  );
});
