// This file contains the social proof section

import shopify from "../assets/shopify.svg";
import coinbase from "../assets/coinbase.svg";
import dropbox from "../assets/dropbox.svg";
import intercom from "../assets/intercom.svg";
import marvel from "../assets/marvel.svg";
import automatic from "../assets/automatic.svg";

const SocialProofSection = () => {
  return (
    <div className="social-proof-section">
      <div className="container">
        <p className="text">Join 1,500+ companies already video conferencing the ClearLink way</p>
        <div className="images-container">
            <img src={ shopify } alt="social-img" />
            <img src={ coinbase } alt="social-img" />
            <img src={ dropbox } alt="social-img" />
            <img src={ intercom } alt="social-img" />
            <img src={ marvel } alt="social-img" />
            <img src={ automatic } alt="social-img" />
        </div>
      </div>
    </div>
  );
};

export default SocialProofSection;
