import React, { memo, useEffect } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";

import {
  changeCurrIndexAction,
  getPlayListAction,
} from "../../store/actionCreators";
import classNames from "classnames";
import { getScaledImage } from "@/utils/format-utils";

import { TopRankingWrapper } from "./style";

export default memo(function KFTopRanking() {
  // redux hooks
  const { topList, currentIndex } = useSelector(
    (state) => ({
      topList: state.getIn(["ranking", "topList"]),
      currentIndex: state.getIn(["ranking", "currentIndex"]),
    }),
    shallowEqual
  );
  const dispatch = useDispatch();

  // other hooks
  useEffect(() => {
    const id = topList[currentIndex] && topList[currentIndex].id;
    if (!id) return;
    dispatch(getPlayListAction(id));
  }, [topList, currentIndex, dispatch]);

  const handleItemClick = (index) => {
    dispatch(changeCurrIndexAction(index));
    const id = topList[index].id;
    dispatch(getPlayListAction(id));
  };

  return (
    <TopRankingWrapper>
      {topList.map((item, index) => {
        let header;
        if (index === 0 || index === 4) {
          header = (
            <div className="header">
              {index === 0 ? "云音乐特色榜" : "全球媒体榜"}
            </div>
          );
        }
        return (
          <React.Fragment key={item.id}>
            {header}
            <div
              className={classNames("item", { active: index === currentIndex })}
              onClick={() => handleItemClick(index)}
            >
              <img src={getScaledImage(item.coverImgUrl, 40)} alt="" />
              <div className="info">
                <div className="name">{item.name}</div>
                <div className="update">{item.updateFrequency}</div>
              </div>
            </div>
          </React.Fragment>
        );
      })}
    </TopRankingWrapper>
  );
});
