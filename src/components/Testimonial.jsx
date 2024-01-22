// This file contains the testimonial section

import Stars from "../assets/Stars.svg";
import shopify from "../assets/shopify.svg";
import imageCollage from "../assets/imageCollage.svg";
import Reviewer from "../assets/Reviewer.svg"
import Arrow_left from "../assets/Arrow_left.svg"
import Arrow_right from "../assets/Arrow_right.svg"

const TestimonialSection = () => {
    return (
      <div className="testimonials">
        <div className="testimonials-container">
            <div className="testimonials-container-content">
                <img src={ shopify } alt="shopify" className="shopify" />
                <img src={ Stars } alt="stars-icon" className="stars-icon" />
                <p className="content">
                    ClearLink has upgraded our <br />
                    remote meetings. High-quality <br />
                    video, screen sharing, and <br />
                    top-notch security make it <br />
                    essential for our team.
                </p>
                <div className="testimonial-details">
                    <div className="testimonial-details-name">
                        <img src={ Reviewer } alt="reviewer" className="testimonial-img" />
                        <div className="info">
                            <p className="name">Sarah Thompson</p>
                            <p className="title">Project Manager, Shopify</p>
                        </div>
                    </div>
                    <div className="testimonial-details-arrows">
                        <img src={ Arrow_left } alt="arrows" className="arrows" />
                        <img src={ Arrow_right } alt="arrows" className="arrows" />
                    </div>
                </div>
            </div>

            <div className="testionals-container-image">
                <img src={ imageCollage } alt="images-collage" />
            </div>

        </div>
      </div>
    );
  };
  
  export default TestimonialSection;