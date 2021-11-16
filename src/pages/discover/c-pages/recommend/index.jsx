import React, { memo } from "react";

import {
  RecommendWrapper,
  Content,
  RecommendLeft,
  RecommendRight,
} from "./style";

import KFTopBanner from "./c-cpns/top-banner";
import KFHotRecommend from "./c-cpns/hot-recommend";
import KFNewAlbum from "./c-cpns/new-album";
import KFRecommendRanking from "./c-cpns/recommend-ranking";
import KFHotAnchor from "./c-cpns/hot-anchor";
import KFSettleSinger from "./c-cpns/settle-singer";
import KFUserLogin from "./c-cpns/user-login";

function KFRecommend() {
  return (
    <RecommendWrapper>
      <KFTopBanner />
      <Content className="wrap-v2">
        <RecommendLeft>
          <KFHotRecommend />
          <KFNewAlbum />
          <KFRecommendRanking />
        </RecommendLeft>
        <RecommendRight>
          <KFUserLogin />
          <KFSettleSinger />
          <KFHotAnchor />
        </RecommendRight>
      </Content>
    </RecommendWrapper>
  );
}

export default memo(KFRecommend);
