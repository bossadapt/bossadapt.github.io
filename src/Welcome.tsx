import { useEffect, useState } from "react";
import linkdin from "./assets/welcome/linkedin.png";
import github from "./assets/welcome/github.png";
import gmail from "./assets/welcome/gmail.png";
export const Welcome: React.FC = () => {
  const [styles, setStyles] = useState({
    to: { width: "0%" },
    the: { width: "0%" },
    website: { width: "0%" },
  });
  function delaydText() {
    setStyles({
      to: { width: "60%" },
      the: { width: "60%" },
      website: { width: "60%" },
    });
  }
  useEffect(() => {
    delaydText();
  }, []);
  return (
    <div>
      <div className="welcome-to-the-website">
        <div>
          <button className="to" style={styles.to}>
            to
          </button>
        </div>
        <div>
          <button className="the" style={styles.the}>
            the
          </button>
        </div>
        <div>
          <button className="website" style={styles.website}>
            Website
          </button>
        </div>
      </div>
      <div className="welcome-contents">
        <hr />
        <p
          style={{ fontSize: "30px", marginLeft: "20px", marginRight: "20px" }}
        >
          Thanks for visiting my tiny corner of the web. My name is Devin
          Phillips, I enjoy coding and videogames. Please enjoy your stay.
        </p>
        <div className="socialContainer">
          <a
            className="socialWrapper"
            href="https://www.linkedin.com/in/devin-phillips-040699191"
            target="_blank"
          >
            <img src={linkdin} className="social"></img>
          </a>
          <hr />
          <a
            className="socialWrapper"
            href="https://github.com/bossadapt"
            target="_blank"
          >
            <img src={github} className="social"></img>
          </a>
          <hr />
          <a
            className="socialWrapper"
            href="mailto: devinphillips20@gmail.com"
            target="_blank"
          >
            <img src={gmail} className="social"></img>
          </a>
        </div>
      </div>
    </div>
  );
};
