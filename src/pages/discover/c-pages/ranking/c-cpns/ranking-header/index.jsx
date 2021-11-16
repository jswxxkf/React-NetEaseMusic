import React, { memo } from "react";
import { useSelector, shallowEqual } from "react-redux";

import { formatMonthDay } from "@/utils/format-utils";
import KFSongOperationBar from "@/components/song-operation-bar";
import { RankingHeaderWrapper } from "./style";

export default memo(function KFRankingHeader() {
  // redux hooks
  const {
    topList,
    currentIndex,
    playList: headerInfo,
  } = useSelector(
    (state) => ({
      topList: state.getIn(["ranking", "topList"]),
      currentIndex: state.getIn(["ranking", "currentIndex"]),
      playList: state.getIn(["ranking", "playList"]),
    }),
    shallowEqual
  );

  return (
    <RankingHeaderWrapper>
      <div className="image">
        <img src={headerInfo.coverImgUrl} alt="" />
        <div className="image_cover cover">封面</div>
      </div>
      <div className="info">
        <div className="title">{headerInfo.name ?? " "}</div>
        <div className="time">
          <i className="sprite_icon2 clock"></i>
          <div>
            最近更新：{formatMonthDay(headerInfo.updateTime ?? new Date())}
          </div>
          <div className="update-freq">
            （{topList[currentIndex]?.updateFrequency}）
          </div>
        </div>
        <KFSongOperationBar
          favorTitle={`(${headerInfo.subscribedCount ?? "loading"})`}
          shareTitle={`(${headerInfo.shareCount ?? "loading"})`}
          downloadTitle="下载"
          commentTitle={`(${headerInfo.commentCount ?? "loading"})`}
        />
      </div>
    </RankingHeaderWrapper>
  );
});
