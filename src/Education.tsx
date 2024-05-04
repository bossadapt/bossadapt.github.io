import "./education.css";
import { classesTaken, Grade, School } from "./data/education";
import { useState } from "react";
export const Education: React.FC = () => {
  const [nameSearch, setNameSearch] = useState("");
  const [idSearch, setIdSearch] = useState("");
  const [schools, setSchools] = useState("");
  const [grades, setGrades] = useState("");
  let classesShown = classesTaken.filter((clas) => {
    let inClassSearch = clas.name
      .toLocaleLowerCase()
      .includes(nameSearch.toLocaleLowerCase());
    let inIDSearch = clas.course
      .toLocaleLowerCase()
      .includes(idSearch.toLocaleLowerCase());
    let inSchoolSearch = clas.school.includes(schools);
    let inGradeSearch = clas.grade.includes(grades);
    return inClassSearch && inIDSearch && inSchoolSearch && inGradeSearch;
  });
  let GPA = 0;
  let creditCount = 0;
  if (classesShown.length != 0) {
    creditCount = classesShown
      .map((clas) => {
        return clas.credits;
      })
      .reduce((a, b) => {
        return a + b;
      });
    let classesShownWithoutUndef = classesShown.filter((cla) => {
      return cla.grade != Grade.Undetermined;
    });
    if (classesShownWithoutUndef.length != 0) {
      let CreditCountWithoutUndef =
        classesShownWithoutUndef
          .map((cla) => {
            return cla.credits;
          })
          .reduce((a, b) => {
            return a + b;
          }) || 0;
      let GPCountWithoutUndef =
        classesShownWithoutUndef
          .map((cla) => {
            let gradePoints = 0;
            switch (cla.grade) {
              case Grade.A: {
                gradePoints = 4;
                break;
              }
              case Grade.B: {
                gradePoints = 3;
                break;
              }
              case Grade.C: {
                gradePoints = 2;
                break;
              }
              case Grade.D: {
                gradePoints = 1;
                break;
              }
              case Grade.F: {
                gradePoints = 0;
                break;
              }
            }
            return cla.credits * gradePoints;
          })
          .reduce((a, b) => {
            return a + b;
          }) || 0;
      GPA = GPCountWithoutUndef / CreditCountWithoutUndef;
    }
  }
  return (
    <div className="contacts">
      <hr></hr>
      <div
        style={{
          marginLeft: "20px",
          marginRight: "20px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <h3 style={{ width: "100%", textAlign: "center" }}>
          Currently showing {classesShown.length} course{"("}s{")"}, totaling to{" "}
          {creditCount} credit{"("}s{")"} with a GPA of {GPA.toPrecision(3)}
        </h3>
        <div style={{ display: "flex", flexDirection: "row" }}></div>
        <table>
          <thead>
            <tr>
              <th>Course Name</th>
              <th>Course ID</th>
              <th>School</th>
              <th>Grade</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>
                <input
                  placeholder="Name Search"
                  className="searchField"
                  value={nameSearch}
                  onChange={(eve) => {
                    setNameSearch(eve.target.value);
                  }}
                ></input>
              </td>
              <td>
                <input
                  placeholder="ID Search"
                  className="searchField"
                  value={idSearch}
                  onChange={(eve) => {
                    setIdSearch(eve.target.value);
                  }}
                ></input>
              </td>
              <td>
                <select
                  className="searchField"
                  onChange={(eve) => {
                    setSchools(eve.target.value);
                  }}
                >
                  <option value={""}>All</option>
                  <option value={School.HighSchool}>{School.HighSchool}</option>
                  <option value={School.CommunityCollege}>
                    {School.CommunityCollege}
                  </option>
                  <option value={School.University}>{School.University}</option>
                </select>
              </td>
              <td>
                <select
                  className="searchField"
                  onChange={(eve) => {
                    setGrades(eve.target.value);
                  }}
                >
                  <option value="">All</option>
                  <option value={Grade.A}>A</option>
                  <option value={Grade.B}>B</option>
                  <option value={Grade.C}>C</option>
                  <option value={Grade.D}>D</option>
                  <option value={Grade.F}>F</option>
                  <option value={Grade.Undetermined}>?</option>
                </select>
              </td>
            </tr>
            {classesShown.map((classTaken) => {
              return (
                <tr key={classTaken.name}>
                  <td>{classTaken.name}</td>
                  <td>{classTaken.course}</td>
                  <td>{classTaken.school}</td>
                  <td>{classTaken.grade}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
