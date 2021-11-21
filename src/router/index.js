import React from "react";
import { Redirect } from "react-router";
const KFDiscover = React.lazy(() => import("@/pages/discover"));
const KFFriend = React.lazy(() => import("@/pages/friend"));
const KFMine = React.lazy(() => import("@/pages/mine"));
const KFRcm = React.lazy(() => import("@/pages/discover/c-pages/recommend"));
const KFRanking = React.lazy(() => import("@/pages/discover/c-pages/ranking"));
const KFSongs = React.lazy(() => import("@/pages/discover/c-pages/songs"));
const KFDjRadio = React.lazy(() => import("@/pages/discover/c-pages/djradio"));
const KFArtist = React.lazy(() => import("@/pages/discover/c-pages/artist"));
const KFAlbum = React.lazy(() => import("@/pages/discover/c-pages/album"));
const KFPlayer = React.lazy(() => import("@/pages/player"));

const routes = [
  { path: "/", exact: true, render: () => <Redirect to="/discover" /> },
  {
    path: "/discover",
    component: KFDiscover,
    routes: [
      {
        path: "/discover",
        exact: true,
        render: () => <Redirect to="/discover/recommend" />,
      },
      { path: "/discover/recommend", component: KFRcm },
      { path: "/discover/ranking", component: KFRanking },
      { path: "/discover/songs", component: KFSongs },
      { path: "/discover/djradio", component: KFDjRadio },
      { path: "/discover/artist", component: KFArtist },
      { path: "/discover/album", component: KFAlbum },
      { path: "/discover/player", component: KFPlayer },
    ],
  },
  { path: "/mine", component: KFMine },
  { path: "/friend", component: KFFriend },
];

export default routes;
