import React, { memo, useEffect } from "react";
import { shallowEqual, useSelector, useDispatch } from "react-redux";
import {
  getSimilarSongsAction,
  getSongDetailAction,
} from "../../store/actionCreators";

import KFThemeHeaderSmall from "@/components/theme-header-small";
import { PlayerRelevantWrapper } from "./style";

export default memo(function KFPlayerRelevant() {
  // redux hooks
  const dispatch = useDispatch();
  const { currentSong, similarSongs } = useSelector(
    (state) => ({
      currentSong: state.getIn(["player", "currentSong"]),
      similarSongs: state.getIn(["player", "similarSongs"]),
    }),
    shallowEqual
  );

  // other hooks
  // 注意！currentSong发生改变后，拿到新的歌曲id
  // 这样才能在切歌时去重新获取该id对应的相似歌曲
  useEffect(() => {
    dispatch(getSimilarSongsAction());
  }, [dispatch, currentSong]);

  return (
    <PlayerRelevantWrapper>
      <KFThemeHeaderSmall title="相似歌曲" />
      <div className="songs">
        {similarSongs?.map((item) => {
          return (
            <div key={item.id} className="song-item">
              <div className="info">
                <div className="title">
                  <a href="#/" className="text-nowrap">
                    {item.name ?? "N/A"}
                  </a>
                </div>
                <div className="artist text-nowrap">
                  {item.artists
                    ? item.artists.map((artist, index) => {
                        if (index < item.artists.length - 1) {
                          return (
                            <React.Fragment key={artist.name}>
                              <a href="#/" className="name">
                                {artist.name}
                              </a>
                              <span className="slash">/</span>
                            </React.Fragment>
                          );
                        } else {
                          return (
                            <a
                              key={artist.name}
                              href="#/"
                              className="name"
                              title={artist.name}
                            >
                              {artist.name}
                            </a>
                          );
                        }
                      })
                    : "N/A"}
                </div>
              </div>
              <div className="operate">
                <div
                  className="sprite_icon3 item play"
                  title="播放"
                  onClick={() => dispatch(getSongDetailAction(item.id))}
                ></div>
                <div className="sprite_icon3 item add" title="添加"></div>
              </div>
            </div>
          );
        })}
      </div>
    </PlayerRelevantWrapper>
  );
});
