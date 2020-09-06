import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import BookContainer from "../components/BookContainer";

const books = () => {
  return (
    <>
      <Hero hero="booksHero">
        <Banner title="Nase Knjige">
          <Link to="/" className="btn-primary">
            return home
          </Link>
        </Banner>
      </Hero>
      <BookContainer />
    </>
  );
};

export default books;
