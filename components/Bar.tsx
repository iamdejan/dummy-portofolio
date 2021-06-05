import { PropsWithChildren } from "react";

import { Skill } from "../type";

interface Props {
  data: Skill;
}

export default function Bar(props: PropsWithChildren<Props>): JSX.Element {
  return (
    <div className="my-2 text-white bg-gray-300 rounded-full dark:bg-dark-300">
      <div
        className="flex items-center px-4 py-1 rounded-full bg-gradient-to-r from-green to-blue-600"
        style={{
          width: props.data.level,
        }}
      >
        <props.data.Icon className="mr-3" />
        {props.data.name}
      </div>
    </div>
  );
}
