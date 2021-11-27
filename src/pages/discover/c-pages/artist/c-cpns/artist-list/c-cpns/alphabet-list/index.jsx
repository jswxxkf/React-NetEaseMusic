import React, { memo, useState, useEffect } from "react";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import classNames from "classnames";

import { singerAlphas } from "@/utils/handle-data";
import { getArtistListAction } from "../../../../store/actionCreators";

import { AlphabetListWrapper } from "./style";

export default memo(function KFAlphabetList() {
  // states & props
  const [currentAlpha, setCurrentAlpha] = useState("-1");
  // redux
  const dispatch = useDispatch();
  const { currentType, currentArea } = useSelector(
    (state) => ({
      currentType: state.getIn(["artist", "currentType"]),
      currentArea: state.getIn(["artist", "currentArea"]),
    }),
    shallowEqual
  );

  // other hooks
  // 切换左侧类别及区域，重置当前首字母为热门
  useEffect(() => {
    setCurrentAlpha("-1");
  }, [currentArea, currentType]);

  // 切换歌手名字首字母，重新获取当前区域及类别下的歌手信息
  useEffect(() => {
    dispatch(getArtistListAction(currentArea, currentType.type, currentAlpha));
  }, [dispatch, currentAlpha, currentType, currentArea]);

  return (
    <AlphabetListWrapper>
      {currentArea !== -1 &&
        singerAlphas.map((alpha) => {
          const isActive = currentAlpha === alpha;
          let alpha_ = alpha;
          if (alpha === "0") alpha_ = "其他";
          if (alpha === "-1") alpha_ = "热门";
          return (
            <div
              key={alpha}
              className={classNames("item", { active: isActive })}
            >
              <span onClick={() => setCurrentAlpha(alpha)}>
                {alpha_.toUpperCase()}
              </span>
            </div>
          );
        })}
    </AlphabetListWrapper>
  );
});
