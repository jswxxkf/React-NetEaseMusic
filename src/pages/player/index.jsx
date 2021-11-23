import React, { memo } from "react";

import KFPlayerInfo from "./c-cpns/player-info";
import KFPlayerComment from "./c-cpns/player-comment";
import KFPlayerSongs from "./c-cpns/player-songs";
import KFPlayerRelevant from "./c-cpns/player-relevant";
import { PlayerWrapper, PlayerLeft, PlayerRight } from "./style";

export default memo(function KFPlayer() {
  return (
    <PlayerWrapper>
      <div className="content wrap-v2">
        <PlayerLeft>
          <KFPlayerInfo />
          <KFPlayerComment />
        </PlayerLeft>
        <PlayerRight>
          <KFPlayerSongs />
          <KFPlayerRelevant />
        </PlayerRight>
      </div>
    </PlayerWrapper>
  );
});
