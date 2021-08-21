import "../styles.css";

const Card = ({ post_image, title, subtitle, desp, get_me }) => {
  const handleClick = () => {
    window.open(get_me);
  };

  return (
    <div className="card">
      <img src={post_image} alt="Card Banner" className="pic" />
      <div className="content">
        <h3 className="title">{title}</h3>
        <p className="subtitle">
          <small>{subtitle}</small>
        </p>
        <p className="card-body">{desp}</p>
      </div>
      <button className="card-btn" onClick={handleClick}>
        Check Me
      </button>
    </div>
  );
};

export default Card;
