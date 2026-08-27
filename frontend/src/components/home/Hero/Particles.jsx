import "./Particles.css";

function Particles() {
  const particles = Array.from({ length: 45 });

  return (
    <div className="particles-container">
      {particles.map((_, index) => (
        <span
          key={index}
          className="particle"
          style={{
            "--x": `${Math.random() * 100}%`,
            "--y": `${Math.random() * 100}%`,
            "--size": `${2 + Math.random() * 4}px`,
            "--duration": `${8 + Math.random() * 14}s`,
            "--delay": `${Math.random() * -15}s`,
            "--move-x": `${-80 + Math.random() * 160}px`,
            "--move-y": `${-120 + Math.random() * 240}px`,
          }}
        />
      ))}
    </div>
  );
}

export default Particles;