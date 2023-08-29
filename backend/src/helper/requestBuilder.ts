import { serviceBoardOptions } from "../templates";
import { serviceDetailsOptions } from "../templates";

export function buildXMLString(
  template: string,
  token: string,
  options: serviceBoardOptions | serviceDetailsOptions
): string {
  let output = template.replace("!!TokenValue!!", token);
  for (const [key, value] of Object.entries(options)) {
    output = output.replace("!!" + `${key}` + "!!", `${value}`);
  }
  const regex = new RegExp("!!(.*?)!!", "g");
  output = output.replaceAll(regex, "");

  return output;
}
