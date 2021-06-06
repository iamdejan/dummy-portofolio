import { PropsWithChildren } from "react";

import { Category, WithAll } from "../types";

interface NavItemProps {
  value: Category | "all";
  handleFilterCategory: (category: WithAll<Category>) => void;
  activeCategory: Category | "all";
}

function NavItem(props: PropsWithChildren<NavItemProps>): JSX.Element {
  const classNames: string[] = [
    "capitalize",
    "cursor-pointer",
    "hover:text-green",
  ];
  if (props.value === props.activeCategory) {
    classNames.push("text-green");
  }

  return (
    <li
      className={classNames.join(" ")}
      onClick={() => props.handleFilterCategory(props.value)}
    >
      {props.value}
    </li>
  );
}

interface Props {
  handleFilterCategory: (category: WithAll<Category>) => void;
  activeCategory: Category | "all";
}

export default function ProjectNavbar(
  props: PropsWithChildren<Props>
): JSX.Element {
  return (
    <div className="flex px-3 py-2 space-x-3 overflow-x-auto list-none">
      <NavItem value="all" {...props} />
      <NavItem value="react" {...props} />
      <NavItem value="database" {...props} />
      <NavItem value="node" {...props} />
      <NavItem value="express" {...props} />
      <NavItem value="django" {...props} />
    </div>
  );
}
