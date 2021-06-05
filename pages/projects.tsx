import ProjectCard from "../components/ProjectCard";
import { myProjects } from "../data";
import { Project } from "../type";

export default function projects(): JSX.Element {
  return (
    <div
      className="px-5 py-2"
      style={{
        height: "65vh",
      }}
    >
      <nav>Navbar</nav>

      <div className="relative grid grid-cols-12 gap-4 my-3">
        {myProjects.map((project: Project, i: number) => {
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
