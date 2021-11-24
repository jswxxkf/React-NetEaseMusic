import React, { memo } from "react";

import { ThemeHeaderNormalWrapper } from "./style";

export default memo(function KFThemeHeaderNormal(props) {
  const { title, rightSlot = "" } = props;

  return (
    <ThemeHeaderNormalWrapper>
      <div className="title">{title}</div>
      {/* 给父组件提供插槽 */}
      <div className="right">{rightSlot}</div>
    </ThemeHeaderNormalWrapper>
  );
});
