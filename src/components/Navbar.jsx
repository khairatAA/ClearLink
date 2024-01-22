// Navbar section of the web page
import { DropdownArrow } from "../components/DropdownArrow";
import clearlink_logo from "../assets/clearlink_logo.svg";

export default function Navbar() {
  return (
    <div className="nav">
      <div className="nav-title">
        <img className="nav-logo" alt="Logo" src={clearlink_logo} />
        <p className="clear-link">
          <span className="title-wrapper">ClearLink</span>
          <span className="span">.</span>
        </p>
      </div>
      <div className="nav-items">
        <div className="nav-item">
          <div className="item-wrapper">Products</div>
          <DropdownArrow className="drop-down" color="#667085" />
        </div>
        <div className="nav-item">
          <div className="item-wrapper">Solutions</div>
          <DropdownArrow className="drop-down" color="#667085" />
        </div>
        <div className="nav-item">
          <div className="item-wrapper">Resources</div>
          <DropdownArrow className="drop-down" color="#667085" />
        </div>
        <div className="item-wrapper">Pricing</div>
      </div>
      <div className="nav-btn">
        <button className="btn-white">
          <div className="text-black">Talk to sales</div>
        </button>
        <button className="btn-blue">
          <div className="text-white">Sign up for free</div>
        </button>
      </div>
    </div>
  );
};