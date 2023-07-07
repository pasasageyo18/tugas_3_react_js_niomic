import React, { Component } from "react";

class ListMakanan extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataList: this.props.makanan,
      name: this.props.nama,
    };
  }
  render() {
    return (
      <div>
        <img src={this.state.dataList} alt={this.state.name} width={150} />
      </div>
    );
  }
}

export default ListMakanan;
