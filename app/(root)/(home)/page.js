import BenefitsofTisum from "@/components/BenefitsofTisum";
import HomeBanner from "@/components/HomeBanner";
import Newplaces from "@/components/Newplaces";
import Testimonials from "@/components/Testimonials";
import TisumBussiness from "@/components/TisumBussiness";
import TopRatedServices from "@/components/TopRatedServices";
import WeRecommend from "@/components/WeRecommend";
import React from "react";

const page = () => {
  return (
    <div>
      <HomeBanner />
      <Newplaces />
      <WeRecommend />
      <BenefitsofTisum />
      <Testimonials />
      <TopRatedServices />
      <TisumBussiness />
    </div>
  );
};

export default page;
