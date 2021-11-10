import KFDiscover from "@/pages/discover";
import KFFriend from "@/pages/friend";
import KFMine from "@/pages/mine";

const routes = [
  { path: "/", exact: true, component: KFDiscover },
  { path: "/discover", component: KFDiscover },
  { path: "/mine", component: KFMine },
  { path: "/friend", component: KFFriend },
];

export default routes;
