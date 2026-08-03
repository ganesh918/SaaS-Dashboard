import "./SocialButton.css";

const SocialButton = ({
  icon,
  text,
}) => {

  return (

    <button className="social-button">

      <img
        src={icon}
        alt={text}
      />

      <span>{text}</span>

    </button>

  );

};

export default SocialButton;