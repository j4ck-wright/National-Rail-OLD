import { sendRequest, requestType } from "../src/helper/requestSender";
import { BASE_URL } from "../src/templates";
import "dotenv/config";

const API_TOKEN = process.env.NATIONAL_RAIL_API_TOKEN;

describe("requestSender.ts test suite", () => {
  it("Should return 200 OK from valid input xml body", async () => {
    const body =
      '<soap:Envelope xmlns:soap="http://www.w3.org/2003/05/soap-envelope" xmlns:typ="http://thalesgroup.com/RTTI/2013-11-28/Token/types" xmlns:ldb="http://thalesgroup.com/RTTI/2017-10-01/ldb/"><soap:Header><typ:AccessToken><typ:TokenValue>' +
      `${API_TOKEN}` +
      "</typ:TokenValue></typ:AccessToken></soap:Header><soap:Body><ldb:GetDepartureBoardRequest><ldb:numRows>1</ldb:numRows><ldb:crs>LDS</ldb:crs></ldb:GetDepartureBoardRequest></soap:Body></soap:Envelope>";

    const response: requestType = await sendRequest(body, BASE_URL);
    expect(response.status).toEqual(200);
    expect(response.statusMsg).toEqual("OK");
  });

  it("Should return 500 Internal Server Error from malformed input xml body", async () => {
    const body =
      '<soap:Envelope xmlns:soap="http://www.w3.org/2003/05/soap-envelope" xmlns:typ="http://thalesgroup.com/RTTI/2013-11-28/Token/types" xmlns:ldb="http://thalesgroup.com/RTTI/2017-10-01/ldb/"><soap:Header><typ:AccessToken><typ:TokenValue>' +
      `${API_TOKEN}` +
      "</typ:TokenValue></typ:AccessToken></soap:Header><soap:Body><ldb:GetDepartureBoardRequest><ldb:numRows>1</ldb:numRows><ldb:crs>malformedCRS</ldb:crs></ldb:GetDepartureBoardRequest></soap:Body></soap:Envelope>";

    const response: requestType = await sendRequest(body, BASE_URL);
    expect(response.status).toEqual(500);
    expect(response.statusMsg).toEqual("Internal Server Error");
  });

  it("Should return 401 Unauthorized Server Error from malformed input xml body", async () => {
    const body = "No token provided";
    const response: requestType = await sendRequest(body, BASE_URL);
    expect(response.status).toEqual(401);
    expect(response.statusMsg).toEqual("Unauthorized");
  });
});
