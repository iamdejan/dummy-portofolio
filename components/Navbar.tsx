import { useState, useEffect, PropsWithChildren } from "react";

import Link from "next/link";
import { useRouter } from "next/router";

class Item {
  constructor(readonly name: string, readonly url: string) {}
}

interface NavItemProps {
  activeItem: Item;
  targetItem: Item;
  setActiveItem: (item: Item) => void;
}

function NavItem(props: PropsWithChildren<NavItemProps>): JSX.Element {
  const activeItem: Item = props.activeItem;
  const targetItem: Item = props.targetItem;
  const setActiveItem: (item: Item) => void = props.setActiveItem;

  return (
    <>
      {activeItem !== targetItem && (
        <Link href={targetItem.url}>
          <a>
            <span onClick={() => setActiveItem(targetItem)}>
              {targetItem.name}
            </span>
          </a>
        </Link>
      )}
    </>
  );
}

const ABOUT: Item = new Item("About", "/");
const PROJECTS = new Item("Projects", "/projects");
const RESUME = new Item("Resume", "/resume");
const BLANK = new Item("", "");

export default function Navbar(): JSX.Element {
  const [activeItem, setActiveItem] = useState<Item>(BLANK);

  const { pathname } = useRouter();

  useEffect(() => {
    if (pathname === ABOUT.url) {
      setActiveItem(ABOUT);
    } else if (pathname === PROJECTS.url) {
      setActiveItem(PROJECTS);
    } else if (pathname === RESUME.url) {
      setActiveItem(RESUME);
    }
  }, [pathname]);

  return (
    <div>
      <span className="font-bold text-green">{activeItem.name}</span>
      <div className="text-red font-lg">
        <NavItem
          activeItem={activeItem}
          targetItem={ABOUT}
          setActiveItem={setActiveItem}
        />
        <NavItem
          activeItem={activeItem}
          targetItem={PROJECTS}
          setActiveItem={setActiveItem}
        />
        <NavItem
          activeItem={activeItem}
          targetItem={RESUME}
          setActiveItem={setActiveItem}
        />
      </div>
    </div>
  );
}
