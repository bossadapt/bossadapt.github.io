import React, { useState } from "react";
import { ProjectCard } from "./ProjectCard";
import { projects, projectLayout } from "./data/projects";
export const ProjectListing: React.FC = () => {
  let searchInput: string = "";
  const searchOptionText: string[] = ["Tag:", "Title:"];
  const allProjects = projects.map((project) => {
    return (
      <ProjectCard
        key={project.title}
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
            key={project.title}
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
