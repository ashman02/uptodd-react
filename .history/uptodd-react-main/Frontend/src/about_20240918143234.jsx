import './AboutSection.css';

const AboutSection = () => {
  return (
    <section className="About-section">
      <h1>
        We focus to personalise every child's journey at our best.
        We are obsessed for success at every family which merges with UpTodd.
      </h1>
      <div className="about-container">
      <div className="about-text">
        <p>
          Our goal is to help every parent feel confident. Our play products are designed by child development experts and distilled to their simplest, purest purpose: to be exactly what children need at each stage.
        </p>
      </div>
      <div className="Image ">
    </div>
      <div className="chatbox">
        <input type="text" placeholder="Ask Agent  What is Uptodd?" />
        <button type="submit">▶️</button>
      </div>
    </section>
  );
}

export default AboutSection;
