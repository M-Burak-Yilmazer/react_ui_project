import React from "react";
import "./App.css"

import { Article, Brand, Feature, Navbar, Cta } from "./components";
import {
  Blog,
  Footer,
  Features,
  Header,
  Possibility,
  WhatGPT3,
} from "./containers";
const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <Cta />
      <Blog />
      <Footer />
    </div>
  );
};

export default App;
