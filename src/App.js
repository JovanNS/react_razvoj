import React from "react";
import "./App.css";

import Home from "./pages/Home";
import Books from "./pages/Books";
import SingleBook from "./pages/SingleBook";
import Error from "./pages/Error";

import Navbar from "./components/Navbar";
import Footer from './components/Footer';

import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/books/" component={Books} />
        <Route exact path="/books/:slug" component={SingleBook} />
        <Route component={Error} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
