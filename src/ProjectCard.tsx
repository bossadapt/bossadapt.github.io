import HnS from "./assets/project/HnS.png";
import ImporovedStartup from "./assets/project/ImporovedStartup.png";
import LeagueVersus from "./assets/project/LeagueVersus.png";
import TalkItOut from "./assets/project/TalkItOut.png";
import TFTRolls from "./assets/project/TFTRolls.png";
import VideoHijack from "./assets/project/VideoHijack.png";
import LeagueRolls from "./assets/project/LeagueRolls.png";
import SteamRecommendation from "./assets/project/SteamRecommendation.png";
import TheLastHope from "./assets/project/TheLastHope.png";
import BasicRolls from "./assets/project/BasicRolls.png";
import SteamCrawler from "./assets/project/SteamCrawler.png";
import SteamRecAI from "./assets/project/SteamRecAI.png";
import AntColonySim from "./assets/project/AntColonySim.png";
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
  ["ant-colony-sim", AntColonySim],
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
  <a href={githubURL} className="no-style" target="_blank">
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
