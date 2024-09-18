import { useRef } from "react"
import "./successstory.css"
import { happyParentsReview, cards } from "../successData"

const SuccessStory = () => {
  const carouselRef = useRef(null) // Ref to track carousel container
  const happyParentRef = useRef(null)

  const handlePrev = () => {
    if (carouselRef.current) {
      const cardWidth =
        carouselRef.current.querySelector(".carousel-card").offsetWidth
      const gap = 20 // Set this to the gap between cards in pixels
      const scrollAmount = cardWidth + gap // Scroll by the width of one card plus the gap
      carouselRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" })
    }
  }

  const handleNext = () => {
    if (carouselRef.current) {
      const cardWidth =
        carouselRef.current.querySelector(".carousel-card").offsetWidth
      const gap = 20 // Set this to the gap between cards in pixels
      const scrollAmount = cardWidth + gap // Scroll by the width of one card plus the gap
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" })
    }
  }

  const handleHappyParentPrev = () => {
    if (happyParentRef.current) {
      const cardWidth = happyParentRef.current.querySelector(
        ".happy-parents-card"
      ).offsetWidth
      const gap = 20
      const scrollAmount = cardWidth + gap
      happyParentRef.current.scrollBy({
        left: -scrollAmount,
        behavior: "smooth",
      })
    }
  }
  const handleHappyParentNext = () => {
    if (happyParentRef.current) {
      const cardWidth = happyParentRef.current.querySelector(
        ".happy-parents-card"
      ).offsetWidth
      const gap = 20
      const scrollAmount = cardWidth + gap
      happyParentRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      })
    }
  }

  return (
    <div className="main">
      <div className="intro">
        <h2>Achievers</h2>
        <h1>Real Stories: Watch Babies Thrive</h1>
      </div>
      <section className="dev-wonder">
        <h1>Developmental Wonders: Early Learning Made Fun</h1>
        <div className="dev-cont">
          <div className="dev-card">
            <div className="bg-sq">
              2 Months & <br /> Crawling!
            </div>
            <div className="front-img">
              <div className="play-circle"></div>
            </div>
          </div>
          <div className="right-circle"></div>
          <div className="down-circle"></div>

          <div className="dev-card">
            <div className="bg-sq">
              2 Months & <br /> Crawling!
            </div>
            <div className="front-img">
              <div className="play-circle"></div>
            </div>
          </div>
          <div className="right-circle"></div>
          <div className="down-circle"></div>

          <div className="dev-card">
            <div className="bg-sq">
              2 Months & <br /> Crawling!
            </div>
            <div className="front-img">
              <div className="play-circle"></div>
            </div>
          </div>
        </div>
      </section>
      <div className="curlyline">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="314"
          height="15"
          viewBox="0 0 314 15"
          fill="none"
        >
          <path
            d="M313 3.33333L302.601 9.73483C292.552 15.9212 279.732 15.2903 270.339 8.14717L269.488 7.49999C259.774 0.113225 246.325 0.113226 236.612 7.49999V7.49999C226.898 14.8868 213.449 14.8868 203.736 7.49999V7.49999C194.022 0.113222 180.573 0.113221 170.86 7.49999V7.49999C161.146 14.8868 147.697 14.8868 137.983 7.49998V7.49998C128.27 0.113216 114.821 0.113215 105.107 7.49998V7.49998C95.3935 14.8867 81.8854 14.8412 72.1715 7.45444V7.45444C62.5281 0.121297 49.1181 0.0760858 39.4747 7.40923V7.40923C29.7195 14.8274 16.1884 14.7325 6.53812 7.17834L0.999997 2.84311"
            stroke="#FF3F4E"
            strokeWidth="2"
          ></path>
        </svg>
      </div>

      <section className="happy-parents">
        <h1>
          Happy Parents, Thriving Tots:
          <span>Witnessing Their Child&#39;s Growth</span>
        </h1>
        <h5>
          A One Stop Personalized Solution | Shift Your Baby Investments For
          Strong Future
        </h5>
        <div className="happy-parent-list-container">
          <div className="happy-parent-list" ref={happyParentRef}>
            {happyParentsReview.map((review) => (
              <div key={review.id} className="happy-parents-card">
                <div>
                  <iframe
                    loading="lazy"
                    srcDoc={review.surdoc}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen=""
                    data-gtm-yt-inspected-4="true"
                    data-gtm-yt-inspected-40611628_62="true"
                    id="72071507"
                    data-gtm-yt-inspected-14="true"
                  ></iframe>
                </div>
                <div className="quote-container">
                  <img
                    src="https://www.uptodd.com/images/newWebsite/quote.svg"
                    alt="Quote"
                    className="quote-mark"
                  />
                  <p className="quote-text">{review.content}</p>
                </div>
              </div>
            ))}
          </div>
          <img
            onClick={handleHappyParentNext}
            className="happy-parents-slider-next"
            src="https://www.uptodd.com/images/newWebsite/slider-next.svg"
            alt=""
          />
          <img
            onClick={handleHappyParentPrev}
            className="happy-parents-slider-prev"
            src="https://www.uptodd.com/images/newWebsite/slider-prev.svg"
            alt=""
          />
        </div>
        <div className="see-all-cont">
          <a href="">
            <button className="see-all-btn parents-all-btn">See All</button>
          </a>
        </div>
      </section>

      <section className="luminary">
        <div className="lum-item">
          <img src="https://www.uptodd.com/images/newWebsite/playlist_add_check_circle.svg" alt="" loading="lazy" />
          <h4>
            <span>158</span>
            <br />
            Countries
          </h4>
        </div>
        <div className="lum-item">
          <img src="https://www.uptodd.com/images/newWebsite/playlist_add_check_circle.svg" alt="" loading="lazy" />
          <h4>
            <span>98%</span>
            <br />
            Happiness
          </h4>
        </div>
        <div className="lum-item">
          <img src="https://www.uptodd.com/images/newWebsite/playlist_add_check_circle.svg" alt="" loading="lazy" />
          <h4>
            <span>107 </span>
            International &
            <br />
            <span>213 </span>
            National Records
          </h4>
        </div>
        <div className="lum-item">
          <img src="https://www.uptodd.com/images/newWebsite/playlist_add_check_circle.svg" alt="" loading="lazy" />
          <h4>
            <span>1,50,000+</span>
            <br />
            Parents
          </h4>
        </div>
      </section>

      <section className="carousel-container how-baby-thrives">
        <div className="carousel-header">
          <h1>The Proof is in the Play: Watch How Babies Thrive!</h1>
          <p>
            Busy Parents, Smart Choice: Invest 10 Mins a day to a Brighter
            Tomorrow
          </p>
        </div>

        <div className="carousel-wrapper">
          <button className="carousel-button prev" onClick={handlePrev}>
            <img
              src="https://www.uptodd.com/images/newWebsite/slider-prev.svg"
              alt="Previous"
            />
          </button>

          <div className="carousel" ref={carouselRef}>
            {cards.map((card, index) => (
              <div className="carousel-card" key={index}>
                <iframe
                  width="350"
                  height="200"
                  src={card.videoUrl}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
                <h3>{card.title}</h3>
                {card.description && <p>{card.description}</p>}
              </div>
            ))}
          </div>

          <button className="carousel-button next" onClick={handleNext}>
            <img
              src="https://www.uptodd.com/images/newWebsite/slider-next.svg"
              alt="Next"
            />
          </button>
        </div>
        <div className="see-all-cont child-see-all-cont">
          <a href="">
            <button className="see-all-btn child-all-btn">See All</button>
          </a>
        </div>
      </section>
    </div>
  )
}

export default SuccessStory
