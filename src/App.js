import React, { Component } from "react";
import MenuUtama from "./Page/MenuUtama";
import Header from "./Page/Header";
import Footer from "./Page/Footer";
import MenuTentangKami from "./Page/MenuTentangKami";
import MenuKontak from "./Page/MenuKontak";
import MenuMakanan from "./Page/MenuMakanan";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <MenuUtama />
        <MenuMakanan />
        <MenuTentangKami />
        <MenuKontak />
        <Footer />
      </div>
    );
  }
}

export default App;
