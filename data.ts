import { RiComputerLine, RiServerFill, RiSmartphoneLine } from "react-icons/ri";
import { FaBrain, FaBitcoin, FaDatabase } from "react-icons/fa";
import { Service } from "./type";

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
