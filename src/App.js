import React from 'react';
import Header from "./components/Header";
import Intro from "./components/Intro";
import Cards from "./components/Cards";
import Delivery from "./components/Delivery";
import Info from "./components/Info";
import Follow from "./components/Follow";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Intro />
      <Cards />
      <Delivery />
      <Info />
      <Follow />
      <Footer />
    </div>
  );
}

export default App;
