import { soapHeader } from "./soapHeader";
import { serviceBoardParams } from "./serviceBoardParams";

export const arrivalsTemplate =
  soapHeader +
  `<soap:Body>` +
  `<ldb:GetArrivalDepartureBoardRequest>` +
  serviceBoardParams +
  `</ldb:GetArrivalDepartureBoardRequest>` +
  `</soap:Body>` +
  `</soap:Envelope>`;
