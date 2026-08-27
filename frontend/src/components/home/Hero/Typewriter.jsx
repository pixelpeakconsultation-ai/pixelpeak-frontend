import { Typewriter } from "react-simple-typewriter";

function HeroTypewriter() {
  return (
    <h1 className="hero-title">
      We Build{" "}
      <span className="typing">
        <Typewriter
          words={[
            "Websites.",
            "Brands.",
            "Startups.",
            "Online Businesses.",
            "Digital Growth."
          ]}
          loop={0}
          cursor
          cursorStyle="|"
          typeSpeed={80}
          deleteSpeed={50}
          delaySpeed={1800}
        />
      </span>
    </h1>
  );
}

export default HeroTypewriter;