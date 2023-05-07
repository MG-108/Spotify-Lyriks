/* eslint-disable quotes */
import {
  HiOutlineHashtag,
  HiOutlineHome,
  HiOutlinePhotograph,
  HiOutlineUserGroup,
} from "react-icons/hi";

export const genres = [
  { title: "Hip-Hop", value: "genre-global-chart-2" },
  { title: "Worldwide", value: "genre-global-chart-12" },
  { title: "Electronic", value: "genre-global-chart-4" },
  { title: "Reggae", value: "genre-global-chart-13" },
  { title: "Latin", value: "genre-global-chart-8" },
  { title: "Rock", value: "genre-global-chart-7" },
  { title: "Pop", value: "genre-global-chart-1" },
  { title: "House", value: "genre-global-chart-14" },
  { title: "AfroBeats", value: "genre-global-chart-11" },
  { title: "Country", value: "genre-global-chart-10" },
  { title: "Alternative", value: "genre-global-chart-6" },
];

export const links = [
  { name: "Discover", to: "/", icon: HiOutlineHome },
  { name: "Around You", to: "/around-you", icon: HiOutlinePhotograph },
  { name: "Top Artists", to: "/top-artists", icon: HiOutlineUserGroup },
  { name: "Top Charts", to: "/top-charts", icon: HiOutlineHashtag },
];
