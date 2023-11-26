import { useEffect, useState } from "react";
export const Welcome: React.FC = () => {
  window.onscroll = function () {
    var scrollTop =
      window.pageYOffset ||
      (document.documentElement || document.body.parentNode || document.body)
        .scrollTop;
    console.log("scrolled");
    console.log(scrollTop);
  };
  const [styles, setStyles] = useState({
    to: { width: "0%" },
    the: { width: "0%" },
    website: { width: "0%" },
  });
  function delaydText() {
    console.log("delay ran");
    setStyles({
      to: { width: "100%" },
      the: { width: "100%" },
      website: { width: "100%" },
    });
  }
  useEffect(() => {
    delaydText();
  }, []);
  return (
    <div style={{ marginRight: "40%" }}>
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
      <hr />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <p style={{ fontSize: "30px" }}>
          Thanks for visiting my tiny corner of the web. My name is Devin
          Phillips, I enjoy coding and videogames. This website was made trying
          out frontend developing. Please enjoy your stay.
        </p>
      </div>
    </div>
  );
};
