import robotLogo from "../../../assets/images/pixelpeak-robot-logo.png";

function HeroDashboard() {
  return (
    <div className="hero-dashboard">
      <img
        src={robotLogo}
        alt="PixelPeak Robot"
        className="hero-robot-logo"
      />
    </div>
  );
}

export default HeroDashboard;