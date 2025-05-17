import React, { useState } from "react";
import SectionWrapper from "./SectionWrapper";
import { SCHEMES, WORKOUTS } from "../utils/gymmo";
import Button from "./Button";

const Header = ({ index, title, description }) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-3 justify-center">
        <p
          className="text-3xl sm:text-4xl md:text-5xl
        font-bold text-red-500"
        >
          {index}
        </p>
        <h4 className="text-xl sm:text-2xl md:text-3xl font-bold uppercase tracking-wide text-white">{title}</h4>
      </div>
      <p className="text-sm sm:text-base mx-auto text-slate-300">{description}</p>
    </div>
  );
};

const Generator = ({
  poison,
  setPoison,
  muscle,
  setMuscle,
  goals,
  setGoals,
  updateWorkout,
}) => {
  const [showModal, setShowModal] = useState(false);

  const updateMuscle = (muscleGroup) => {
    if (muscle.includes(muscleGroup)) {
      setMuscle(muscle.filter((val) => val !== muscleGroup));
      return;
    }

    if (muscle.length > 2) {
      return;
    }

    if (poison !== "individual") {
      setMuscle([muscleGroup]);
      setShowModal(false);
      return;
    }

    setMuscle([...muscle, muscleGroup]);

    if (muscle.length === 2) {
      setShowModal(false);
    }
  };

  return (
    <SectionWrapper
      id={"generate"}
      header={"FORGE YOUR DESTINY"}
      title={["It's", "Beast Mode", "Time"]}
    >
      <Header
        index={"01"}
        title={"Pick your poison"}
        description={"Select the workout that will test your limits."}
      />
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {Object.keys(WORKOUTS).map((type, typeIndex) => {
          return (
            <button
              key={typeIndex}
              className={`bg-gradient-to-br from-slate-900 to-black border-2 py-3 rounded-lg
              duration-200 hover:border-red-600 hover:shadow-red-500/20 hover:shadow-lg cursor-pointer font-medium ${
                type === poison
                  ? "border-red-600 shadow-lg shadow-red-500/20"
                  : "border-slate-700"
              }`}
              onClick={() => {
                setMuscle([]);
                setPoison(type);
              }}
            >
              <p className="capitalize font-bold">{type.replaceAll("_", " ")}</p>
            </button>
          );
        })}
      </div>

      <Header
        index={"02"}
        title={"Lock on targets"}
        description={"Select the muscles prepared for total domination."}
      />
      <div className="bg-gradient-to-br from-slate-900 to-black border-2 border-solid border-slate-700 rounded-lg relative flex flex-col overflow-hidden">
        <button
          className="relative p-4 flex items-center justify-center cursor-pointer font-bold"
          onClick={() => setShowModal(!showModal)}
        >
          <p className="capitalize">
            {muscle.length === 0 ? "Select muscle groups" : muscle.join(" & ")}
          </p>
          <i className="fa-solid fa-caret-down absolute top-1/2 right-3 -translate-y-1/2"></i>
        </button>
        {showModal && (
          <div className="flex flex-col p-3 pb-3 border-t border-slate-700 bg-black/50 backdrop-blur-sm">
            {(poison === "individual"
              ? WORKOUTS[poison]
              : Object.keys(WORKOUTS[poison])
            ).map((muscleGroup, muscleGroupIndex) => {
              return (
                <button
                  onClick={() => {
                    updateMuscle(muscleGroup);
                  }}
                  key={muscleGroupIndex}
                  className={`hover:text-red-500 p-2 duration-200 ${
                    muscle.includes(muscleGroup) ? "text-red-500 font-bold" : ""
                  }`}
                >
                  <p className="uppercase cursor-pointer">{muscleGroup}</p>
                </button>
              );
            })}
          </div>
        )}
      </div>

      <Header
        index={"03"}
        title={"Forge Your Power"}
        description={"Select your ultimate objective."}
      />
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {Object.keys(SCHEMES).map((scheme, schemeIndex) => {
          return (
            <button
              key={schemeIndex}
              className={`bg-gradient-to-br from-slate-900 to-black border-2 py-3 rounded-lg
              duration-200 hover:border-blue-600 hover:shadow-blue-500/20 hover:shadow-lg cursor-pointer font-medium ${
                scheme === goals
                  ? "border-blue-600 shadow-lg shadow-blue-500/20"
                  : "border-slate-700"
              }`}
              onClick={() => setGoals(scheme)}
            >
              <p className="capitalize font-bold">{scheme.replaceAll("_", " ")}</p>
            </button>
          );
        })}
      </div>
      <Button func={updateWorkout} text={"FORGE YOUR WORKOUT"} />
    </SectionWrapper>
  );
};

export default Generator;