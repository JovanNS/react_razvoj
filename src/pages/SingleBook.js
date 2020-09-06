import React, { Component } from "react";
import defaultBcg from "../images/book-1.jpeg";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import { BookContext } from "../context";

import StyledHero from "../components/StyledHero";

export default class Singlebook extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
    this.state = {
      slug: this.props.match.params.slug,
      defaultBcg: defaultBcg
    };
  }
  static contextType = BookContext;

  // componentDidMount() {
  //   console.log(this.props);
  // }
  render() {
    const { getbook } = this.context;
    const book = getbook(this.state.slug);

    if (!book) {
      return (
        <div className="error">
          <h3> no such book could be found...</h3>
          <Link to="/books" className="btn-primary">
            back to books
          </Link>
        </div>
      );
    }
    const {
      name,
      description,
      brojPrimeraka,
      size,
      price,
      extras,
      eBook,
      hardCopy,
      images
    } = book;
    const [main, ...defaultImages] = images;
    console.log(defaultImages);

    return (
      <>
        <StyledHero img={images[0] || this.state.defaultBcg}>
          <Banner title={`${name} book`}>
            <Link to="/books" className="btn-primary">
              back to books
            </Link>
          </Banner>
        </StyledHero>
        <section className="single-book">
          <div className="single-book-images">
            {defaultImages.map((item, index) => (
              <img key={index} src={item} alt={name} />
            ))}
          </div>
          <div className="single-book-info">
            <article className="desc">
              <h3>details</h3>
              <p>{description}</p>
            </article>
            <article className="info">
              <h3>info</h3>
              <h6>price : ${price}</h6>
              <h6>size : {size}</h6>
              <h6>
                Broj Primeraka :
                {brojPrimeraka > 1 ? `${brojPrimeraka}` : `${brojPrimeraka}`}
              </h6>
              <h6>{hardCopy ? "hard copy" : "no hard copy"}</h6>
              <h6>{eBook && "eBook included"}</h6>
            </article>
          </div>
        </section>
        <section className="book-extras">
          <h6>extras </h6>
          <ul className="extras">
            {extras.map((item, index) => (
              <li key={index}>- {item}</li>
            ))}
          </ul>
        </section>
      </>
    );
  }
}
