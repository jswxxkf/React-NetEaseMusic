import React, { memo, Suspense } from "react";
// router & service & store
import { renderRoutes } from "react-router-config";
import routes from "./router";
import store from "./store";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
// sub cpn
import KFAppHeader from "@/components/app-header";
import KFAppFooter from "@/components/app-footer";
import KFAppPlayerBar from "./pages/player/app-player-bar";
import Fallback from "./components/fallback";

export default memo(function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <KFAppHeader />
        <Suspense fallback={<Fallback />}>{renderRoutes(routes)}</Suspense>
        <KFAppFooter />
        <KFAppPlayerBar />
      </BrowserRouter>
    </Provider>
  );
});
