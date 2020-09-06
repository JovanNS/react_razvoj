import React from "react";
import { useContext } from "react";
import { BookContext } from "../context";
import Title from "./Title";

const getUnique = (items, value) => {
  return [...new Set(items.map(item => item[value]))];
};

const BooksFilter = ({ books }) => {
  // react hooks
  const context = useContext(BookContext);
  const {
    handleChange,
    type,
    brojPrimeraka,
    price,
    minPrice,
    maxPrice,
    minSize,
    maxSize,
    eBook,
    hardCopy
  } = context;


  let types = getUnique(books, "type");
 
  types = ["all", ...types];

  types = types.map((item, index) => (
    <option key={index} value={item}>
      {item}
    </option>
  ));
  
  let people = getUnique(books, "brojPrimeraka");
  people = people.map((item, index) => (
    <option key={index} value={item}>
      {item}
    </option>
  ));
  return (
    <section className="filter-container">
      <Title title="Pretrazite Knjige" />
      <form className="filter-form">
        
        <div className="form-group">
          <label htmlFor="type">Tip</label>
          <select
            name="type"
            id="type"
            onChange={handleChange}
            className="form-control"
            value={type}
          >
            {types}
          </select>
        </div>
       
        <div className="form-group">
          <label htmlFor="brojPrimeraka">Primeraka</label>
          <select
            name="brojPrimeraka"
            id="brojPrimeraka"
            onChange={handleChange}
            className="form-control"
            value={brojPrimeraka}
          >
            {people}
          </select>
        </div>
      
        <div className="form-group">
          <label htmlFor="price">Cena ${price}</label>
          <input
            type="range"
            name="price"
            min={minPrice}
            max={maxPrice}
            id="price"
            value={price}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="price">Broj Strana</label>
          <div className="size-inputs">
            <input
              type="number"
              name="minSize"
              value={minSize}
              onChange={handleChange}
              className="size-input"
            />
            <input
              type="number"
              name="maxSize"
              value={maxSize}
              onChange={handleChange}
              className="size-input"
            />
          </div>
        </div>
      
        <div className="form-group">
          <div className="single-extra">
            <input
              type="checkbox"
              name="eBook"
              id="eBook"
              checked={eBook}
              onChange={handleChange}
            />
            <label htmlFor="eBook">e-book</label>
          </div>
          <div className="single-extra">
            <input
              type="checkbox"
              name="hardCopy"
              checked={hardCopy}
              onChange={handleChange}
            />
            <label htmlFor="eBook">hard-copy</label>
          </div>
        </div>
       
      </form>
    </section>
  );
};

export default BooksFilter;
