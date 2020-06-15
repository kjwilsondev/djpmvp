import React, { Component } from "react";
import "./styles.css";

class Logo extends Component {
  render() {
    console.log("instantiated Logo render");
    const { picture } = this.props;

    return <img src={picture} alt="DJ Project" className="logo" />;
  }
}

export default Logo;
