import { languages, tools } from "../data";

import { Skill } from "../type";

import Bar from "../components/Bar";

export default function resume(): JSX.Element {
  return (
    <div className="px-6 py-2">
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <h5 className="my-3 text-2xl font-bold">Education</h5>
          <div>
            <h5 className="my-2 text-xl font-bold">Computer Science</h5>
            <p className="font-semibold">World Class University</p>
            <p className="my-3">
              Already graduated, so no need to ask about my university.
            </p>
          </div>
        </div>
        <div>
          <h5 className="my-3 text-2xl font-bold">Experience</h5>
          <div>
            <h5 className="my-2 text-xl font-bold">Ninja Van</h5>
            <p className="font-semibold">Software Engineer I</p>
            <p className="my-3">Fullstack wannabe.</p>
          </div>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <h5 className="my-3 text-2xl font-bold">Languages</h5>
          <div className="my-2">
            {languages.map((skill: Skill) => {
              return <Bar data={skill} key={skill.name} />;
            })}
          </div>
        </div>
        <div>
          <h5 className="my-3 text-2xl font-bold">Tools</h5>
          <div className="my-2">
            {tools.map((skill: Skill) => {
              return <Bar data={skill} key={skill.name} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
