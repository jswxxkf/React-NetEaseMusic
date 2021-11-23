import React, { memo, useEffect } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { getSimilarPlayListAction } from "../../store/actionCreators";

import { getScaledImage } from "@/utils/format-utils";

import KFThemeHeaderSmall from "@/components/theme-header-small";
import { PlayerSongsWrapper } from "./style";

export default memo(function KFPlayerSongs() {
  // redux hooks
  const dispatch = useDispatch();
  const { currentSong, similarPlayList } = useSelector(
    (state) => ({
      currentSong: state.getIn(["player", "currentSong"]),
      similarPlayList: state.getIn(["player", "similarPlayList"]),
    }),
    shallowEqual
  );

  // other hooks
  // 注意！currentSong发生改变后，拿到新的歌曲id
  // 这样才能在切歌时去重新获取该id对应的相似歌单
  useEffect(() => {
    dispatch(getSimilarPlayListAction());
  }, [dispatch, currentSong]);

  return (
    <PlayerSongsWrapper>
      <KFThemeHeaderSmall title="包括这首歌的歌单" />
      <div className="songs">
        {similarPlayList?.map((item) => {
          return (
            <div key={item.id} className="song-item">
              <a href="#/" className="image">
                <img src={getScaledImage(item.coverImgUrl, 50)} alt="" />
              </a>
              <div className="info">
                <a href="#/" className="name text-nowrap">
                  {item.name ?? "N/A"}
                </a>
                <div className="source">
                  by
                  <a href="#/" className="nickname text-nowrap">
                    {item.creator ? item.creator.nickname : "N/A"}
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </PlayerSongsWrapper>
  );
});
