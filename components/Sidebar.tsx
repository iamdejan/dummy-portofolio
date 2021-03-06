import { useTheme } from "next-themes";
import Image from "next/image";
import { AiFillGithub, AiFillLinkedin, AiFillYoutube } from "react-icons/ai";
import { GiTie } from "react-icons/gi";
import { GoLocation } from "react-icons/go";

const LIGHT = "light";
const DARK = "dark";

export default function Sidebar(): JSX.Element {
  const { theme, setTheme } = useTheme();

  function changeTheme(): void {
    if (theme === LIGHT) {
      setTheme(DARK);
    } else {
      setTheme(LIGHT);
    }
  }

  return (
    <div>
      <Image
        src="/images/photo.jpg"
        alt="avatar"
        className="mx-auto rounded-full"
        width="128"
        height="128"
      />
      <h3 className="my-4 text-3xl font-medium tracking-wider font-kaushan">
        <span className="text-green">Giovanni </span>
        Dejan
      </h3>
      <p className="px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-dark-200">
        Web Developer
      </p>
      <a
        className="flex items-center justify-center px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-dark-200"
        href=""
      >
        <GiTie className="w-6 h-6" /> Download Resume
      </a>

      <div className="flex justify-around w-9/12 mx-auto my-5 text-green md:w-full">
        <a href="">
          <AiFillGithub className="w-8 h-8 cursor-pointer" />
        </a>
        <a href="">
          <AiFillLinkedin className="w-8 h-8 cursor-pointer" />
        </a>
        <a href="">
          <AiFillYoutube className="w-8 h-8 cursor-pointer" />
        </a>
      </div>

      <div
        className="py-4 my-5 bg-gray-200 dark:bg-dark-200"
        style={{
          marginLeft: "-1rem",
          marginRight: "-1rem",
        }}
      >
        <div className="flex items-center justify-center space-x-2">
          <GoLocation />
          <span>Jakarta, Indonesia</span>
        </div>
        <p className="my-2">email here</p>
        <p className="my-2">phone here</p>
      </div>
      <button
        className="w-8/12 px-5 py-2 my-2 text-white rounded-full bg-gradient-to-r from-green to-blue-400 focus:outline-none"
        onClick={() => window.open("mailto:iamme@pepbot.com")}
      >
        Email Me
      </button>
      <button
        onClick={changeTheme}
        className="w-8/12 px-5 py-2 my-2 text-white rounded-full bg-gradient-to-r from-green to-blue-400"
      >
        Toggle Theme
      </button>
    </div>
  );
}
