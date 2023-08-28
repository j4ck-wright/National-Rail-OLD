import { soapHeader } from "./soapHeader";
import { serviceBoardParams } from "./serviceBoardParams";

export const departuresTemplate =
  soapHeader +
  `<soap:Body>` +
  `<ldb:GetDepartureBoardRequest>` +
  serviceBoardParams +
  `</ldb:GetDepartureBoardRequest>` +
  `</soap:Body>` +
  `</soap:Envelope>`;
