import { PropsWithChildren } from "react";

import { Service } from "../type";

interface Props {
  service: Service;
}

export default function ServiceCard(
  props: PropsWithChildren<Props>
): JSX.Element {
  return (
    <div className="flex items-center p-2 space-x-4">
      <props.service.Icon className="w-12 h-12 text-green" />
      <div>
        <h4 className="font-bold">{props.service.title}</h4>
        <p>{props.service.description}</p>
      </div>
    </div>
  );
}
