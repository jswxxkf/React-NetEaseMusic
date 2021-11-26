import React, { memo, useState } from "react";
import { useSelector, shallowEqual } from "react-redux";

import SongsCategory from "../songs-category";
import { SongsHeaderWrapper, HeaderLeft, HeaderRight } from "./style";

export default memo(function KFSongsHeader() {
  // state & props
  const [showCategory, setShowCategory] = useState(false);

  // redux hooks
  const { currentCategory } = useSelector(
    (state) => ({
      currentCategory: state.getIn(["songs", "currentCategory"]),
    }),
    shallowEqual
  );

  return (
    <SongsHeaderWrapper>
      <HeaderLeft>
        <span className="title">{currentCategory ?? "N/A"}</span>
        <button
          className="select"
          onClick={() => setShowCategory(!showCategory)}
        >
          <span>选择分类</span>
          <i className="sprite_icon2"></i>
        </button>
        {showCategory && <SongsCategory categoryCloser={()=>setShowCategory(false)} />}
      </HeaderLeft>
      <HeaderRight>
        <button className="hot">热门</button>
      </HeaderRight>
    </SongsHeaderWrapper>
  );
});
