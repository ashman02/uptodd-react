import { useRef } from "react"
import "./successstory.css"

const SuccessStory = () => {
  const carouselRef = useRef(null) // Ref to track carousel container

  const cards = [
    {
      title: "Rishit can observe 300+ fruits & vegetables",
      videoUrl: "https://www.youtube.com/embed/ku6AjmjCcH4?si=GKga_botv-EwNq8W",
    },
    {
      title: "5 month baby can identify 100+ flashcards",
      videoUrl: "https://www.youtube.com/embed/ku6AjmjCcH4?si=GKga_botv-EwNq8W",
    },
    {
      title: "4.5 months Recognizes 100 Animals & Flowers",
      videoUrl: "https://www.youtube.com/embed/ku6AjmjCcH4?si=GKga_botv-EwNq8W",
    },
    {
      title: "4.5 months Recognizes 100 Animals & Flowers",
      videoUrl: "https://www.youtube.com/embed/ku6AjmjCcH4?si=GKga_botv-EwNq8W",
    },
    {
      title: "4.5 months Recognizes 100 Animals & Flowers",
      videoUrl: "https://www.youtube.com/embed/ku6AjmjCcH4?si=GKga_botv-EwNq8W",
    },
    {
      title: "4.5 months Recognizes 100 Animals & Flowers",
      videoUrl: "https://www.youtube.com/embed/ku6AjmjCcH4?si=GKga_botv-EwNq8W",
    },
  ]

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

  return (
    <div className="carousel-container">
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
    </div>
  )
}

export default SuccessStory
