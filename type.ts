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
