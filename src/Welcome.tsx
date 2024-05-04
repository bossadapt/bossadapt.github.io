import { useEffect, useState } from "react";
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
          Phillips, I enjoy coding and videogames. This website was made trying
          out frontend developing. Please enjoy your stay. You can find me on{" "}
          <a href="https://github.com/bossadapt">Github</a>,{" "}
          <a href="https://www.linkedin.com/in/devin-phillips-040699191/">
            Linkedin
          </a>{" "}
          or reach me via email at devinphillips20@gmail.com .
        </p>
      </div>
    </div>
  );
};
