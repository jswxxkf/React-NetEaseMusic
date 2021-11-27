import React, { memo } from "react";

import { FallbackWrapper } from "./style";
import { Spin } from "antd";

export default memo(function index() {
  return (
    <FallbackWrapper>
      <div className="mask-layer"></div>
      <Spin tip="美妙的音乐即将到来~~" size="large" />
    </FallbackWrapper>
  );
});
