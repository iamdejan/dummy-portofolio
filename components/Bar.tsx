import { Variants, motion } from "framer-motion";
import { PropsWithChildren } from "react";

import { Skill } from "../types";

interface Props {
  data: Skill;
}

export default function Bar(props: PropsWithChildren<Props>): JSX.Element {
  const variants: Variants = {
    initial: {
      width: 0,
    },
    animate: {
      width: props.data.level,
      transition: {
        duration: 0.4,
        type: "spring",
        damping: 10,
        stiffness: 100,
      },
    },
  };

  return (
    <div className="my-2 text-white bg-gray-300 rounded-full dark:bg-dark-300">
      <motion.div
        className="flex items-center px-4 py-1 rounded-full bg-gradient-to-r from-green to-blue-600"
        style={{
          width: props.data.level,
        }}
        variants={variants}
        initial="initial"
        animate="animate"
      >
        <props.data.Icon className="mr-3" />
        {props.data.name}
      </motion.div>
    </div>
  );
}
