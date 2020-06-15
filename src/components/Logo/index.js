import React, { Component } from "react";
import "./styles.css";

class Logo extends Component {
  render() {
    console.log("instantiated Logo render");
    // const { picture } = this.props;

    return (
      <img
        src="https://djp-site.s3-us-west-1.amazonaws.com/horizons-logo-v1.png"
        alt="DJ Project"
        className="logo"
      />
    );
  }
}

export default Logo;
