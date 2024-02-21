import React, { useState } from "react";
import { ProjectCard } from "./ProjectCard";
interface projectLayout {
  title: string;
  githubURL: string;
  tags: string[];
}
export const ProjectListing: React.FC = () => {
  let searchInput: string = "";
  const searchOptionText: string[] = ["Tag:", "Title:"];
  const projects: projectLayout[] = [
    {
      title: "HnS",
      githubURL: "https://github.com/bossadapt/HnS",
      tags: ["Java", "Android Studio", "Google Places", "Firebase"],
    },
    {
      title: "Steam Recommendations",
      githubURL: "https://github.com/bossadapt/steamRecommendation",
      tags: ["Rust", "Data Science", "Statistics", "Data Visualization", "csv"],
    },
    {
      title: "League Rolls",
      githubURL: "https://github.com/bossadapt/leagueRolls",
      tags: ["Python", "Machine Learning", "CSV", "Local Storage"],
    },
    {
      title: "Imporoved Startup",
      githubURL: "https://github.com/bossadapt/Improved-Startup",
      tags: ["Python", "PyQt5", "Local Storage"],
    },
    {
      title: "Video Hijack",
      githubURL: "https://github.com/bossadapt/VideoHijack",
      tags: ["Python", "Tkinter", "Local Storage"],
    },
    {
      title: "TFT Rolls",
      githubURL: "https://github.com/bossadapt/TFTRolls",
      tags: ["Python", "Computer Vision", "PyAutoGUI"],
    },
    {
      title: "League Versus",
      githubURL: "https://github.com/bossadapt/LeagueVersus",
      tags: ["Javascript", "Node.js", "Riot API", "Discord Bot", "MySQL"],
    },
    {
      title: "Talk It Out",
      githubURL: "https://github.com/bossadapt/TalkItOut",
      tags: ["Java", "Android Studio", "Room Database"],
    },
    {
      title: "This Website",
      githubURL: "https://github.com/bossadapt/bossadapt.github.io",
      tags: ["TypeScript", "Vite", "CSS", "React"],
    },
    {
      title: "The Last Hope",
      githubURL: "https://github.com/bossadapt/the_last_hope",
      tags: ["Rust", "Game Dev", "Animation", "Pathfinding"],
    },
    {
      title: "Basic Rolls",
      githubURL: "https://github.com/bossadapt/basic-rolls",
      tags: ["Tauri", "Next.JS", "Rust", "Typescript", "SQLite"],
    },
    {
      title: "Steam Crawler",
      githubURL: "https://github.com/bossadapt/steam_crawler",
      tags: ["Rust", "Scraper", "Crawler", "SteamAPI", "SQLite"],
    },
  ];
  const allProjects = projects.map((project) => {
    return (
      <ProjectCard
        title={project.title}
        githubURL={project.githubURL}
        tags={project.tags}
      />
    );
  });

  const [shownProjects, setShownProjects] = useState({
    currentSearch: "",
    results: allProjects,
  });
  function updateSearch(
    newValue: string,
    updatedSearchType: boolean,
    newSearchType: boolean
  ) {
    searchInput = searchInput + newValue;
    if (searchInput === "") {
      setShownProjects({ currentSearch: searchInput, results: allProjects });
      return;
    }
    let currentResults: projectLayout[] = [];
    const searchInputLower = searchInput.toLowerCase();
    let currentSearchType: boolean;
    if (updatedSearchType) {
      currentSearchType = newSearchType;
    } else {
      currentSearchType = searchType;
    }
    if (currentSearchType) {
      currentResults = projects.filter((project) => {
        return project.title.toLowerCase().includes(searchInputLower);
      });
    } else {
      currentResults = projects.filter((project) => {
        const currentTags = project.tags;
        for (let tagIndex = 0; tagIndex < currentTags.length; tagIndex++) {
          if (currentTags[tagIndex].toLowerCase().includes(searchInputLower)) {
            return true;
          }
        }
      });
    }
    if (currentResults.length === 0) {
      setShownProjects({
        currentSearch: searchInput,
        results: [<p>No Projects Match Your Search</p>],
      });
    } else {
      const newResult = currentResults.map((project) => {
        return (
          <ProjectCard
            title={project.title}
            githubURL={project.githubURL}
            tags={project.tags}
          />
        );
      });
      setShownProjects({ currentSearch: searchInput, results: newResult });
    }
  }
  const [searchType, setSearchType] = useState(true);

  function searchToggle() {
    const newSearchToggle = !searchType;
    setSearchType(newSearchToggle);
    updateSearch(shownProjects.currentSearch, true, newSearchToggle);
  }
  return (
    <div className="project-listing">
      <div className="search-bar">
        <button onClick={searchToggle}>
          {searchOptionText[Number(searchType)]}
        </button>
        <input
          type="text"
          value={shownProjects.currentSearch}
          onChange={(evt) => {
            updateSearch(evt.target.value, false, false);
          }}
        ></input>
      </div>
      {shownProjects.results}
    </div>
  );
};
