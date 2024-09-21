
import aboutImage from './assets/images/1.webp';

import './'
const About = () => {
  return (
    <article>
      <div>
      {/* <h1>About Page</h1> */}
      <nav>
       
      </nav>
      <section id="Focussection">
      <p>We focus to personalise every child's journey  at our best. We are obsessed for success at every family which merges with UpTodd</p> 
      </section>
      <section id="ourgoalsection">
      <p>Our goal is to help every parent feel confident. Our play products are designed by child development experts and distilled to their simplest, purest purpose: to be exactly what children need at each stage.</p>
      </section>
      <section id="imagecontainer">
      <img src={aboutImage} alt="About section" />
      </section>
      <section id="ourstorysection">
        <h1>Our Story</h1>
        <div className="OurStory-container">
        <h2>Welcome to the World of UpTodd Early Development</h2>
      <h3>Hello,Dear Parent!</h3>
      <p>Welcome to the world of UpTodd early development! We are delighted to have you here. UpTodd was born from the dreams of three friends—Abhishek, Devesh, and Richa—who believed that every child deserves a bright and joyful start. Their journey began in the inspiring halls of IITs, driven by personal stories of resilience and hope. Sharing a common vision, they set out to bring a touch of wonder to early baby development.</p>
        </div>
      
      </section>
    
    </div>
    </article>
    
     
  );
};

export default About;
