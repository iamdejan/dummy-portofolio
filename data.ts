import { BsCircleFill } from "react-icons/bs";
import { FaBitcoin, FaBrain, FaDatabase } from "react-icons/fa";
import { RiComputerLine, RiServerFill, RiSmartphoneLine } from "react-icons/ri";

import { Project, Service, Skill } from "./type";

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
  new Skill("Java", "90%", BsCircleFill),
  new Skill("Python", "80%", BsCircleFill),
  new Skill("SQL", "80%", BsCircleFill),
  new Skill("TypeScript", "55%", BsCircleFill),
  new Skill("Rust", "50%", BsCircleFill),
  new Skill("Go", "50%", BsCircleFill),
];

export const tools: Skill[] = [
  new Skill("Jira", "70%", BsCircleFill),
  new Skill("Figma", "60%", BsCircleFill),
  new Skill("Photoshop", "55%", BsCircleFill),
];

export const myProjects: Project[] = [
  new Project(
    "Exodus Checklist",
    "How to get out and not coming back to your homeland.",
    "https://uploads-ssl.webflow.com/5ba4b3c973b5d218459f7e6f/5f36037991336f1f2a8bf938_checklist-3-thumbnail.jpg",
    "http://exoduschecklist.io",
    ["react", "node"],
    ["Next.js", "REST API"]
  ),
  new Project(
    "Mobile Banking App",
    "I imagine myself having a bank and developed the mobile app.",
    "https://pbs.twimg.com/media/EeqJ0KnU8AAP2Ua.png",
    "https://play.google.com",
    ["django"],
    ["Flutter", "Android Studio"]
  ),
  new Project(
    "Super Tic-Tac-Toe",
    "My second game is 9x9 tic-tac-toe. I hope you enjoy it",
    "https://4.bp.blogspot.com/-h7mpk7kxuEk/Xmz4Nh03yvI/AAAAAAAAAKg/MbcAQjKRBu0douwfjMAw5hHXZvYtTWbewCK4BGAYYCw/s1600/29%2B-%2BConvert%2B3x3%2Bpuzzle%2Binto%2B9x9.jpg",
    "https://supertictactoe.io",
    ["express", "database"],
    ["Express", "REST API"]
  ),
  new Project(
    "SmartDeli",
    "TIKI-JNE alternative",
    "https://assets-a1.kompasiana.com/items/album/2019/12/24/aplikasijnt-5e023c2a097f3604b1079773.jpg",
    "https://smartdeli.com",
    ["django", "database"],
    ["PostgreSQL", "GPS"]
  ),
];
