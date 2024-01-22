// This file contain the section on how get started with ClearLink

import checkCircle from "../assets/check-circle.svg"
import mockup from "../assets/mockup.svg"

const UseClearLink = () => {
    return (
      <div className="useClearLink-section">
        <div className="useClearLink-section-content">
            <p className="title">
                Ready to clear the path to perfect communication?
            </p>

            <div className="items">
                <div className="item-content">
                    <img src={ checkCircle } alt="" />
                    <p className="text">30 days free trial</p>
                </div>

                <div className="item-content">
                    <img src={ checkCircle } alt="" />
                    <p className="text">Cancel at any time</p>
                </div>

                <div className="item-content">
                    <img src={ checkCircle } alt="" />
                    <p className="text">Access to all features</p>
                </div>

                <div className="item-content">
                    <img src={ checkCircle } alt="" />
                    <p className="text">Peronalized onboarding</p>
                </div>
            </div>
            <div className="btn-wrapper">
                <button className="btn-white">
                    <div className="text-black">Talk to sales</div>
                </button>
                <button className="btn-blue">
                    <div className="text-white">Start your free trial</div>
                </button>
            </div>
        </div>

        <div>
            <div className="mockUp">
                <img src={ mockup } alt="" />
            </div>
        </div>
      </div>
    );
  };
  
  export default UseClearLink;