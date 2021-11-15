import React, { memo } from "react";
import { getScaledImage } from "@/utils/format-utils";

import { TopRankingWrapper } from "./style";

export default memo(function KFTopRanking(props) {
  // state & props
  const { info } = props;
  const { tracks = [] } = info;

  return (
    <TopRankingWrapper>
      <div className="header">
        <div className="image">
          <img src={getScaledImage(info.coverImgUrl)} alt="" />
        </div>
        <div className="info">
          <a href="/todo">{info.name}</a>
          <div>
            <button className="sprite_02 play btn"></button>
            <button className="sprite_02 favor btn"></button>
          </div>
        </div>
      </div>
      <div className="list">
        {tracks.slice(0, 10).map((item, index) => {
          return (
            <div key={item.id} className="list-item">
              <div className="rank">{index + 1}</div>
              <div className="info">
                <div className="name text-nowrap" title={item.name}>
                  {item.name}
                </div>
                <div className="operate">
                  <button className="btn sprite_02 play"></button>
                  <button className="btn sprite_icon2 addto"></button>
                  <button className="btn sprite_02 favor"></button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="footer">
        <a href="/todo">查看全部 &gt;</a>
      </div>
    </TopRankingWrapper>
  );
});
