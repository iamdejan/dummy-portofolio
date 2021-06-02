import { RiComputerLine, RiServerFill, RiSmartphoneLine } from "react-icons/ri";
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
];
