import request from "./request";

export function getTopList() {
  return request({
    url: "/toplist",
  });
}

// 获取榜单歌曲列表
export function getPlayList(id) {
  return request({
    url: "/playlist/detail",
    params: {
      id,
    },
  });
}
