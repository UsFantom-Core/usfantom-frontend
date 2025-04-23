import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Grid from "@mui/material/Grid";
import { Icon, useTheme } from "@mui/material";
import { Logo } from "@root/assets/svg";
import { learnMoreItems, socialLinks, endListItems } from "./index";
import CoverImage from "@root/assets/img/imgs/fantom-logo.png";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  const theme: any = useTheme();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Box component="footer" sx={styles.footerWrapper}>
      <Grid
        container
        justifyContent="center"
        sx={{ padding: { xs: "30px 0 0 0 ", md: "30px 0 0 0" } }}
      >
        <Grid item xs={12} lg={2.3} sx={styles.firstGridStyling}>
          <Image
            src={CoverImage}
            alt="icons"
            style={{
              width: "220px",
              height: "65px",
            }}
          />
        </Grid>

        <Grid item xs={12} lg={12} sx={{ px: { xs: 1, lg: 0 } }}>
          <Box sx={{ textAlign: "center" }}>
            {learnMoreItems.map((item: any,index:number) => (
              <Typography
                component="span"
                // variant="subtitle2"
                key={index}
                sx={{
                  // whiteSpace: "pre-line",
                  color: theme.palette.grey[500],
                  fontWeight: 500,
                  p: 3,
                }}
              >
                {item.title}
              </Typography>
            ))}
            <Box sx={styles.socialLinksWrapper} justifyContent="center">
              {socialLinks.map((item: any) => (
                <Link
                  key={item.id}
                  href={"/"}
                  // target="__blank
                >
                  <Icon sx={styles.socialIcons}>{item.icon}</Icon>
                </Link>
              ))}
            </Box>
          </Box>
        </Grid>
      </Grid>
      {/* End Footer List Started */}
      <Grid container sx={styles.endListWrapper}>
        <Grid
          item
          xs={12}
          lg={12}
          sx={{
            px: { xs: 1, lg: 10, xl: 20 },
          }}
        >
          <Typography variant="subtitle2" sx={styles.copyRightText}>
            Disclaimer: “This platform is currently in development. Smart
            contract interactions may carry risks. Please DYOR
          </Typography>
        </Grid>
      </Grid>
      {/* Scroll To Top Code Started */}
      <IconButton
        sx={styles.iconButton}
        className={`${isVisible ? "show" : ""}`}
        onClick={scrollToTop}
      >
        <KeyboardArrowUpIcon />
      </IconButton>
    </Box>
  );
};

export default Footer;

const styles: any = {
  footerWrapper: {
    backgroundColor: "#000000",
    position: "relative",
  },
  socialLinksWrapper: (theme: any) => ({
    display: "flex",
    gap: "10px",
    mt: 3,
    zIndex: 2,
    position: "relative",
  }),
  socialIcons: (theme: any) => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "50px",
    color: theme.palette.grey[500],
    mb: { xs: "40px", sm: "30px", lg: 10 },
    border: `1px solid ${theme.palette.grey[500]}`,
    padding: 1.8,
  }),
  firstGridStyling: (theme: any) => ({
    px: { xs: 1, sm: 2, lg: 8, xl: 8 },
    py: "30px",
  }),
  endListWrapper: (theme: any) => ({
    borderTop: `1px solid grey`,

    p: 3,
    m: { xs: 2, sm: 0 },
  }),
  copyRightText: (theme: any) => ({
    textAlign: { xs: "start", sm: "center", lg: "center" },
    color: "white",
    fontSize: "18px",
    fontWeight: 400,
  }),
  endList: (theme: any) => ({
    display: "flex",
    gap: "20px",
    flexDirection: { xs: "column", sm: "row" },
    px: { xs: 1, lg: 0 },
    mt: { xs: 2, lg: 0 },
    justifyContent: { xs: "start", sm: "center", lg: "start" },
  }),
  addressColumnStyling: {
    display: "flex",
    flexDirection: "column",
    gap: "6px",
    alignItems: "center",
    mb: 1.5,
  },
  iconButton: (theme: any) => ({
    position: "fixed",

    bottom: { xs: "30px", md: "80px" },
    right: { xs: "20px", sm: "30px" },
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
    opacity: 0,
    visibility: "hidden",
    zIndex: 3,
    "&.show": {
      opacity: 1,
      visibility: "visible",
    },
    color: theme.palette.grey[0],
    background: theme.palette.primary.main,
    transition: "all 0.4s ease-in-out",
    "&:hover": {
      backgroundColor: theme.palette.grey[700],
    },
  }),
};
