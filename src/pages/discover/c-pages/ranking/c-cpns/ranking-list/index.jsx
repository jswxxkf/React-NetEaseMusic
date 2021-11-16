import React, { memo } from "react";
import { useSelector } from "react-redux";

import { formatMinuteSecond, getScaledImage } from "@/utils/format-utils";
import { RankingListWrapper } from "./style";
import KFThemeHeaderSong from "@/components/theme-header-song";

export default memo(function KFRankingList() {
  // redux hooks
  const { playList } = useSelector((state) => ({
    playList: state.getIn(["ranking", "playList"]),
  }));
  const tracks = playList.tracks || [];

  return (
    <RankingListWrapper>
      <KFThemeHeaderSong />
      <div className="play-list">
        <table>
          <thead>
            <tr>
              <th className="ranking">排名</th>
              <th className="title">标题</th>
              <th className="duration">时长</th>
              <th className="singer">歌手</th>
            </tr>
          </thead>
          <tbody>
            {tracks.map((item, index) => {
              return (
                <tr key={item.id}>
                  <td>
                    <div className="rank-num">
                      <span className="num">{index + 1}</span>
                      <span className="new sprite_icon2"></span>
                    </div>
                  </td>
                  <td>
                    <div className="song-name">
                      {index < 3 ? (
                        <img src={getScaledImage(item.al.picUrl, 50)} alt="" />
                      ) : null}
                      <span className="play sprite_table"></span>
                      <span className="name text-nowrap" title={item.name}>
                        {item.name}
                      </span>
                    </div>
                  </td>
                  <td>{formatMinuteSecond(item.dt)}</td>
                  <td
                    className="artist-name text-nowrap"
                    title={item.ar[0]?.name}
                  >
                    {item.ar[0]?.name}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </RankingListWrapper>
  );
});
