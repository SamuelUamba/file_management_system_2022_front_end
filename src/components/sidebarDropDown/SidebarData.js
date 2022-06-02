import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import HomeIcon from "@mui/icons-material/Home";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import HelpIcon from "@mui/icons-material/Help";
import FormatListNumberedIcon from "@mui/icons-material/FormatListNumbered";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
export const SidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <DashboardIcon fontSize="large" />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    // subNav: [
    //   {
    //     title: "Users",
    //     path: "/overview/users",
    //     icon: <IoIcons.IoIosPaper />,
    //   },
    //   {
    //     title: "Revenue",
    //     path: "/overview/revenue",
    //     icon: <IoIcons.IoIosPaper />,
    //   },
    // ],
  },
  {
    title: "Cultos",
    path: "/DashboardCrentes",
    icon: <PeopleOutlineIcon fontSize="large" />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: "Presenças",
        path: "/addPresencas",
        icon: <AddIcon fontSize="large" />,
        cName: "sub-nav",
      },
    ],
  },
  {
    title: "Crentes",
    path: "/DashboardCrentes",
    icon: <PeopleOutlineIcon fontSize="large" />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: "Entrada nos Cultos",
        path: "/addCrente",
        icon: <AddIcon fontSize="large" />,
        cName: "sub-nav",
      },
      {
        title: "Novos Crentes",
        path: "/addCrente",
        icon: <AddIcon fontSize="large" />,
        cName: "sub-nav",
      },
    ],
  },
  {
    title: "Fundos",
    path: "/DashboardFinancas",

    icon: <AttachMoneyIcon fontSize="large" />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: "Registo de Fundos",
        path: "/financas",
        icon: <AddIcon fontSize="large" />,
        cName: "sub-nav",
      },
      {
        title: "Usar Fundos",
        path: "/liquidar",
        icon: <RemoveIcon fontSize="large" />,
        cName: "sub-nav",
      },
    ],
  },
  {
    title: "Ajuda",
    path: "/ajuda",
    icon: <HelpIcon fontSize="large" />,
    cName: "sub-nav",
  },
];
