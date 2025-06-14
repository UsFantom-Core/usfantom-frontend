// @mui
import { styled } from "@mui/material/styles";
// layouts
import Layout from "../layouts";
// components

import "../styles/Home.module.css";
// sections
// import {
//   HomeHero,
//   HomeDarkMode,
//   HomeLookingFor,
//   HomeColorPresets,
//   HomePricingPlans,
//   HomeAdvertisement,
//   HomeCleanInterfaces,
//   HomeHugePackElements,
// } from '../sections/home';

// next-i18
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useRouter } from "next/router";
import { useState } from "react";
import LoadingScreen from "@root/components/LoadingScreen";
import { PATH_AUTH, ROOT_HOME } from "@root/routes/paths";

// ----------------------------------------------------------------------

const RootStyle = styled("div")(() => ({
  height: "100%",
}));

const ContentStyle = styled("div")(({ theme }) => ({
  // overflow: "hidden",
  position: "relative",
  backgroundColor: theme.palette.background.default,
}));

// ----------------------------------------------------------------------

HomePage.getLayout = function getLayout(page: any) {
  return <Layout variant="main">{page}</Layout>;
};

// ----------------------------------------------------------------------

export default function HomePage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const { t } = useTranslation(["common", "footer"]);

  if (process.browser) {
    router?.push(ROOT_HOME);
  }

  if (isLoading) return <LoadingScreen />;

  return (
      <RootStyle>
        {/* <HomeHero /> */}
        <ContentStyle>
          {/*
          <HomeHugePackElements />

          <HomeDarkMode />

          <HomeColorPresets />

          <HomeCleanInterfaces />

          <HomePricingPlans />

          <HomeLookingFor />

          <HomeAdvertisement />
          */}
          {t("demo.title", { ns: "footer" })}
        </ContentStyle>
      </RootStyle>
  );
}

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? "en", ["common", "footer"])),
  },
});
