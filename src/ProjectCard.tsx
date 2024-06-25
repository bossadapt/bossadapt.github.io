import HnS from "./assets/HnS.png";
import ImporovedStartup from "./assets/ImporovedStartup.png";
import LeagueVersus from "./assets/LeagueVersus.png";
import TalkItOut from "./assets/TalkItOut.png";
import TFTRolls from "./assets/TFTRolls.png";
import VideoHijack from "./assets/VideoHijack.png";
import LeagueRolls from "./assets/LeagueRolls.png";
import SteamRecommendation from "./assets/SteamRecommendation.png";
import TheLastHope from "./assets/TheLastHope.png";
import BasicRolls from "./assets/BasicRolls.png";
import SteamCrawler from "./assets/SteamCrawler.png";
import SteamRecAI from "./assets/SteamRecAI.png";
const imageList = new Map([
  ["SteamRec AI", SteamRecAI],
  ["Steam Crawler", SteamCrawler],
  ["Basic Rolls", BasicRolls],
  ["League Rolls", LeagueRolls],
  ["HnS", HnS],
  ["Imporoved Startup", ImporovedStartup],
  ["League Versus", LeagueVersus],
  ["Talk It Out", TalkItOut],
  ["TFT Rolls", TFTRolls],
  ["Video Hijack", VideoHijack],
  ["Steam Recommendations", SteamRecommendation],
  ["The Last Hope", TheLastHope],
]);

interface ProjectCardProps {
  title: string;
  githubURL: string;
  tags: string[];
}
export const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  githubURL,
  tags,
}) => (
  <a href={githubURL} className="no-style">
    <div
      className="project-card"
      style={{
        backgroundImage: `url(${imageList.get(title)})`,
      }}
    >
      <div className="gradient-on-image">
        <div className="tags">
          {tags.map((catagory) => {
            return <div key={catagory}>{catagory}</div>;
          })}
        </div>
        <h3>{title}</h3>
      </div>
    </div>
  </a>
);
