import icons from "./icons";

const { MdOutlineLibraryMusic, MdOutlineFeed, TbChartArcs, HiOutlineChartPie } =
  icons;

export const sidebarMenu = [
  {
    path: "mymusic",
    text: "Personal",
    icon: <MdOutlineLibraryMusic size={24} />,
  },
  {
    path: "",
    text: "Discovery",
    end: true,
    icon: <TbChartArcs size={24} />,
  },
  {
    path: "zing-chart",
    text: "#zingchart",
    icon: <HiOutlineChartPie size={24} />,
  },
  {
    path: "following",
    text: "Following",
    icon: <MdOutlineFeed size={24} />,
  },
];
