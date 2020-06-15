import React, { Component } from "react";
import djplogo from "../../logo.png";
import "./styles.css";
import Carousel from "./components/Carousel";
import Post from "../../components/Post";
import Popup from "../../components/Popup";

import {
  faInstagram,
  faFacebook,
  faTwitter,
  faSpotify,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Home extends Component {
  render() {
    return (
      // const { title, date, picture, excerpt, link }
      <div className="home">
        {/* <Logo picture={keenLogo} /> */}
        <Carousel />
        {/* <Post title="FIRST POST" picture={girlSing} /> */}
        <div className="icons">
          <a target="_blank" href="https://www.instagram.com/thedjprojectsf/">
            <FontAwesomeIcon className="icon" icon={faInstagram} size="2x" />
          </a>
          <a target="_blank" href="https://www.facebook.com/TheDJProjectSF/">
            <FontAwesomeIcon className="icon" icon={faFacebook} size="2x" />
          </a>
          <a target="_blank" href="https://twitter.com/thedjproject?lang=en">
            <FontAwesomeIcon className="icon" icon={faTwitter} size="2x" />
          </a>
          <a
            target="_blank"
            href="https://open.spotify.com/artist/4e1yW2hNwC9rHNyZ1cGgsb?si=sRRwSaBfRqKCTcCM51K6sg"
          >
            <FontAwesomeIcon className="icon" icon={faSpotify} size="2x" />
          </a>
        </div>
        <div className="action">
          {/* TODO: add callback function to subscribe email */}
          <Popup callback={(email) => console.log(email)} />
        </div>
      </div>
    );
  }
}

export default Home;
