import { soapHeader } from "./soapHeader";

export type serviceDetailsOptions = {
  serviceID: string;
};

export const serviceDetailsTemplate =
  soapHeader +
  `<soap:Body>` +
  `<ldb:GetServiceDetailsRequest>` +
  "\n" +
  `<ldb:serviceID>!!serviceID!!</ldb:serviceID>` +
  `</ldb:GetServiceDetailsRequest>` +
  `</soap:Body>` +
  `</soap:Envelope>`;
