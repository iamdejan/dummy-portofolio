import { IconType } from "react-icons";

export class Service {
  constructor(
    readonly title: string,
    readonly description: string,
    readonly icon: IconType
  ) {}
}
