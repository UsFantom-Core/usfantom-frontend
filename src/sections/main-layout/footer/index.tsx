import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import LocalPostOfficeIcon from "@mui/icons-material/LocalPostOffice";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import PhoneInTalkOutlinedIcon from "@mui/icons-material/PhoneInTalkOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import DiscordIcon from "@root/assets/svg/discord";


export const learnMoreItems = [
  {
    id: 1,
    href :"",
    title: `About`,
    icon: <LocationOnOutlinedIcon sx={{ fontSize: "22px" }} />,
  },
  {
    id: 2,
    href :"https://discord.gg/usfantom",
    title: `Discord`,
    icon: <PhoneInTalkOutlinedIcon sx={{ fontSize: "22px" }} />,
  },
  {
    id: 3,
    href :"",
    title: `Contact`,
    icon: <EmailOutlinedIcon sx={{ fontSize: "22px" }} />,
  },
];
export const addressItems = [
  {
    id: 1,
    title: `Unit 8, Northgate Industrial Park, Collier Row Road, Romford, England, RM5 2BG`,
    icon: <LocationOnOutlinedIcon sx={{ fontSize: "22px" }} />,
  },
  {
    id: 2,
    title: `(+44) - 750028 - 7504`,
    icon: <PhoneInTalkOutlinedIcon sx={{ fontSize: "22px" }} />,
  },
  {
    id: 3,
    title: `Info@FosterApp.co.uk`,
    icon: <EmailOutlinedIcon sx={{ fontSize: "22px" }} />,
  },
  {
    id: 4,
    title: `Monday - Sunday: 08:00 am - 08:00 pm`,
    icon: <AccessTimeOutlinedIcon sx={{ fontSize: "22px" }} />,
  },
];

export const socialLinks = [
 
  {
    id: 2,
    link: "/",
    icon: <LocalPostOfficeIcon />,
  },
  {
    id: 5,
    link: "https://discord.gg/usfantom",
    icon: <DiscordIcon />,
  },
];

export const endListItems = [
  {
    id: 1,
    title: "FAQ",
    link: "/frequently-asked-questions",
  },
  {
    id: 2,
    title: "Cookie Policy",
    link: "/cookie-policy",
  },
  {
    id: 3,
    title: "Privacy Policy",
    link: "/privacy-policy",
  },
  {
    id: 4,
    title: "Terms & Conditions",
    link: "/terms-conditions",
  },
  {
    id: 5,
    title: "Data Security",
    link: "/data-security",
  },
];
