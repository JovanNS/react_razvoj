import React, { Component } from "react";
import Title from "./Title";
import { BookContext } from "../context";
import Book from "./Book";
import Loading from "./Loading";

export default class FeaturedBooks extends Component {
  static contextType = BookContext;

  render() {
    let { loading, featuredbooks: books } = this.context;

    books = books.map(book => {
      return <Book key={book.id} book={book} />;
    });
    return (
      <section className="featured-books">
        <Title title="Izdvajamo" />
        <div className="featured-books-center">
          {loading ? <Loading /> : books}
        </div>
      </section>
    );
  }
}
