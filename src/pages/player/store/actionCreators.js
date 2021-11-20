import * as actionType from "./constants";
// services
import { getSongDetail, getLyric } from "@/service/player";
// utils
import { parseLyric } from "@/utils/lyrics-parser";

export const changeCurrentSongAction = (song) => ({
  type: actionType.CHANGE_CURRENT_SONG,
  song,
});

export const changeCurrentSongIndexAction = (index) => ({
  type: actionType.CHANGE_CURRENT_SONG_INDEX,
  index,
});

export const changeCurrentLyricsAction = (lyrics) => ({
  type: actionType.CHANGE_LYRICS,
  lyrics,
});

export const changeCurrentLyricIndexAction = (index) => ({
  type: actionType.CHANGE_CURRENT_LYRIC_INDEX,
  index,
});

export const changePlayListAction = (playList) => ({
  type: actionType.CHANGE_PLAY_LIST,
  playList,
});

export const changePlaySequenceAction = (currentSequence) => {
  // 做到循环切换
  if (currentSequence === 3) currentSequence = 0;
  return {
    type: actionType.CHANGE_PLAY_SEQUENCE,
    sequence: currentSequence,
  };
};

export const changePlaySongAction = (tag) => {
  return (dispatch, getState) => {
    // 1. 获取当前的index
    let currentSongIndex = getState().getIn(["player", "currentSongIndex"]);
    const playSequence = getState().getIn(["player", "playSequence"]);
    const playList = getState().getIn(["player", "playList"]);
    // 2. 判断当前播放列表
    switch (playSequence) {
      // 随机播放(目前允许重复到同一首[基于自己的体验])
      case 1:
        currentSongIndex = Math.floor(Math.random() * playList.length);
        break;
      // 顺序播放/列表循环
      default:
        currentSongIndex += tag;
        // 下一首，但已经到尾，回到头部
        if (currentSongIndex === playList.length) currentSongIndex = 0;
        // 上一首，但已经到头，回到末尾
        if (currentSongIndex === -1) currentSongIndex = playList.length - 1;
    }
    // 3. 处理修改数据
    const currentSong = playList[currentSongIndex];
    dispatch(changeCurrentSongIndexAction(currentSongIndex));
    dispatch(changeCurrentSongAction(currentSong));
    // 4. 获取当前歌曲的歌词，并且解析歌词
    dispatch(getLyricAction(currentSong.id));
  };
};

// functional actions
export const getSongDetailAction = (ids) => {
  return (dispatch, getState) => {
    // 判断歌曲是否存在于playList
    const playList = getState().getIn(["player", "playList"]);
    const songIndex = playList.findIndex((song) => song.id === ids);
    if (songIndex !== -1) {
      // 找到数据
      const currentSong = playList[songIndex];
      dispatch(changeCurrentSongIndexAction(songIndex));
      dispatch(changeCurrentSongAction(currentSong));
    } else {
      // 未在本地redux中找到数据，则发起网络请求
      getSongDetail(ids).then((res) => {
        const song = res.songs && res.songs[0];
        if (!song) return;
        // 1. 添加到playlist中
        const newPlayList = [...playList];
        newPlayList.push(song);
        dispatch(changePlayListAction(newPlayList));
        // 改变当前index
        dispatch(changeCurrentSongIndexAction(newPlayList.length - 1));
        dispatch(changeCurrentSongAction(song));
      });
    }
    dispatch(getLyricAction(ids));
  };
};

export const getLyricAction = (id) => {
  return (dispatch) => {
    // 获取当前歌曲的歌词，并且解析
    getLyric(id).then((res) => {
      const lycString = res.lrc.lyric;
      const lyrics = parseLyric(lycString);
      dispatch(changeCurrentLyricsAction(lyrics));
    });
  };
};
