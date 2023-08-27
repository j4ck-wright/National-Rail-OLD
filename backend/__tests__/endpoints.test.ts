import request from "supertest";
import { server } from "../server";

require("dotenv").config();

describe("Health endpoint check", () => {
  it("should test that /health returns 200 OK", async () => {
    const res = await request(server).head("/health");
    expect(res.statusCode).toEqual(200);
  });
});

afterEach(async () => {
  server.close();
});
