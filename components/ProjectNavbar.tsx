import { PropsWithChildren } from "react";

import { Category } from "../types";

interface NavItemProps {
  value: Category | "all";
  handleFilterCategory: (category: Category | "all") => void;
}

function NavItem(props: PropsWithChildren<NavItemProps>): JSX.Element {
  return (
    <li
      className="capitalize cursor-pointer hover:text-green"
      onClick={() => props.handleFilterCategory(props.value)}
    >
      {props.value}
    </li>
  );
}

interface Props {
  handleFilterCategory: (category: Category | "all") => void;
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
