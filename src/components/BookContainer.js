import React from "react";
import { withBookConsumer } from "../context";
import Loading from "./Loading";
import BooksFilter from "./BooksFilter";
import BooksList from "./BooksList";

function BookContainer({ context }) {
  const { loading, sortedbooks, books } = context;
  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <BooksFilter books={books} />
      <BooksList books={sortedbooks} />
    </>
  );
}

export default withBookConsumer(BookContainer);