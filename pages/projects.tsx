import { useState } from "react";

import ProjectCard from "../components/ProjectCard";
import ProjectNavbar from "../components/ProjectNavbar";
import { myProjects } from "../data";
import { Category, Project } from "../types";

export default function projects(): JSX.Element {
  const [activeProjects, setActiveProjects] = useState<Project[]>(myProjects);

  function handle(category: Category | "all") {
    if (category === "all") {
      setActiveProjects(myProjects);
      return;
    }

    setActiveProjects(
      myProjects.filter((project: Project) => {
        return project.categories.includes(category);
      })
    );
  }

  return (
    <div
      className="px-5 py-2"
      style={{
        height: "65vh",
      }}
    >
      <ProjectNavbar handleFilterCategory={handle} />

      <div className="relative grid grid-cols-12 gap-4 my-3">
        {activeProjects.map((project: Project, i: number) => {
          return (
            <div
              key={i}
              className="col-span-12 p-2 bg-gray-200 rounded-lg sm:col-span-6 lg:col-span-4 dark:bg-dark-200"
            >
              <ProjectCard key={i} project={project} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
