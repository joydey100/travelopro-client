import React from "react";
import Banner from "../../component/Banner/Banner";
import Packages from "../../component/Packages/Packages";
import Testimonial from "../../component/Testimonial/Testimonial";
import TourGallery from "../../component/TourGallery/TourGallery";

const Home = () => {
  return (
    <>
      <Banner />
      <Packages />
      <Testimonial />
      <TourGallery />
    </>
  );
};

export default Home;
