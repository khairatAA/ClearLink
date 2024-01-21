import './App.css'
import Navbar from "../src/components/Navbar.jsx";
import Intro from "../src/components/Intro.jsx";
import background from "../src/assets/backgroundPattern.svg";
import SocialProofSection from "../src/components/SocialProof.jsx";
import ClearLinkAdvantage from "../src/components/ClearLinkAdvantage.jsx"

function App() {
  const backgroundStyle = {
    display: 'inline-flex',
    flexDirection: 'column',
    alignItems: 'center',
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
    </>
  )
}

export default App
