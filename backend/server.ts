import express, { Application, Express, Request, Response } from "express";
import bodyParser from "body-parser";
import "dotenv/config";

import { Darwin } from "./src/Darwin";
import { BASE_URL } from "./src/templates";

import { serviceBoardOptions } from "./src/templates";

const app: Application = express();
const SERVER_PORT = process.env.PORT || 3000;
const API_TOKEN = process.env.NATIONAL_RAIL_API_TOKEN;

if (!API_TOKEN) {
  throw Error("❌ [Server]: No API key found, check the README for help");
}

const darwin = new Darwin(API_TOKEN, BASE_URL);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req: Request, res: Response) => {
  res.send("yep!");
});

app.head("/health", (req: Request, res: Response) => {
  res.status(200).send("Success");
});

app.post("/GetDepartureBoard", (req: Request, res: Response) => {
  let data = req.body;
  res.status(501).send("Not Implemented");
});

app.post("/GetArrivalBoard", (req: Request, res: Response) => {
  let data = req.body;
  res.status(501).send("Not Implemented");
});

app.post("/GetServiceDetails", (req: Request, res: Response) => {
  let data = req.body;
  res.status(501).send("Not Implemented");
});

export const server = app.listen(SERVER_PORT, (): void => {
  console.log(`⚡️ [Server]: Running at http://localhost:${SERVER_PORT}`);
});
