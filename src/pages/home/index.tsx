import Layout from "@root/layouts";
import React from "react";
import Home from "@root/sections/sales-site/home/Home";

const PAGE_TITLE = "Home";
frequentlyAskedQuestions.getLayout = function getLayout(page: any) {
  return (
    <Layout variant="main" title={PAGE_TITLE}>
      {page}
    </Layout>
  );
};
export default function frequentlyAskedQuestions() {
  return (
    <>
      {/* Cookie Section */}
      <Home />
    </>
  );
}
