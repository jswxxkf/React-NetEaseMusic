import request from "./request";

export function getTopBanners() {
  return request({
    url: "/banner",
  });
}

export function getHotRecommends() {
  return request({
    url: "/personalized",
    params: {
      limit: 8,
    },
  });
}
