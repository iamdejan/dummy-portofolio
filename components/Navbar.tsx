import Link from "next/link";
import { useRouter } from "next/router";
import { PropsWithChildren, useEffect, useState } from "react";

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
            <span
              onClick={() => setActiveItem(targetItem)}
              className="hover:text-green"
            >
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
    <div className="flex justify-between px-5 py-3 my-3">
      <span className="text-lg font-bold border-b-4 text-green border-green md:text-2xl">
        {activeItem.name}
      </span>
      <div className="flex space-x-5 text-lg">
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
