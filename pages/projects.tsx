import { motion } from "framer-motion";
import { useState } from "react";

import { fadeInUp, stagger } from "../animate";
import ProjectCard from "../components/ProjectCard";
import ProjectNavbar from "../components/ProjectNavbar";
import { myProjects } from "../data";
import { Category, Project, WithAll } from "../types";

export default function projects(): JSX.Element {
  const [activeProjects, setActiveProjects] = useState<Project[]>(myProjects);
  const [activeCategory, setActiveCategory] =
    useState<WithAll<Category>>("all");

  function handle(category: WithAll<Category>) {
    if (category === "all") {
      setActiveProjects(myProjects);
      setActiveCategory(activeCategory);
      return;
    }

    setActiveProjects(
      myProjects.filter((project: Project) => {
        return project.categories.includes(category);
      })
    );
    setActiveCategory(category);
  }

  return (
    <div
      className="px-5 py-2"
      style={{
        height: "65vh",
      }}
    >
      <ProjectNavbar
        handleFilterCategory={handle}
        activeCategory={activeCategory}
      />

      <motion.div
        className="relative grid grid-cols-12 gap-4 my-3"
        variants={stagger}
        initial="initial"
        animate="animate"
      >
        {activeProjects.map((project: Project, i: number) => {
          return (
            <motion.div
              key={i}
              className="col-span-12 p-2 bg-gray-200 rounded-lg sm:col-span-6 lg:col-span-4 dark:bg-dark-200"
              variants={fadeInUp}
            >
              <ProjectCard key={i} project={project} />
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}
