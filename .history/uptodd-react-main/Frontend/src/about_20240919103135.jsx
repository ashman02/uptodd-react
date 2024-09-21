
import aboutImage from './assets/images/1.webp';
import './AboutSection.css'
const About = () => {
  return (
    <article>
      <div>
      <h1>About Page</h1>
      <nav>
        <a href="#header">Header</a>
        <a href="#main">Main</a>
        <a href="#footer">Footer</a>
      </nav>
      <section id="Focussection">
      <p>We focus to personalise every child's journey  at our best. We are obsessed for success at every family which merges with UpTodd</p> 
      </section>
      <section id="ourstorysection">
      <p className="ourstory">Our goal is to help every parent feel confident. Our play products are designed by child development experts and distilled to their simplest, purest purpose: to be exactly what children need at each stage.</p>
      </section>
      <img src={aboutImage} alt="About section" />
    
    </div>
    </article>
    
     
  );
};

export default About;
