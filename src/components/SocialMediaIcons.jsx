import github from "../assets/github.png";
import linkedin from "../assets/linkedin.png";
import instagram from "../assets/instagram.png";

const SocialMediaIcons = () => {
  return (
    <div className="flex justify-center md:justify-start my-10 gap-7">
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.linkedin.com/in/ayushsharmasde/"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="linkedin-link" src={linkedin} />
      </a>
      {/* <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.twitter.com"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="twitter-link" src="../assets/twitter.png" />
      </a> */}
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://github.com/ayushshawnfrost"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="github-link" src={github} />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.instagram.com/ayushshawnfrost/"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="instagram-link" src={instagram} />
      </a>
    </div>
  );
};

export default SocialMediaIcons;
