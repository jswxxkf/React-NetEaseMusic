import React, { memo, useEffect } from "react";
import { useDispatch } from "react-redux";
import { getTopListAction } from "./store/actionCreators";

// sub cpn
import KFTopRanking from "./c-cpns/top-ranking";
import KFRankingHeader from "./c-cpns/ranking-header";
import KFRankingList from "./c-cpns/ranking-list";
import { RankingWrapper, RankingLeft, RankingRight } from "./style";

export default memo(function KFRanking() {
  // redux hooks
  const dispatch = useDispatch();
  // other hooks
  useEffect(() => {
    dispatch(getTopListAction());
  }, [dispatch]);

  return (
    <RankingWrapper className="wrap-v2">
      <RankingLeft>
        <KFTopRanking />
      </RankingLeft>
      <RankingRight>
        <KFRankingHeader />
        <KFRankingList />
      </RankingRight>
    </RankingWrapper>
  );
});
