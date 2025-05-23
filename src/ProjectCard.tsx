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
import AdventOfCode2024 from "./assets/project/AdventOfCode2024.png";
import DisplaySettingsPlus from "./assets/project/DisplaySettingsPlus.png";
import BasicGameBackend from "./assets/project/BasicGameBackend.png";
import ToDoOrganized from "./assets/project/ToDoOrganized.png";
import MiniConnect4 from "./assets/project/MiniConnect4.png";
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
  ["Advent of Code 2024", AdventOfCode2024],
  ["Display Settings Plus", DisplaySettingsPlus],
  ["Basic Game Backend", BasicGameBackend],
  ["To Do Organized", ToDoOrganized],
  ["Mini Connect 4", MiniConnect4],
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
