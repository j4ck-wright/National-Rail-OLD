export class Darwin {
  private BASE_URL =
    "https://lite.realtime.nationalrail.co.uk/OpenLDBWS/ldb11.asmx";
  private token: string;

  constructor(token: string) {
    this.token = token;
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
