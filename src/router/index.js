import React from "react";
import KFDiscover from "@/pages/discover";
import KFFriend from "@/pages/friend";
import KFMine from "@/pages/mine";
import KFRecommend from "@/pages/discover/c-pages/recommend";
import KFRanking from "@/pages/discover/c-pages/ranking";
import KFSongs from "@/pages/discover/c-pages/songs";
import KFDjRadio from "@/pages/discover/c-pages/djradio";
import KFArtist from "@/pages/discover/c-pages/artist";
import KFAlbum from "@/pages/discover/c-pages/album";
import { Redirect } from "react-router";

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
      { path: "/discover/recommend", component: KFRecommend },
      { path: "/discover/ranking", component: KFRanking },
      { path: "/discover/songs", component: KFSongs },
      { path: "/discover/djradio", component: KFDjRadio },
      { path: "/discover/artist", component: KFArtist },
      { path: "/discover/album", component: KFAlbum },
    ],
  },
  { path: "/mine", component: KFMine },
  { path: "/friend", component: KFFriend },
];

export default routes;
