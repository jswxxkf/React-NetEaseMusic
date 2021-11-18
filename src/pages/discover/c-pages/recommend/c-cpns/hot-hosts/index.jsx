import React, { memo } from "react";

import { HotHostsWrapper } from "./style";
import KFThemeHeaderSmall from "@/components/theme-header-small";

export default memo(function KFHotHosts() {
  return (
    <HotHostsWrapper>
      <KFThemeHeaderSmall title="热门主播" />
    </HotHostsWrapper>
  );
});
