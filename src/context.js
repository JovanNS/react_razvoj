import React, { Component } from "react";
import items from "./data";

const BookContext = React.createContext();

export default class BookProvider extends Component {
  state = {
    books: [],
    sortedbooks: [],
    featuredbooks: [],
    loading: true,
    //
    type: "all",
    brojPrimeraka: 1,
    price: 0,
    minPrice: 0,
    maxPrice: 0,
    minSize: 0,
    maxSize: 0,
    eBook: false,
    hardCopy: false
  };

  componentDidMount() {
    let books = this.formatData(items);
    let featuredbooks = books.filter(book => book.featured === true);
    //
    let maxPrice = Math.max(...books.map(item => item.price));
    let maxSize = Math.max(...books.map(item => item.size));
    this.setState({
      books,
      featuredbooks,
      sortedbooks: books,
      loading: false,
      //
      price: maxPrice,
      maxPrice,
      maxSize
    });
  }

  formatData(items) {
    let tempItems = items.map(item => {
      let id = item.sys.id;
      let images = item.fields.images.map(image => image.fields.file.url);

      let book = { ...item.fields, images, id };
      return book;
    });
    return tempItems;
  }
  getbook = slug => {
    let tempbooks = [...this.state.books];
    const book = tempbooks.find(book => book.slug === slug);
    return book;
  };
  handleChange = event => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    console.log(name, value);

    this.setState(
      {
        [name]: value
      },
      this.filterbooks
    );
  };
  filterbooks = () => {
    let {
      books,
      type,
      brojPrimeraka,
      price,
      minSize,
      maxSize,
      eBook,
      hardCopy
    } = this.state;

    let tempbooks = [...books];
    // transform values
    // get brojPrimeraka
    brojPrimeraka = parseInt(brojPrimeraka);
    price = parseInt(price);
    // filter by type
    if (type !== "all") {
      tempbooks = tempbooks.filter(book => book.type === type);
    }
    // filter by brojPrimeraka
    if (brojPrimeraka !== 1) {
      tempbooks = tempbooks.filter(book => book.brojPrimeraka >= brojPrimeraka);
    }
    // filter by price
    tempbooks = tempbooks.filter(book => book.price <= price);
    //filter by size
    tempbooks = tempbooks.filter(
      book => book.size >= minSize && book.size <= maxSize
    );
    //filter by eBook
    if (eBook) {
      tempbooks = tempbooks.filter(book => book.eBook === true);
    }
    //filter by hardCopy
    if (hardCopy) {
      tempbooks = tempbooks.filter(book => book.hardCopy === true);
    }
    this.setState({
      sortedbooks: tempbooks
    });
  };
  render() {
    return (
      <BookContext.Provider
        value={{
          ...this.state,
          getbook: this.getbook,
          handleChange: this.handleChange
        }}
      >
        {this.props.children}
      </BookContext.Provider>
    );
  }
}
const BookConsumer = BookContext.Consumer;

export { BookProvider, BookConsumer, BookContext };

export function withBookConsumer(Component) {
  return function ConsumerWrapper(props) {
    return (
      <BookConsumer>
        {value => <Component {...props} context={value} />}
      </BookConsumer>
    );
  };
}
