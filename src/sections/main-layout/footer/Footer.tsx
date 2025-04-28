import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { Button, Icon, IconButton, useTheme } from "@mui/material";
import { learnMoreItems, socialLinks } from "./index";
import CoverImage from "@root/assets/img/imgs/fantom-logo.png";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

const Footer = () => {
  const theme: any = useTheme();
  const [isVisible, setIsVisible] = useState(false);
  const router = useRouter();

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
    <Box component="footer">
      <Grid
        container
        sx={{
          padding: { xs: "0px 20px", md: "20px 20px" },

          ...styles.footerWrapper,
        }}
      >
        <Grid item xs={12} lg={12} py={3}>
          <Image
            src={CoverImage}
            alt="icons"
            style={{ maxWidth: "240px", height: "auto" }}
          />
        </Grid>

        <Grid item xs={12} lg={12} textAlign="center">
          <Box>
            {learnMoreItems.map((item: any, index: number) => (
              <Button
                onClick={() => {
                  router.push(item.href);
                }}
                variant="outlined"
                component="a"
                key={index}
                target="_blank"
                sx={{
                  color: "#fff",
                  fontWeight: 500,
                  pr: 2,
                  py: 0.5,
                  border: "1px solid transparent",

                  "&:hover": {
                    color: "transparent",
                    border:
                      "1px solid linear-gradient(90deg, #0894F8 0%, #41D7D0 100%)",
                    backgroundImage: "linear-gradient(90deg, #0894F8, #41D7D0)",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  },
                }}
              >
                {item.title}
              </Button>
            ))}
            <Box sx={styles.socialLinksWrapper}>
              {socialLinks.map((item: any) => (
                <Link key={item.id} href={item.link} target="__blank">
                  <Icon sx={styles.socialIcons}>{item.icon}</Icon>
                </Link>
              ))}
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="subtitle1" sx={styles.copyRightText}>
            Disclaimer: “This platform is currently in development. Smart
            contract interactions may carry risks. Please DYOR
          </Typography>
        </Grid>
        <IconButton
          sx={styles.iconButton}
          className={`${isVisible ? "show" : ""}`}
          onClick={scrollToTop}
        >
          <KeyboardArrowUpIcon />
        </IconButton>
      </Grid>
    </Box>
  );
};

export default Footer;

const styles: any = {
  footerWrapper: {
    backgroundColor: "#000000",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  socialLinksWrapper: (theme: any) => ({
    display: "flex",
    gap: "20px",
    justifyContent: "center",
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
    mb: { xs: "40px", sm: "30px", lg: 5 },
    border: `1px solid ${theme.palette.grey[500]}`,
    padding: 1.8,
    position: "relative",
    transition: "all 0.3s ease",

    "&:hover": {
      color: "white",
      borderColor: "transparent",
      backgroundImage: "linear-gradient(90deg, #0894F8, #41D7D0)",
      WebkitBackgroundClip: "text",
      backgroundClip: "text",
      WebkitTextFillColor: "transparent",
    },

    "&::before": {
      content: '""',
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "inherit",
      background: "linear-gradient(90deg, #0894F8, #41D7D0)",
      zIndex: -1,
      transition: "opacity 0.3s ease",
      opacity: 0,
    },

    "&:hover::before": {
      opacity: 1,
    },
  }),

  firstGridStyling: (theme: any) => ({
    px: { xs: 1, sm: 2, lg: 8, xl: 8 },
    py: "30px",
  }),
  endListWrapper: (theme: any) => ({
    pb: 3,
    m: { xs: 2, sm: 0 },
  }),
  copyRightText: (theme: any) => ({
    textAlign: "center",
    color: "white",
    fontWeight: 400,
    pb: 3,
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
    background: "linear-gradient(90deg, #0894F8, #41D7D0)",
    transition: "all 0.4s ease-in-out",

    "&:hover": {
      background: " linear-gradient(90deg, #008AFF 0%, #018AFE 100%)", // Solid deep blue on hover
      boxShadow: "0 0 15px 3px rgba(0, 138, 255, 0.6)", // Blue glow
      color: theme.palette.grey[0],
    },
  }),
};
