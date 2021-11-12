import React, { memo } from "react";
import { Provider } from "react-redux";
// router & service & store
import { renderRoutes } from "react-router-config";
import routes from "./router";
import store from "./store";
import { HashRouter } from "react-router-dom";
// sub cpn
import KFAppHeader from "@/components/app-header";
import KFAppFooter from "@/components/app-footer";

export default memo(function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <KFAppHeader />
        {renderRoutes(routes)}
        <KFAppFooter />
      </HashRouter>
    </Provider>
  );
});
