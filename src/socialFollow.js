import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faYoutube,
    faFacebook,
    faTwitter,
    faInstagram
  } from "@fortawesome/free-brands-svg-icons";

export const SocialFollow=()=> {
  return (
    <div class="social-container">
      <h3>Social Follow</h3>
        <a href="https://www.facebook.com/nscsp.us/"
       className="facebook social">
        <FontAwesomeIcon icon={faFacebook} size="2x" />
       </a>
        <a href="https://www.twitter.com/nscspi" className="twitter social">
        <FontAwesomeIcon icon={faTwitter} size="2x" />
        </a>
        <a href="https://www.instagram.com/nscsp.us"
         className="instagram social">
        <FontAwesomeIcon icon={faInstagram} size="2x" />
        </a>
    </div>
  );
}
