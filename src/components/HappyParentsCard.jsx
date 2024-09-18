/* eslint-disable react/prop-types */
import "./HappyParentsCard.css"

const HappyParentsCard = ({ content, srcdoc }) => {
  return (
    <div className="happy-parents-card">
      <div>
        <iframe
          loading="lazy"
          srcDoc={srcdoc}
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
        <p className="quote-text">{content}</p>
      </div>
    </div>
  )
}

export default HappyParentsCard
