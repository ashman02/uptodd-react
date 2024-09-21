

const AboutSection = () => {
  return (
    <div className="About-section">
      <h1>
        We focus on personalizing every childs journey at our best.
        We are obsessed with success for every family that merges with UpTodd.
      </h1>
      <div className="about-container">
        <div className="about-text">
          <p>
            Our goal is to help every parent feel confident. Our play products are designed by child development experts and distilled to their simplest, purest purpose: to be exactly what children need at each stage.
          </p>
        </div>
        <div className="Imagecontainer">
          <img src="/assets/images/1.webp" alt="About section image" />
        </div>
      </div>
      {/* New Our Story Section */}
      <div className="our-story">
        <h2>Our Story</h2>
        <p>
          UpTodd began with a simple idea: to create a safe, educational, and exciting environment for children. With a passion for child development, we crafted play products that enrich learning while giving parents peace of mind.
        </p>
        <p>
          From humble beginnings to a leading name in child-focused products, our mission has always been to support parents in nurturing their childrens growth and success.
        </p>
      </div>
      <div className="chatbox">
        <input type="text" placeholder="Ask Agent: What is Uptodd?" />
        <button type="button">▶️</button>
      </div>
    </div>
  );
}

export default AboutSection;
