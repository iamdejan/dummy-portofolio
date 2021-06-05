import { BsCircleFill } from "react-icons/bs";
import { FaBitcoin, FaBrain, FaDatabase } from "react-icons/fa";
import { RiComputerLine, RiServerFill, RiSmartphoneLine } from "react-icons/ri";

import { Service, Skill } from "./type";

export const services: Service[] = [
  new Service(
    "Frontend Dev",
    "I'm just getting startd y'all, please help! I need more time in this world!",
    RiComputerLine
  ),
  new Service(
    "Backend Dev",
    "A little bit longer in this world, I think I'm ok in this world.",
    RiServerFill
  ),
  new Service(
    "Mobile Dev",
    "Nowhere to start. Just learning Kotlin, but I think that's not enough",
    RiSmartphoneLine
  ),
  new Service(
    "Machine Learning",
    "Imagine learning how to build a foundation, but not the building itself",
    FaBrain
  ),
  new Service(
    "Blockchain",
    "Forget it, I choose Merkel tree over complicated Ethereum and Solidity",
    FaBitcoin
  ),
  new Service(
    "Infrastructure",
    "Don't even thik about it. I can barely scale my code, let alone my server",
    FaDatabase
  ),
];

export const languages: Skill[] = [
  new Skill("Python", "80%", BsCircleFill),
  new Skill("Java", "90%", BsCircleFill),
  new Skill("Rust", "50%", BsCircleFill),
  new Skill("TypeScript", "55%", BsCircleFill),
  new Skill("Go", "50%", BsCircleFill),
  new Skill("SQL", "80%", BsCircleFill),
];

export const tools: Skill[] = [
  new Skill("Figma", "60%", BsCircleFill),
  new Skill("Photoshop", "55%", BsCircleFill),
  new Skill("Jira", "70%", BsCircleFill),
];
