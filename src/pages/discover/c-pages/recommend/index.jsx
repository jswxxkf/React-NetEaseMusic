import React, { memo, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getTopBannerAction } from "./store/actionCreators";

function KFRecommend() {
  // 组件和redux关联，获取数据和进行操作
  const dispatch = useDispatch();
  const { topBanners } = useSelector((state) => ({
    topBanners: state.recommend.topBanners,
  }));

  useEffect(() => {
    dispatch(getTopBannerAction());
  }, [dispatch]);

  return (
    <div>
      <h2>KFRecommend: {topBanners.length}</h2>
    </div>
  );
}

export default memo(KFRecommend);
