import React, { memo } from "react";
// router & service
import { renderRoutes } from "react-router-config";
import routes from "./router";
import { HashRouter } from "react-router-dom";
// sub cpn
import KFAppHeader from "@/components/app-header";
import KFAppFooter from "@/components/app-footer";

export default memo(function App() {
  return (
    <HashRouter>
      <KFAppHeader />
      {renderRoutes(routes)}
      <KFAppFooter />
    </HashRouter>
  );
});
