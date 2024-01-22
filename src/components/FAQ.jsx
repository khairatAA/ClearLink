// This file contains the FAQS section

import minusCircle from "../assets/minus-circle.svg"
import plusCircle from "../assets/plus-circle.svg"

const FaqSection = () => {
    return (
      <div className="faq-section">
        <div className="faq-section-support">
            <div className="faq-section-support-title">
                <p className="support">Support</p>
                <p className="faq">FAQs</p>
            </div>
            <p className="content">
                Everything you need to know about the product <br />
                and billing. Can’t find the answer you’re looking <br />
                for? Please <span>chat to our friendly team.</span>
            </p>
        </div>

        <div className="faq-section-questions">
            <div className="ans-question">
                <div className="QA">
                    <p className="question">How many participants can join a ClearLink video conference?</p>
                    <p className="answer">
                        ClearLink offers flexible meeting options. Depending on your subscription <br />
                        plan, you can host meetings with varying numbers of participants. Our plans <br />
                        are designed to accommodate small team collaborations and large-scale <br />
                        webinars, ensuring you have the right fit for your needs.
                    </p>
                </div>
                <img src={ minusCircle } alt="icon" />
            </div>

            <div className="QA single">
                <p className="question">Can I use ClearLink on multiple devices?</p>
                <img src={ plusCircle } alt="icon" />
            </div>

            <div className="QA single">
                <p className="question">Is ClearLink compatible with other video conferencing platforms?</p>
                <img src={ plusCircle } alt="icon" />
            </div>

            <div className="QA single">
                <p className="question">How does ClearLink ensure the security of my video conferences?</p>
                <img src={ plusCircle } alt="icon" />
            </div>

            <div className="QA single">
                <p className="question">Do I need to download any software to use ClearLink?</p>
                <img src={ plusCircle } alt="icon" />
            </div>

            <div className="QA single">
                <p className="question">Do I need to download any software to use ClearLink?</p>
                <img src={ plusCircle } alt="icon" />
            </div>
        </div>
      </div>
    );
  };
  
  export default FaqSection;