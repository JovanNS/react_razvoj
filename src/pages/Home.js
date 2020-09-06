import React from "react";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import Services from "../components/Services";
import FeaturedBooks from "../components/FeaturedBooks";

const home = () => {
  return (
    <>
      <Hero>
        <Banner
          title="VTSNS Biblioteka"
          subtitle="najbolja ponuda knjiga"
        >
          <Link to="/books" className="btn-primary">
            Pogledajte Nase Knjige
          </Link>
        </Banner>
      </Hero>
      <Services />
      <FeaturedBooks />
    </>
  );
};

export default home;
