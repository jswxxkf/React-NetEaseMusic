import React, { useEffect } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";

import { HOT_RECOMMEND_LIMIT } from "@/common/constants";

import { getHotRecommendsAction } from "../../store/actionCreators";
import { HotRecommendWrapper } from "./style";
import KFThemeHeaderRCM from "@/components/theme-header-rcm";
import SongsCover from "@/components/songs-cover";

export default function KFHotRecommend() {
  // internal states

  // redux hooks
  const dispatch = useDispatch();
  const { hotRecommends } = useSelector(
    (state) => ({
      hotRecommends: state.getIn(["recommend", "hotRecommends"]),
    }),
    shallowEqual
  );
  // other hooks
  useEffect(() => {
    dispatch(getHotRecommendsAction(HOT_RECOMMEND_LIMIT));
  }, [dispatch]);

  return (
    <HotRecommendWrapper>
      <KFThemeHeaderRCM
        title="热门推荐"
        keywords={["华语", "流行", "民谣", "摇滚", "电子"]}
      />
      <div className="recommend-list">
        {hotRecommends.map((item, index) => {
          return (
            <SongsCover key={item.id} info={item}>
              {item.name}
            </SongsCover>
          );
        })}
      </div>
    </HotRecommendWrapper>
  );
}
