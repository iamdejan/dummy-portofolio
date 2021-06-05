import { PropsWithChildren, useState } from "react";
import { AiFillProject } from "react-icons/ai";
import { MdClose } from "react-icons/md";

import { Project } from "../type";

interface Props {
  project: Project;
}

export default function ProjectCard(
  props: PropsWithChildren<Props>
): JSX.Element {
  const project = props.project;

  const [isDetail, setIsDetail] = useState<boolean>(false);

  return (
    <div>
      <img
        src={project.imagePath}
        alt={project.name}
        className="cursor-pointer"
        onClick={() => setIsDetail(true)}
      />
      <p className="my-2 text-center">{project.name}</p>

      {isDetail && (
        <div className="absolute top-0 left-0 z-20 grid w-full h-auto p-2 text-black bg-gray-100 md:grid-cols-2 gap-x-12 dark:text-white dark:bg-dark-100">
          <div>
            <img
              src={project.imagePath}
              alt={project.name}
              className="cursor-pointer"
            />
            <div className="flex justify-center my-4 space-x-3">
              <a
                href={project.deployedUrl}
                className="flex items-center px-4 py-2 space-x-3 text-lg bg-gray-200 dark:bg-dark-200"
              >
                <AiFillProject /> <span>Project</span>
              </a>
            </div>
          </div>

          <div>
            <h2 className="mb-3 text-xl font-medium md:text-2xl">
              {project.name}
            </h2>
            <h3 className="mb-3 font-medium">{project.description}</h3>
            <div className="flex flex-wrap mt-5 space-x-2 text-sm tracking-wider">
              {project.keyTechs.map((tech: string, i: number) => {
                return (
                  <span
                    key={i}
                    className="px-2 py-1 my-1 bg-gray-200 rounded-sm dark:bg-dark-200"
                  >
                    {tech}
                  </span>
                );
              })}
            </div>
          </div>

          <button
            onClick={() => setIsDetail(false)}
            className="absolute p-1 bg-gray-200 rounded-full top-3 right-3 focus:outline-none dark:bg-dark-200"
          >
            <MdClose size={30} />
          </button>
        </div>
      )}
    </div>
  );
}
