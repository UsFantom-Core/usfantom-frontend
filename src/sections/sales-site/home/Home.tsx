import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import React, { useEffect } from "react";
import FantomSection3Logo from "@root/assets/img/imgs/fantomsection3.png";
import DiscordGalaxyLogo from "@root/assets/img/imgs/discord-galaxy.png";
import coverImage from "@root/assets/img/imgs/fantom-cover.png";
import FooterChainImage from "@root/assets/img/imgs/footer-chain.png";
import Image from "next/image";
import {
  highlightsCardData,
  paymentCardData,

} from ".";

import AOS from "aos";
import "aos/dist/aos.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ArrowLeftIcon, ArrowRightIcon } from "@mui/x-date-pickers";


export var settings = {
  arrows: true,
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 0,
  nextArrow: <ArrowRightIcon />,
  prevArrow: <ArrowLeftIcon />,
};

const Home = () => {
  const theme: any = useTheme();
  //Initialization the AOS library
  useEffect(() => {
    AOS.init({
      once: false,
    });
  }, []);
  return (
    <Box sx={{ backgroundColor: "white" }}>
      {/* main-section */}
      <Box sx={styles.header}>
        <Grid container alignItems="center" sx={styles.mainGrid}>
          <Grid item xs={12} lg={6} sx={{ mt: 2, lg: 0 }}>
            <Typography
              variant="h1"
              sx={styles.heroTitle}
              data-aos="fade-right"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
            >
              The Future of Freelancing is Decentralized
            </Typography>
            <Typography
              // variant="h3"
              sx={styles.heroDescription}
              data-aos="fade-right"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
            >
              Smart contracts. No middlemen. Full control.{" "}
            </Typography>
            {/* <Link href="/contact-us" style={{ textDecoration: "none", display:"flex", gap:1,alignItems:'flex-center' }}> */}
            <Box sx={{ display: "flex", alignItems: "center", gap: 5 }}>
              <Button
                sx={styles.heroButton}
                data-aos="fade-right"
                data-aos-delay="50"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
              >
                Join the Discord
              </Button>
              <Button
                sx={styles.sauPauloButton}
                data-aos="fade-right"
                data-aos-delay="50"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
              >
                Join the Waitlist
              </Button>
            </Box>

            {/* </Link> */}
          </Grid>
          <Grid
            item
            xs={12}
            lg={6}
            sx={{ display: { xs: "none", sm: "flex" }, justifyContent: "end" }}
            data-aos="fade-left"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-once="false"
          >
            <Image
              src={coverImage}
              alt="hero-image"
              style={{ width: "615px", height: "auto" }}
            />
          </Grid>
        </Grid>
      </Box>

    

      <Grid container sx={styles.empowerCardWrapper}>
        <Grid item xs={12} xl={7.5}>
          <Box
            display={"flex"}
            justifyContent={"end"}
            alignItems={"center"}
            height={"100%"}
          >
            <Box>
              <Typography variant="subtitle1" sx={styles.empowerDesc}>
                Get early access, exclusive updates & beta invites
              </Typography>
              <Typography variant="h1" sx={styles.heroTitle}>
                Be the first to know <br /> when we launch
              </Typography>
              <Box
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  // zIndex: 2,
                  width: "100%", // Take full width of parent
                  height: "100%", // Take full height of parent
                }}
              >
                <Image
                  src={FooterChainImage}
                  alt="empower-vector"
                  width={1000}
                  height={1000}
                  priority={true}
                  style={{
                    width: "378px",
                    height: "378x",
                    objectFit: "contain", // Or 'contain' depending on design
                    objectPosition: "top",
                  }}
                />
              </Box>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} xl={4}>
          <Box
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            flexDirection={"column"}
            height={"100%"}
          >
            <TextField
              size={"small"}
              name={"name"}
              placeholder={"Your email address...."}
              // value={""}
              onChange={() => {}}
              sx={styles.searchStyles}
            />
            <Button
              sx={styles.heroButton}
              // data-aos="fade-right"
              // data-aos-delay="50"
              // data-aos-duration="1000"
              // data-aos-easing="ease-in-out"
            >
              Join the Discord
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Home;

const styles: any = {
  mainTitle: (theme: any) => ({
    color: "white",
    background: "#EF2D47",
    display: "inline-block",
    fontWeight: 500,
    fontSize: "22px",
    padding: "4px 8px 4px 8px",
    borderRadius: "4px 0px 0px 0px",
  }),
  searchStyles: (theme: any) => ({
    width: { xs: "100%", sm: "auto" },
    border: "1px solid #FFFFFF",
    borderRadius: "4px",
    boxShadow: "unset",
    color: "#FFFFFF",
    "& .MuiInputBase-input": {
      color: "#FFFFFF", // Text while typing
      px: 4,
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#FFFFFF",
      },
      "&:hover fieldset": {
        borderColor: "#FFFFFF",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#FFFFFF",
      },
    },
    "& .MuiInputBase-input::placeholder": {
      color: "#FFFFFF", // Placeholder text color
      opacity: 0.6,
    },
  }),

  mainGrid: (theme: any) => ({
    maxWidth: "85%",
    margin: "0 auto",
    height: { xs: "100%", sm: "95%", md: "100%" },
  }),

  heroTitle: (theme: any) => ({
    color: "white",
    fontWeight: 700,
    fontSize: "48px",
    position: "relative",
    zIndex: 3,
  }),
  heroTitleBlack: (theme: any) => ({
    color: "#1F1F1F",
    fontWeight: 700,
    fontSize: "48px",
    position: "relative",
    zIndex: 3,
  }),
  heroDescription: (theme: any) => ({
    color: "white",
    mt: 2,
    fontWeight: 400,
    fontSize: "20px",
    position: "relative",
    zIndex: 3,
  }),
  heroDescriptionBlack: (theme: any) => ({
    color: "#1F1F1F",
    mt: 2,
    fontWeight: 400,
    fontSize: "20px",
    position: "relative",
    zIndex: 3,
  }),

  heroButton: (theme: any) => ({
    mt: 2,
    fontWeight: 700,
    fontSize: "19px",
    borderRadius: "40px",
    background: "linear-gradient(90deg, #008AFF 0%, #4AE3C9 100%) !important",
    color: theme.palette.grey[0],
    padding: "6px 20px",
    textTransform: "unset",
    "&:hover": {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.grey[0],
    },
  }),
  sauPauloButton: (theme: any) => ({
    mt: 2,
    fontWeight: 500,
    fontSize: "18px",
    borderRadius: "40px",
    color: "white",
    padding: "10px 20px",
    "&:hover": {
      backgroundColor: "none",
      color: "white",
    },
    border: "1px solid white",

    textTransform: "unset",
    lineHeight: "23px",
  }),

  innovationGrid: (theme: any) => ({
    textAlign: { xs: "center", lg: "start" },
    mt: { xs: 2, sm: 4, lg: 0 },
    position: "relative",
    zIndex: 2,
  }),

  heroSvg: (theme: any) => ({
    position: "absolute",
    top: 0,
    left: "120px",
    display: { xs: "none", lg: "block", zIndex: 0 },
  }),

  pageSvg: (theme: any) => ({
    position: "absolute",
    right: 0,
    top: "-50px",
    display: { xs: "none", sm: "block" },
  }),

  aboutTitle: (theme: any) => ({
    color: theme.palette.grey[600],
    display: "inline-block",
    fontWeight: 700,
  }),

  aboutDesc: (theme: any) => ({
    color: "white",
    mt: 4,
    height: "60px",
    fontSize: "29px",
    whiteSpace: "pre-line",
    p: { xs: 1, sm: 0 },
    lineHeight: "35px",
    mb: { xs: 3, sm: 0 },
    fontWeight: 600,
  }),
  aboutBrazil: (theme: any) => ({
    color: "white",
    mt: 2,
    // height:'60px',
    fontSize: "22px",
    whiteSpace: "pre-line",
    p: { xs: 1, sm: 0 },
    lineHeight: "26px",
    mb: { xs: 3, sm: 0 },
    fontWeight: 600,
  }),

  agencyTitle: (theme: any) => ({
    color: "white",
    whiteSpace: { xs: "normal", sm: "pre-line" },
    fontWeight: 600,
    fontSize: "40px",
    lineHeight: "50px",
  }),

  barriersTitle: (theme: any) => ({
    color: theme.palette.grey[700],
    whiteSpace: { xs: "normal", sm: "pre-line" },
    fontWeight: 600,
    mt: { xs: 3, sm: 5 },
  }),

  unleashTitle: (theme: any) => ({
    color: theme.palette.grey[700],
    whiteSpace: { xs: "normal", sm: "pre-line" },
    fontWeight: 600,
  }),

  innovationDesc: (theme: any) => ({
    color: theme.palette.grey[500],
    mt: 1,
    lineHeight: "26px",
    whiteSpace: { xs: "normal", md: "pre-line" },
    fontWeight: 500,
  }),

  barriersDesc: (theme: any) => ({
    color: theme.palette.grey[500],
    mt: 1,
    lineHeight: "26px",
    whiteSpace: { xs: "normal", md: "pre-line" },
    fontWeight: 500,
  }),

  hightlightCard: (theme: any) => ({
    height: "100%",
    textAlign: "center",
    px: { xs: 0, lg: 1.5 },
    py: { xs: 0, lg: 3 },

    position: "relative",
    overflow: "hidden",
    backgroundColor: `none`,
    "&:hover": {
      boxShadow: "7px 6px 3.5px -1px rgb(68, 219, 206, 0.6)",
    },
  }),

  paymentCard: (index: number) => ({
    height: "100%",
    py: { xs: 0, lg: 2 },
    borderTopLeftRadius: "0px",
    borderTopRightRadius: "0px",
    borderBottomRightRadius: index === 3 ? "10px" : "0px",
    borderBottomLeftRadius: index === 0 ? "10px" : "0px",
    position: "relative",
    overflow: "hidden",
    maxHeight: "314px",
    background: "linear-gradient(180deg, #40D6D0 0%, #12A1F1 100%)",
  }),

  empowerCardWrapper: (theme: any) => ({
    position: "relative",
    backgroundColor: "#000000",
    maxWidth: "90%",
    margin: "40px auto",
    borderRadius: "10px",
    minHeight: "300px",
    overflow: "hidden",
    mt: { xs: 2, sm: 0 },
  }),

  empowerDesc: (theme: any) => ({
    color: theme.palette.grey[300],
    whiteSpace: { xs: "normal", md: "pre-line" },
    fontWeight: 500,
    mb: 3,
    position: "relative",
    zIndex: 2,
    lineHeight: "26px",
  }),

  header: (theme: any) => ({
    width: "100%",
    minHeight: { xs: "50vh", sm: "80vh", md: "70vh", lg: "80vh" },
    background: "black",
    // clipPath: "ellipse(98% 100% at 50% 40%)",
    // borderRadius: "0 0 40px 40px",
    position: "relative",
    overflow: "hidden",
  }),

  contactButton: (theme: any) => ({
    fontWeight: 500,
    color: theme.palette.grey[0],
    background: theme.palette.warning.darker,
    padding: "10px 30px",
    borderRadius: "4px",
    display: "inline-block",
    margin: { md: "10px 0 0 0", lg: 0 },
    position: "relative",
    zIndex: 2,
  }),
};
