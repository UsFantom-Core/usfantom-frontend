// @mui
import { useTheme } from "@mui/material/styles";
import { Box } from "@mui/material";
import CoverLogo from "@root/assets/img/imgs/fantom-logo.png";
import Image from "next/image";


// ----------------------------------------------------------------------

export default function Logo({
  variant = "light",
  iconWidth = 182,
  iconHeight = 45,
  ...other
}) {

  return (
    <Box {...other}>
   <Image src={CoverLogo} alt={"CoverLogo"} style={{width:"250px",height:"auto"}}/>
    </Box>
  );
}
