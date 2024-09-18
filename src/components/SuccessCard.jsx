/* eslint-disable react/prop-types */
import './SuccessCard.css';

const SuccessCard = ({ imageUrl, title, subtitle }) => {
  return (
    <div className="achievement-card">
      <div className="image-container">
        <img src={imageUrl} alt="Achievement" className="achievement-image" />
      </div>
      <div className="card-content">
        <h2 className="title">{title}</h2>
        <p className="subtitle">{subtitle}</p>
      </div>
    </div>
  );
};

export default SuccessCard;

