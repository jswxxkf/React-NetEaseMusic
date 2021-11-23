import React, { memo } from "react";
import { headerLinks } from "@/common/local-data";
import { NavLink } from "react-router-dom";
import { HeaderLeft, HeaderRight, HeaderWrapper } from "./style";
import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";

export default memo(function KFAppHeader() {
  // 其他业务代码
  const showSelectItem = (item, index) => {
    if (index < 3) {
      return (
        <NavLink to={item.link} exact>
          {item.title}
          <i className="sprite_01 icon"></i>
        </NavLink>
      );
    } else {
      return <a href={item.link}>{item.title}</a>;
    }
  };
  // 返回的jsx
  return (
    <HeaderWrapper>
      <div className="content wrap-v1">
        <HeaderLeft>
          <a href="#/" className="logo sprite_01">
            NetEaseCloudMusic
          </a>
          <div className="select-list">
            {headerLinks.map((item, index) => {
              return (
                <div key={item.title} className="select-item">
                  {showSelectItem(item, index)}
                </div>
              );
            })}
          </div>
        </HeaderLeft>
        <HeaderRight>
          <Input
            className="search"
            placeholder="开启音乐之旅"
            prefix={<SearchOutlined />}
          />
          <div className="center">创作者中心</div>
          <div className="login">登录</div>
        </HeaderRight>
      </div>
      <div className="divider"></div>
    </HeaderWrapper>
  );
});
