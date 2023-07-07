import React, { Component } from "react";

class MenuTentangKami extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tentang:
        "Warung Nusantara adalah Restoran yang Bernuansa Makanan Nusantara. Kami Ada untuk Membuat Anda Menikmati Makanan Khas dari Nusantara",
    };
  }
  render() {
    return (
      <div>
        <center>
          <p>Tentang Kami</p> {this.state.tentang}
        </center>
      </div>
    );
  }
}

export default MenuTentangKami;
