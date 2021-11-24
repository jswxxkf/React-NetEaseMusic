import request from "./request";

export function getSongCategories() {
  return request({
    url: "/playlist/catlist",
  });
}

export function getCategorySongs(cat = "全部", offset = 0, limit = 35) {
  return request({
    url: "/top/playlist",
    params: {
      cat,
      limit,
      offset,
    },
  });
}
