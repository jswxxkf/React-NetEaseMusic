import React, { memo, useEffect } from "react";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import { getSettleSingers } from "../../store/actionCreators";
import { getScaledImage } from "@/utils/format-utils";

import { SettleSingerWrapper } from "./style";
import KFThemeHeaderSmall from "@/components/theme-header-small";

export default memo(function KFSettleSinger() {
  // redux hooks
  const dispatch = useDispatch();
  const { settleSingers } = useSelector(
    (state) => ({
      settleSingers: state.getIn(["recommend", "settleSingers"]),
    }),
    shallowEqual
  );

  useEffect(() => {
    dispatch(getSettleSingers());
  }, [dispatch]);

  return (
    <SettleSingerWrapper>
      <KFThemeHeaderSmall title="入驻歌手" more="查看全部" />
      <div className="singer-lists">
        {settleSingers.map((item, index) => {
          return (
            <div key={item.id} className="singer-info">
              <img
                className="avatar"
                src={getScaledImage(item.img1v1Url, 62)}
                alt=""
              />
              <div className="intro">
                <div className="name">
                  {item.alias.join("") || item.name || "loading"}
                </div>
                <div className="desc text-nowrap">{item.name ?? "loading"}</div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="apply-for">
        <a href="/todo">申请成为网易音乐人</a>
      </div>
    </SettleSingerWrapper>
  );
});
