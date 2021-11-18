import React, { memo } from "react";

import { hotHosts } from "@/service/local-data";

import { HotHostsWrapper } from "./style";
import KFThemeHeaderSmall from "@/components/theme-header-small";

export default memo(function KFHotHosts() {
  return (
    <HotHostsWrapper>
      <KFThemeHeaderSmall title="热门主播" />
      <div className="host-lists">
        {hotHosts.map((item, index) => {
          return (
            <div key={item.name} className="host-info">
              <img className="avatar" src={item.picUrl} alt="" />
              <div className="intro">
                <div className="name">{item.name}</div>
                <div className="desc text-nowrap" title={item.position}>
                  {item.position}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </HotHostsWrapper>
  );
});
