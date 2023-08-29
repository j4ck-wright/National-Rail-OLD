import { buildXMLString } from "./helper";
import { departuresTemplate } from "./templates/getDepartures";
import { serviceBoardOptions } from "./templates/serviceBoardParams";

export class Darwin {
  private BASE_URL: string;
  private token: string;

  constructor(token: string, url: string) {
    this.token = token;
    this.BASE_URL = url;
  }

  getDepartures() {
    throw Error("Not Implemented");
  }

  getArrivals() {
    throw Error("Not Implemented");
  }

  getServiceDetails() {
    throw Error("Not Implemented");
  }
}
