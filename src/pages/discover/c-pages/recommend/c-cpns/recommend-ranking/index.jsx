import React, { memo, useEffect } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";

import { getTopListAction } from "../../store/actionCreators";

import KFThemeHeaderRCM from "@/components/theme-header-rcm";
import KFTopRanking from "@/components/top-ranking";
import { RankingWrapper } from "./style";

export default memo(function KFRecommendRanking() {
  // redux hooks
  const dispatch = useDispatch();
  const { thriveRanking, newRanking, originRanking } = useSelector(
    (state) => ({
      thriveRanking: state.getIn(["recommend", "thriveRanking"]),
      newRanking: state.getIn(["recommend", "newRanking"]),
      originRanking: state.getIn(["recommend", "originRanking"]),
    }),
    shallowEqual
  );

  // other hooks
  useEffect(() => {
    dispatch(getTopListAction(0));
    dispatch(getTopListAction(2));
    dispatch(getTopListAction(3));
  }, [dispatch]);

  return (
    <RankingWrapper>
      <KFThemeHeaderRCM title="推荐榜单" />
      <div className="tops">
        <KFTopRanking info={thriveRanking} />
        <KFTopRanking info={newRanking} />
        <KFTopRanking info={originRanking} />
      </div>
    </RankingWrapper>
  );
});
