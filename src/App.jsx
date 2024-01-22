import './App.css'
import Navbar from "../src/components/Navbar.jsx";
import Intro from "../src/components/Intro.jsx";
import background from "../src/assets/backgroundPattern.svg";
import SocialProofSection from "../src/components/SocialProof.jsx";
import ClearLinkAdvantage from "../src/components/ClearLinkAdvantage.jsx";
import TestimonialSection from "./components/Testimonial.jsx";
import FaqSection from "./components/FAQ.jsx";
import UseClearLink from "./components/UseClearLink.jsx";
import FooterSection from "./components/Footer.jsx"

function App() {
  const backgroundStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundImage: `url(${background})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover', // or 'contain', depending on your preference
  };
  return (
    <>
      <div style={backgroundStyle}>
        <Navbar />
        <Intro />
      </div>
      <SocialProofSection />
      <ClearLinkAdvantage />
      <TestimonialSection />
      <FaqSection />
      <UseClearLink />
      <FooterSection />
    </>
  )
}

export default App
