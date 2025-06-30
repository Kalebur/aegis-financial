import "./ServiceBlurb.css";

export const ServiceBlurb = ({ blurb }) => {
  const { title, body, imgUrl, imgAlt, actionText } = blurb;
  return (
    <div className="service-blurb">
      <div className="blurb-content">
        <h2 className="blurb-title">{title}</h2>
        <p className="blurb-body">{body}</p>
        {actionText && (
          <a href="/" className="btn-action">
            {actionText}
          </a>
        )}
      </div>
      <img src={imgUrl} alt={imgAlt} className="blurb-image" />
    </div>
  );
};
