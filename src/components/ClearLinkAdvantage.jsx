// This file contains ClearLink Advantage Section

import VideoRecorder  from "../assets/VideoRecorder.svg";
import Sound  from "../assets/Sound.svg";
import Calender  from "../assets/Calender.svg";
import Stopwatch  from "../assets/Stopwatch.svg";
import FeaturesImage from "../assets/FeaturesImage.svg";
import Arrow from "../assets/Arrow.svg"

const ClearLinkAdvantage = () => {
    return (
      <div className="advantages-section">
        <div className="choose-clearlink">
            <div className="choose-clearlink-title">
                <p className="small">The ClearLink Advantage</p>
                <p className="title">Why choose ClearLink?</p>
            </div>
            <p className="content">In a world where connection is everything, ClearLink takes the lead. Our <br />
            cutting-edge video conferencing app offers:</p>
        </div>
        
        <div className="advantages-card">
            <div className="cards">
                <div className="features-card">
                    <div className="features-card-item">
                        <img src={ VideoRecorder } alt="features-icon" />
                        <p className="features-card-item-title">Crystal-clear HD video</p>
                        <p className="features-card-item-content">
                            No more pixelation or blurriness – just <br />
                            stunning, lifelike clarity that brings your <br />
                            team closer in meetings.
                        </p>
                    </div>
                </div>

                <div className="features-card">
                    <div className="features-card-item">
                        <img src={ Sound } alt="features-icon" />
                        <p className="features-card-item-title">Noise-canceling audio</p>
                        <p className="features-card-item-content">
                            Say goodbye to distractions with our <br />
                            advanced audio tech for crisp, <br />
                            interruption-free conversations.
                        </p>
                    </div>
                </div>

                <div className="features-card">
                    <div className="features-card-item">
                        <img src={ Calender } alt="features-icon" />
                        <p className="features-card-item-title">Scheduling made easy</p>
                        <p className="features-card-item-content">
                            Streamline your agenda with ClearLink's <br />
                            intuitive scheduling. Set up meetings, <br />
                            send invitations, and receive reminders in <br />
                            one place.
                        </p>
                    </div>
                </div>

                <div className="features-card">
                    <div className="features-card-item">
                        <img src={ Stopwatch } alt="features-icon" />
                        <p className="features-card-item-title">Bank-grade security</p>
                        <p className="features-card-item-content">
                            Your privacy is our priority with bank- <br />
                            grade security protocols safeguarding <br />
                            your meetings and data from unwanted <br />
                            intruders.
                        </p>
                    </div>
                </div>
            </div>

            <img src={ FeaturesImage } alt="features-image" className="people-image" />
        </div>

        <div className="arrow-container">
            <img src={ Arrow } alt="arrow" className="arrow" />
        </div>
      </div>
    );
  };
  
  export default ClearLinkAdvantage;