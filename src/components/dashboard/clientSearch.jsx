import React, { useState, useEffect } from "react";
import { exerciseLibrary } from "../../seeds/exerciseData";
import UpdateWorkoutModal from "../library/add-to-current-workout-modal.component";
import CreateNewWorkoutModal from "../library/create-new-workout-modal.component";
import "./exercise-library.css";
export const ExerciseLibrary = (props) => {
  var [searchCriteria, setSearchCriteria] = useState("");
  var [exercises, setExercises] = useState([]);
  var [selectedExercises, setSelectedExercises] = useState([]);
  var [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    setExercises(
      (exercises = exerciseLibrary.map((exercise) => {
        return exercise;
      }))
    );
  }, []);

  const RunSearch = (e) => {
    let criteria = e.target.value;
    setSearchCriteria(criteria);
  };

  const ClearSearch = () => {
    setSearchCriteria("");
  };

  var exercise = exercises;
  var criteria = searchCriteria;
  var exerciseList = new Array(
    exercise.filter(function (v) {
      return (
        v["Title"].toLowerCase().indexOf(criteria.toLowerCase()) >= 0 ||
        v["Description"].toLowerCase().indexOf(criteria.toLowerCase()) >= 0
      );
    })
  );
  var filtered = [];

  const onExerciseChecked = (x) => {
    exercises.map((exercise) => {
      if (x.ExerciseId) {
        setSelectedExercises([...selectedExercises, { exercise: x }]);
      } else {
        setSelectedExercises([...selectedExercises]);
      }
      return selectedExercises;
    });
  };

  return (
    <div
      id="library-container"
      className="col-10 offset"
      style={{ marginTop: "14vh", marginLeft: "8%" }}
    >
      <div className="card card-body mb-4p-4" style={{ marginTop: "6vh" }}>
        <h1 className="display-4 text-center">
          <i className="fas fa-fitness"></i>Exercise Library
        </h1>
        <p className="lead text-center">Find any exercise</p>
        <div className="search-container center">
          <input
            type="search"
            name="query"
            className="library-search-bar"
            placeholder=" Find exercise...."
            onChange={RunSearch}
          ></input>
          <h3 className="mt-4">
            Total Exercises Found: {exerciseList[0].length}
          </h3>
        </div>
        <div className="exercise-library-buttons-container">
          <CreateNewWorkoutModal
            onClick={ClearSearch}
            selectedexercises={selectedExercises}
          />
          <UpdateWorkoutModal
            onClick={ClearSearch}
            selectedexercises={selectedExercises}
          />
        </div>
      </div>

      <div className="modal-scroll">
        <table className="table table-bordered">
          <thead className="thead-light">
            <tr>
              <th>Select</th>
              <th>Title</th>
              <th>Description</th>
              <th>Image</th>
              <th>Category</th>
              <th>Subject</th>
            </tr>
          </thead>
          <tbody>
            {exerciseList[0].map((x, idx) => (
              <tr key={idx}>
                <td key={exercise.ExerciseId} data-id={exercise.ExerciseId}>
                  {exercises.filter(function (s) {
                    return s.ExerciseId == x.ExerciseId;
                  }).length > 0 ? (
                    <input
                      onClick={(e) => onExerciseChecked(x)}
                      type="checkbox"
                      name="selected"
                      defaultChecked={false}
                    />
                  ) : (
                    <input
                      onClick={(e) => onExerciseChecked(x)}
                      type="checkbox"
                      name="selected"
                      defaultChecked={false}
                    />
                  )}
                </td>
                <td>{x.Title}</td>
                <td>
                  {x.Description} {x.FunctionalDescription}{" "}
                  {x.ComplimentaryMuscles}
                </td>
                <td>
                  <img
                    className="demo-image"
                    src="./images/muscular-fitness-man-exercises-healthy-lifestyle-dark-background-silhouette_121764-213.jpg"
                  ></img>
                  {x.thumbnail}
                </td>
                <td>{x.Category}</td>
                <td>{x.Subject}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ExerciseLibrary;
