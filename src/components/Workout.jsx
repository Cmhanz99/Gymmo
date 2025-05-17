import React from "react";
import SectionWrapper from "./SectionWrapper";
import ExerciseCard from "./ExerciseCard";

const Workout = ({ workout }) => {
  return (
    <SectionWrapper id={'wor'} header={"Welcome to"} title={["The", "Danger", "Zone"]}>
      <div className="flex flex-col gap-4">
        {workout.map((exercise, i) => {
          return <ExerciseCard exercise={exercise} i={i} key={i} />;
        })}
      </div>
    </SectionWrapper>
  );
};

export default Workout;
