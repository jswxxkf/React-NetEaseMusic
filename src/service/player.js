import request from "./request";

export function getSongDetail(ids) {
  return request({
    url: "/song/detail",
    params: {
      ids,
    },
  });
}

export function getLyric(id) {
  return request({
    url: "/lyric",
    params: {
      id,
    },
  });
}

export function getSimilarPlayList(id) {
  return request({
    url: "/simi/playlist",
    params: {
      id,
    },
  });
}

export function getSimilarSongs(id) {
  return request({
    url: "/simi/song",
    params: {
      id,
    },
  });
}
