import React from "react";
import { Link } from "react-router-dom";
import defaultImg from "../images/book-1.jpeg";
import PropTypes from "prop-types";
import { memo } from "react";

const book = memo(({ book }) => {
  const { name, slug, images, price } = book;
  // console.log(name);
  return (
    <article className="book">
      <div className="img-container">
        <img src={images[0] || defaultImg} alt="single book" />
        <div className="price-top">
          <h6>${price}</h6>
          <p>per copy</p>
        </div>
        <Link to={`/books/${slug}`} className="btn-primary book-link">
          detaljnije
        </Link>
      </div>
      <p className="book-info">{name}</p>
    </article>
  );
});

book.propTypes = {
  book: PropTypes.shape({
    name: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    price: PropTypes.number.isRequired
  })
};
export default book;
