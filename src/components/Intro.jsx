// This file contains the intro of the web page

import Avatars from "../assets/Avatars.svg";
import ai_icon from "../assets/ai_icon.svg";
import Stars from "../assets/Stars.svg";
import FaceSmile  from "../assets/FaceSmile.svg";
import MessageTextCircle02  from "../assets/MessageTextCircle02.svg";
import Microphone01  from "../assets/Microphone01.svg";
import Monitor01  from "../assets/Monitor01.svg";
import Settings01  from "../assets/Settings01.svg";
import VideoRecorder  from "../assets/VideoRecorder.svg";
import image1 from "../assets/image1.svg";
import image2 from "../assets/image2.svg";
import image3 from "../assets/image3.svg";
import image4 from "../assets/image4.svg";
import image5 from "../assets/image5.svg";
import image6 from "../assets/image6.svg";

const Intro = () => {
  return (
    <div className="intro">
      <div className="card-left">
        <div className="card-text">
          <p className="uniting-the-world">
            Uniting the world,
            <br />
            one video call at a time
          </p>
          <p className="p">
            Experience the future of communication with ClearLink – <br/>where crystal-clear video conferencing meets
            <br /> unparalleled simplicity.
          </p>
        </div>
        <div className="inline-btn">
          <div className="btn-wrapper">
            <button className="btn-blue">
              <div className="text-white">Start your free trial</div>
            </button>
          </div>
          <div className="AI">
            <img className="AI-icon" alt="icon" src={ ai_icon } />
            <div className="AI-text">Discover AI assistant</div>
          </div>
        </div>
        <div className="user-reviews">
          <div className="avatar-group">
            <img src={ Avatars } alt="avatars" />
          </div>
          <div className="reviews">
            <div className="row">
              <img className="stars" alt="Stars" src={ Stars } />
              <div className="review-text">5.0</div>
            </div>
            <div className="reviewed-text">from 3,000+ reviews</div>
          </div>
        </div>
      </div>
      <div className="card-right">
        <div className="image-card">
            <img src={ image1 } alt="image" className="image1" />
            <img src={ image2 } alt="image" className="image2" />
            <img src={ image3 } alt="image" className="image3" />
            <img src={ image4 } alt="image" className="image4" />
            <img src={ image5 } alt="image" className="image5" />
            <img src={ image6 } alt="image" className="image6" />
        </div>
        <div className="icons-card">
          <img src={ Microphone01 } alt="icon" />
          <img src={ VideoRecorder } alt="icon" />
          <img src={ Monitor01 } alt="icon" />
          <img src={ FaceSmile } alt="icon" />
          <img src={ MessageTextCircle02 } alt="icon" />
          <img src={ Settings01 } alt="icon" />
        </div>
      </div>
    </div>
  );
};

export default Intro;
