import { Box, Typography, useTheme } from "@mui/material";
import React from "react";
import foosteringIcon from "@root/assets/img/sales-site-hero-image.png";
import Image from "next/image";

const SalesSiteHeader = ({ title, smallTitle }: any) => {
  const theme: any = useTheme();
  return (
    <>
      <Box
        sx={{
          position: "relative",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Image
          src={foosteringIcon}
          alt="header-image"
          width={239}
          height={239}
        />
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
          }}
        >
          <Typography
            variant="h6"
            sx={{
              color: theme.palette.warning.darker,
              fontWeight: 600,
              textAlign: "center",
            }}
          >
            {smallTitle}
          </Typography>
          <Typography variant="h2" sx={styles.mainTitle}>
            {title}
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default SalesSiteHeader;

const styles: any = {
  mainTitle: (theme: any) => ({
    color: theme.palette.primary.main,
    display: "inline-block",
    fontWeight: 700,
    mb: 3,
  }),
};
