import React, { memo, useEffect, useRef, useCallback, useState } from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";

import { getTopBannerAction } from "../../store/actionCreators";

import { BannerWrapper, BannerLeft, BannerRight, BannerControl } from "./style";
import { Carousel } from "antd";

export default memo(function KFTopBanner() {
  // state
  const [currentIndex, setCurrentIndex] = useState(0);

  // 组件和redux关联，获取数据和进行操作
  const dispatch = useDispatch();
  const { topBanners } = useSelector(
    (state) => ({
      topBanners: state.getIn(["recommend", "topBanners"]),
    }),
    shallowEqual
  );

  // 发送网络请求
  useEffect(() => {
    dispatch(getTopBannerAction());
  }, [dispatch]);

  // 其他 hooks
  const bannerRef = useRef();

  const bannerChange = useCallback((from, to) => {
    setCurrentIndex(to);
  }, []);

  // 其他业务逻辑
  // 获取具有高斯模糊的背景图
  const bgImage =
    topBanners[currentIndex] &&
    topBanners[currentIndex].imageUrl + "?imageView&blur=40x20";

  return (
    <BannerWrapper bgImage={bgImage}>
      <div className="banner wrap-v2">
        <BannerLeft>
          <Carousel
            effect="fade"
            autoplay
            ref={bannerRef}
            beforeChange={bannerChange}
          >
            {topBanners.map((item, index) => {
              return (
                <div key={item.imageUrl} className="banner-item">
                  <img
                    src={item.imageUrl}
                    alt={item.typeTitle}
                    className="image"
                  />
                </div>
              );
            })}
          </Carousel>
        </BannerLeft>
        <BannerRight />
        <BannerControl>
          <button
            className="btn left"
            onClick={(e) => bannerRef.current.prev()}
          ></button>
          <button
            className="btn right"
            onClick={(e) => bannerRef.current.next()}
          ></button>
        </BannerControl>
      </div>
    </BannerWrapper>
  );
});
