import { IconType } from "react-icons";

export class Service {
  constructor(
    readonly title: string,
    readonly description: string,
    readonly Icon: IconType
  ) {}
}

export class Skill {
  constructor(
    readonly name: string,
    readonly level: string,
    readonly Icon: IconType
  ) {}
}

export type Category = "react" | "database" | "node" | "express" | "django";

export class Project {
  constructor(
    readonly name: string,
    readonly description: string,
    readonly imagePath: string,
    readonly deployedUrl: string,
    readonly category: Category[],
    readonly keyTechs: string[]
  ) {}
}
