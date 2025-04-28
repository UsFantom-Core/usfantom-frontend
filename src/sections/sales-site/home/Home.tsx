import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  Link,
  Rating,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import React, { useEffect } from "react";
import FantomSection3Logo from "@root/assets/img/imgs/fantomsection3.png";
import AvatarImage from "@root/assets/img/imgs/avatar-image.png";
import DotImage from "@root/assets/img/imgs/dot.png";

import QuoteLogo from "@root/assets/img/imgs/quote.png";

import DiscordGalaxyLogo from "@root/assets/img/imgs/discord-galaxy.png";
import coverImage from "@root/assets/img/imgs/fantom-cover.png";
import FooterChainImage from "@root/assets/img/imgs/footer-chain.png";
import Image from "next/image";
import { highlightsCardData, paymentCardData } from ".";

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
        <Grid container alignItems="bottom" sx={styles.mainGrid}>
          <Grid item xs={12} lg={6} sx={{ mt: 10, lg: 0 }}>
            <Typography
              variant="h1"
              pt={5}
              sx={styles.heroTitle}
              data-aos="fade-right"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
            >
              Empowering Freelancers. Trustless. Borderless , Future.
            </Typography>
            <Typography
              variant="h4"
              sx={styles.heroDescription}
              data-aos="fade-right"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
            >
              At UsFantom, we’re reshaping the future of work. A decentralized
              freelancing platform where smart contracts guarantee fair, instant
              payments—no middlemen, no hidden fees.
            </Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                flexDirection: { md: "row", xs: "column" },
                gap: { xs: 0, md: 5 },
              }}
            >
              <Link
                underline="none"
                href={"https://discord.gg/usfantom"}
                sx={styles.heroButton}
                data-aos="fade-right"
                data-aos-delay="50"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                target="_blank"
              >
                Join the Discord
              </Link>
              <Button
                sx={styles.sauPauloButton}
                data-aos="fade-right"
                data-aos-delay="50"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                variant="outlined"
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
            sx={{
              display: { xs: "none", sm: "flex" },
              justifyContent: "end",
              height: "100%",
              alignItems: "end",
            }}
            data-aos="fade-left"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-once="false"
          >
            {/* <GhostAnimation /> */}
            <Image
                      src={coverImage}
                      alt="icons"
                      style={{
                        width: "600px",
                        height: "auto",
                      }}
                      width={1000}
                      height={1000}
                    />
          </Grid>
        </Grid>
      </Box>

      <Box
        sx={{
          borderRadius: "20px",
          border: "1px solid #00000033",
          maxWidth: "90%",
          margin: "40px auto",
        }}
      >
        <Grid
          container
          sx={{
            borderRadius: "20px",
            border: "1px solid #00000033",
            py: 7,
            gap: 2,
          }}
          justifyContent={"center"}
        >
          <Grid item xs={12} textAlign="center">
            <Typography
              variant="h2"
              sx={{
                color: "#161616",
                pb: 1.5,
              }}
            >
              How It Works
            </Typography>
            <Typography
              variant="h4"
              sx={{
                color: "#161616",
                maxWidth: "750px",
                margin: "0 auto",
              }}
            >
              Simple. Transparent. Powered by Blockchain.
            </Typography>
          </Grid>
          {highlightsCardData.map((item: any) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={6}
              lg={3.8}
              xl={3.8}
              pt={3}
              key={item.id}
            >
              <Card sx={styles.hightlightCard}>
                <CardContent>
                  <Box sx={{ display: "flex", justifyContent: "center" }}>
                    <Image
                      src={item.icon}
                      alt="icons"
                      style={{
                        width: "118px",
                        height: "127px",
                      }}
                      width={1000}
                      height={1000}
                    />
                  </Box>
                  <Typography
                    variant="h3"
                    sx={{
                      mt: 1.5,
                      mb: 2,
                      color: "#161616",
                    }}
                  >
                    {item.mainTitle}
                  </Typography>
                  <Typography
                    variant="h4"
                    sx={{
                      color: "#656565",
                      margin: "0 auto",
                      fontWeight: 400,
                    }}
                  >
                    {item.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* section 3 */}
        <Grid container alignItems="center" sx={{ padding: "50px 0px" }}>
          <Grid
            item
            xs={12}
            lg={6}
            sx={{
              display: { xs: "none", sm: "flex" },
              justifyContent: "center",
            }}
            data-aos="fade-left"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-once="false"
          >
            <Image
              src={FantomSection3Logo}
              alt="hero-image"
              style={{ width: "532px", height: "auto" }}
            />
          </Grid>
          <Grid
            item
            xs={12}
            lg={6}
            sx={{
              mt: 2,
              mx: { xs: 2, md: 0 },
              lg: 0,
            }}
          >
            <Box gap={1} display={"flex"} alignItems={"center"}>
              <Image
                src={DotImage}
                alt="AvatarImage"
                style={{
                  width: "15px",
                  height: "auto",
                }}
              />

              <Typography component={"span"}>Why Us</Typography>
            </Box>
            <Typography
              variant="h2"
              sx={styles.heroTitleBlack}
              color="black !umportant"
              data-aos="fade-right"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              maxWidth={450}
            >
              Why Choose UsFantom?
            </Typography>
            <Typography
              variant="h5"
              maxWidth={600}
              sx={styles.heroDescriptionBlack}
              data-aos="fade-right"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
            >
              Decentralized. Fair. Built for the Future. We’re not just another
              freelancing platform—we’re pioneering a fairer, blockchain-powered
              digital economy. UsFantom delivers: Trustless Payments: Smart
              contracts on the Fantom blockchain secure every transaction. Funds
              are locked until the job’s done. No Middlemen, Low Fees: We keep
              it fair with just a 5% platform fee—far lower than traditional
              platforms. Lightning-Fast Transactions: With Fantom’s speed and
              low costs, payments move faster than ever. Global & Borderless:
              Work and hire from anywhere, anytime. Crypto-native and ready for
              the world. Community-Driven Support: Our Discord community
              connects freelancers, employers, and the core team for seamless
              support.
            </Typography>

            <Box sx={{ display: "flex", alignItems: "center", gap: 5 }}>
              <Link
                underline="none"
                href={"https://discord.gg/usfantom"}
                sx={styles.heroButton}
                data-aos="fade-right"
                data-aos-delay="50"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                target="_blank"
              >
                Join the Discord
              </Link>
            </Box>
          </Grid>
        </Grid>

        <Grid container spacing={0.1} sx={{ padding: "50px 0px" }}>
          {paymentCardData.map((item: any, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} xl={3} key={item.id}>
              <Card sx={styles.paymentCard(index)}>
                <CardContent>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "center",
                      gap: 3.5,
                    }}
                  >
                    <Image
                      src={item.icon}
                      alt="icons"
                      style={{
                        width: "74px",
                        height: "74px",
                        borderRadius: "10px",
                      }}
                      width={1000}
                      height={1000}
                    />
                    <Typography
                      variant="h4"
                      sx={{
                        mt: 1.5,
                        mb: 2,
                        color: "#FFFFFF",
                      }}
                    >
                      {item.mainTitle}
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Grid container alignItems="center" py={10} sx={styles.mainGrid}>
          <Grid
            item
            xs={12}
            lg={6}
            sx={{
              mt: 2,
              lg: 0,
            }}
          >
            <Box gap={1} display={"flex"} alignItems={"center"}>
              <Image
                src={DotImage}
                alt="AvatarImage"
                style={{
                  width: "15px",
                  height: "auto",
                }}
              />

              <Typography component={"span"}>Community Focus. </Typography>
            </Box>
            <Typography
              variant="h2"
              sx={styles.heroTitleBlack}
              color="black !umportant"
              data-aos="fade-right"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              maxWidth={450}
            >
              Built Around Community Connect Collaborate. Grow Together.
            </Typography>
            <Typography
              variant="h5"
              maxWidth={450}
              sx={styles.heroDescriptionBlack}
              data-aos="fade-right"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
            >
              {` At UsFantom, community comes first. Our Discord server is the
              heartbeat of the platform—where freelancers, employers,
              recruiters, and the core team come together. Find opportunities.
              Showcase your work. Get support directly from the team. Engage in
              real-time with the global UsFantom network. We believe that
              thriving projects come from strong connections. Whether you're
              here to hire, work, or collaborate, Discord is where it all
              happens.`}
            </Typography>

            <Box sx={{ display: "flex", alignItems: "center", gap: 5 }}>
              <Link
                underline="none"
                href={"https://discord.gg/usfantom"}
                sx={styles.heroButton}
                data-aos="fade-right"
                data-aos-delay="50"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                target="_blank"
              >
                Join the Discord
              </Link>
            </Box>

            {/* </Link> */}
          </Grid>
        
        </Grid>

        {/*  section 5 */}
        <Grid container pb={10} sx={styles.mainGrid}>
          <Grid item xs={12} lg={5} display={"flex"} alignItems={"center"}>
            <Box
              sx={{
                maxWidth: 400,
                position: "relative",
                borderRadius: "12px",
                border: "1px solid transparent",
                backgroundImage:
                  "linear-gradient(#fff, #fff), linear-gradient(to right, #00c6ff, #0072ff)",
                backgroundOrigin: "border-box",
                backgroundClip: "content-box, border-box",
                p: 0.1,
                minHeight: "200px",
              }}
            >
              <Box
                sx={{
                  backgroundColor: "#000",
                  color: "#fff",
                  border: "1px solid #fff",
                  display: "flex",
                  alignItems: "center",
                  judtifyContent: "center",
                  position: "absolute",
                  py: { xs: 0.7, md: 1.5 },
                  width: "90%",
                  top: -20,
                  left: 0,
                  zIndex: 1,
                  borderRadius: "0px 5px 5px 5px",
                }}
              >
                <Box
                  sx={{
                    position: "absolute",
                    left: { xs: -20, md: -35 },
                    zIndex: 1,
                    width: { xs: "50px", sm: "60px", md: "80px" },
                    height: { xs: "50px", sm: "60px", md: "80px" },
                  }}
                >
                  <Image
                    src={AvatarImage}
                    alt="AvatarImage"
                    style={{ width: "100%", height: "100%" }}
                  />
                </Box>

                <Box
                  sx={{
                    ml: 5.5,
                    mr: 1,
                    display: "flex",
                    gap: 1,
                    justifyContent: "space-between",
                    alignItems: "center",
                    width: "100%",
                  }}
                >
                  <Typography  variant="subtitle2">
                    Emma T., Startup Founder
                  </Typography>
                  <Rating
                    value={5}
                    readOnly
                    sx={{
                      color: "#42D9CF",
                      "& .MuiSvgIcon-root": {
                        fontSize: { xs: "13px", sm: "20px" },
                      },
                    }}
                  />
                </Box>
              </Box>

              {/* Review Text */}
              <Typography
                variant="body2"
                mt={{ xs: 5, md: 7 }}
                mx={2.5}
                data-aos="fade-up"
                data-aos-delay="50"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                data-aos-once="false"
              >
                “We hired a great developer through UsFantom, and the whole
                process was seamless. The smart contract made everything
                transparent.”
              </Typography>

              <Box
                sx={{
                  position: "absolute",
                  bottom: -50,
                  left: 20,
                }}
              >
                <Image
                  src={QuoteLogo}
                  alt="AvatarImage"
                  style={{
                    width: "60px",
                    height: "60px",
                    // position: "absolute",
                    // left: -35,
                    zIndex: 1,
                  }}
                />
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} lg={7} pt={{ xs: 5, md: 0 }}>
            <Grid container spacing={6}>
              <Grid
                item
                xs={12}
                lg={12}
                sx={{ mt: 2, lg: 0 }}
                display={"flex"}
                flexDirection={"column"}
                alignItems={"center"}
              >
                <Box textAlign={"start"}>
                  <Box gap={1} display={"flex"} alignItems={"center"}>
                    <Image
                      src={DotImage}
                      alt="AvatarImage"
                      style={{
                        width: "15px",
                        height: "auto",
                      }}
                    />

                    <Typography component={"span"}>Trust in us</Typography>
                  </Box>
                  <Typography variant="h2" sx={styles.heroTitleBlack}>
                    Testimonials
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} lg={6}>
                <Box
                  sx={{
                    maxWidth: 400,
                    position: "relative",
                    borderRadius: "12px",
                    border: "1px solid transparent",
                    backgroundImage:
                      "linear-gradient(#fff, #fff), linear-gradient(to right, #00c6ff, #0072ff)", 
                    backgroundOrigin: "border-box",
                    backgroundClip: "content-box, border-box",
                    p: 0.1,
                    minHeight: "120px",
                  }}
                >
                  <Box
                    sx={{
                      backgroundColor: "#000",
                      color: "#fff",
                      border: "1px solid #fff",
                      display: "flex",
                      alignItems: "center",
                      judtifyContent: "center",
                      position: "absolute",
                      py: 1,
                      width: "90%",
                      top: -20,
                      left: 0,
                      zIndex: 1,
                      borderRadius: "0px 5px 5px 5px",
                    }}
                  >
                    <Box
                      sx={{
                        position: "absolute",
                        left: { xs: -20, md: -35 },
                        zIndex: 1,
                        width: { xs: "50px", sm: "60px" },
                        height: { xs: "50px", sm: "60px" },
                      }}
                    >
                      <Image
                        src={AvatarImage}
                        alt="AvatarImage"
                        style={{ width: "100%", height: "100%" }}
                      />
                    </Box>

                    <Box
                      sx={{
                        ml: 4,
                        mr: 1,
                        display: "flex",
                        gap: 1,
                        justifyContent: "space-between",
                        alignItems: "center",
                        width: "100%",
                      }}
                    >
                      <Typography
                        variant="subtitle1"
                        fontSize={10}
                        
                      >
                        Carlos R., Smart Contract Engineer
                      </Typography>
                      <Rating
                        value={5}
                        readOnly
                        sx={{
                          color: "#42D9CF",
                          "& .MuiSvgIcon-root": {
                            fontSize: "10px", // 👈 Force small size
                          },
                        }}
                      />
                    </Box>
                  </Box>

                  <Typography
                    variant="body2"
                    mt={5}
                    mx={2.5}
                    fontSize={"10px"}
                    data-aos="fade-up"
                    data-aos-delay="50"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out"
                    data-aos-once="false"
                  >
                    “Finally, a platform that respects freelancers! Low fees,
                    fast payments, and a real community on Discord.”
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} lg={6}>
                <Box
                  sx={{
                    maxWidth: 400,
                    position: "relative",
                    borderRadius: "12px",
                    border: "1px solid transparent",
                    backgroundImage:
                      "linear-gradient(#fff, #fff), linear-gradient(to right, #00c6ff, #0072ff)",
                    backgroundOrigin: "border-box",
                    backgroundClip: "content-box, border-box",
                    p: 0.1,
                    minHeight: "120px",
                  }}
                >
                  <Box
                    sx={{
                      backgroundColor: "#000",
                      color: "#fff",
                      border: "1px solid #fff",
                      display: "flex",
                      alignItems: "center",
                      judtifyContent: "center",
                      position: "absolute",
                      py: 1,
                      width: "90%",
                      top: -20,
                      left: 0,
                      zIndex: 1,
                      borderRadius: "0px 5px 5px 5px",
                    }}
                  >
                    <Box
                      sx={{
                        position: "absolute",
                        left: { xs: -20, md: -35 },
                        zIndex: 1,
                        width: { xs: "50px", sm: "60px" },
                        height: { xs: "50px", sm: "60px" },
                      }}
                    >
                      <Image
                        src={AvatarImage}
                        alt="AvatarImage"
                        style={{ width: "100%", height: "100%" }}
                      />
                    </Box>

                    <Box
                      sx={{
                        ml: 4,
                        mr: 1,
                        display: "flex",
                        gap: 1,
                        justifyContent: "space-between",
                        alignItems: "center",
                        width: "100%",
                      }}
                    >
                      <Typography
                        variant="subtitle1"
                        
                        fontSize={10}
                      >
                        Lena M., Frontend Developer
                      </Typography>
                      <Rating
                        value={5}
                        readOnly
                        sx={{
                          color: "#42D9CF",
                          "& .MuiSvgIcon-root": {
                            fontSize: "10px",
                          },
                        }}
                      />
                    </Box>
                  </Box>

                  <Typography
                    variant="body2"
                    mt={5}
                    mx={2.5}
                    fontSize={"10px"}
                    data-aos="fade-up"
                    data-aos-delay="50"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out"
                    data-aos-once="false"
                  >
                    “Using UsFantom felt empowering. The smart contracts gave me
                    peace of mind knowing my payment was secured.”
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>

      <Grid container sx={styles.empowerCardWrapper} spacing={2}>
        <Grid item xs={12} xl={7.5}>
          <Box
            display={"flex"}
            justifyContent={"end"}
            alignItems={"center"}
            height={"100%"}
          >
            <Box textAlign={{ xs: "center", md: "start" }}>
              <Box gap={1} display={"flex"} alignItems={"center"}>
                <Image
                  src={DotImage}
                  alt="AvatarImage"
                  style={{
                    width: "15px",
                    height: "auto",
                  }}
                />

                <Typography component={"span"} variant="subtitle1" color="#fff">
                  Get early access, exclusive updates & beta invites
                </Typography>
              </Box>
              <Typography variant="h1" maxWidth={"500px"} sx={styles.heroTitle}>
                Be the first to know when we launch
              </Typography>
              <Box
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  display: { xs: "none", sm: "flex" },
                }}
              >
                <Image
                  src={FooterChainImage}
                  alt="empower-vector"
                  width={1000}
                  height={1000}
                  priority={true}
                  style={{
                    width: "353px",
                    height: "auto",
                    objectFit: "cover", // Or 'contain' depending on design
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
              onChange={() => {}}
              sx={styles.searchStyles}
            />
            <Link
              underline="none"
              href={"https://discord.gg/usfantom"}
              sx={styles.heroButton}
              data-aos="fade-right"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              target="_blank"
            >
              Join the Discord
            </Link>
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
    width: "auto",
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
    margin: "20px auto",
    height: { xs: "100%", sm: "95%", md: "100%" },
  }),

  heroTitle: (theme: any) => ({
    color: "white",
    // fontWeight: 700,
    // fontSize: "3em",
    // position: "relative",
    zIndex: 3,
  }),
  heroTitleBlack: (theme: any) => ({
    color: "#1F1F1F",
    fontWeight: 600,
    position: "relative",
    zIndex: 3,
  }),
  heroDescription: (theme: any) => ({
    color: "white",
    mt: 2,
    // fontWeight: 400,
    // fontSize: "20px",
    position: "relative",
    zIndex: 3,
   
    
  }),
  heroDescriptionBlack: (theme: any) => ({
    color: "#656565",
    mt: 2,
    fontWeight: 400,
    position: "relative",
   
    zIndex: 3,
  }),

  heroButton: (theme: any) => ({
    mt: 2,
    fontWeight: 600,
    fontSize: "18px",
    borderRadius: "40px",
    background: "linear-gradient(90deg, #008AFF 0%, #4AE3C9 100%)",
    color: theme.palette.grey[0],
    padding: "6px 20px",
    textTransform: "none",
    transition: "all 0.3s ease",
  
    "&:hover": {
      background: " linear-gradient(90deg, #008AFF 0%, #018AFE 100%)", // Solid deep blue on hover
      boxShadow: "0 0 15px 3px rgba(0, 138, 255, 0.6)", // Blue glow
      color: theme.palette.grey[0],
    },
  }),
  sauPauloButton: (theme: any) => ({
    mt: 2,
    fontWeight: 600,
    fontSize: "18px",
    borderRadius: "40px",
    color: "white",
    padding: "10px 20px",
    
    "&:hover": {
      color: "transparent",
      border: "1px solid linear-gradient(90deg, #0894F8 0%, #41D7D0 100%)",
      backgroundImage: "linear-gradient(90deg, #0894F8, #41D7D0)",
      backgroundClip: "text",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
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
    // overflow: "hidden",
    mt: { xs: 2, sm: 0 },
    padding: { xs: 2, sm: 0 },
  }),

  empowerDesc: (theme: any) => ({
    color: theme.palette.grey[300],
    whiteSpace: { xs: "normal", md: "pre-line" },
    fontWeight: 500,
    mb: 3,
    zIndex: 2,
    lineHeight: "26px",
  }),

  header: (theme: any) => ({
    width: "100%",
    minHeight: { xs: "50vh", sm: "80vh", md: "70vh", lg: "80vh" },
    background: "black",
    position: "relative",
    display: " flex",
    justifyContent: "center",
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
