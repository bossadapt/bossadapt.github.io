import { useState } from "react";
import { ProjectListing } from "./ProjectListing";
import { Welcome } from "./Welcome";
import { Education } from "./Education";

export function App() {
  const focusedIndex = "focused-index";
  const unfocusedIndex = "unfocused-index";
  const [index, setIndex] = useState({
    welcomeClass: unfocusedIndex,
    projectsClass: focusedIndex,
    educationClass: unfocusedIndex,
    body: <ProjectListing />,
  });
  const bodyList = [<Welcome />, <ProjectListing />, <Education />];
  function changeIndexFocus(index: number) {
    const currentFocuses: string[] = [];
    for (
      let classNameIndex = 0;
      classNameIndex < bodyList.length;
      classNameIndex++
    ) {
      if (classNameIndex === index) {
        currentFocuses.push(focusedIndex);
      } else {
        currentFocuses.push(unfocusedIndex);
      }
    }
    setIndex({
      welcomeClass: currentFocuses[0],
      projectsClass: currentFocuses[1],
      educationClass: currentFocuses[2],
      body: bodyList[index],
    });
  }
  return (
    <div>
      <div className="website-index">
        <button
          className={index.welcomeClass}
          onClick={() => changeIndexFocus(0)}
        >
          Welcome
        </button>
        <button
          className={index.projectsClass}
          onClick={() => changeIndexFocus(1)}
        >
          Projects
        </button>
        <button
          className={index.educationClass}
          onClick={() => changeIndexFocus(2)}
        >
          Education
        </button>
      </div>
      <div>{index.body}</div>
    </div>
  );
}
