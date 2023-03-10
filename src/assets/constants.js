/* eslint-disable quotes */
import {
  HiOutlineHashtag,
  HiOutlineHome,
  HiOutlinePhotograph,
  HiOutlineUserGroup,
} from "react-icons/hi";

export const genres = [
  { title: "Hip-Hop", value: "HIP_HOP_RAP" },
  { title: "Worldwide", value: "WORLDWIDE" },
  { title: "Electronic", value: "ELECTRONIC" },
  { title: "Reggae", value: "REGGAE_DANCE_HALL" },
  { title: "Latin", value: "LATIN" },
  { title: "Rock", value: "ROCK" },
  { title: "Pop", value: "POP" },
  { title: "House", value: "HOUSE" },
  { title: "Dance", value: "DANCE" },
  { title: "Soul", value: "SOUL_RNB" },
  { title: "Country", value: "COUNTRY" },
  { title: "Alternative", value: "ALTERNATIVE" },
];

export const links = [
  { name: "Discover", to: "/", icon: HiOutlineHome },
  { name: "Around You", to: "/around-you", icon: HiOutlinePhotograph },
  { name: "Top Artists", to: "/top-artists", icon: HiOutlineUserGroup },
  { name: "Top Charts", to: "/top-charts", icon: HiOutlineHashtag },
];
