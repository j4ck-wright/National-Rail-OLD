import axios, { AxiosResponse, AxiosError } from "axios";

export type requestType = {
  status: number;
  statusMsg: string;
  data?: string;
};

export async function sendRequest(
  body: string,
  url: string
): Promise<requestType> {
  let status = 0;
  let statusMsg = "";
  let data: undefined;

  try {
    const request: AxiosResponse = await axios.post(url, body, {
      headers: { "Content-Type": "text/xml" },
    });
    status = 200;
    statusMsg = "OK";
    data = await request.data;
  } catch (error: unknown | AxiosError) {
    if (axios.isAxiosError(error)) {
      if (error.response) {
        status = error.response.status;
        statusMsg = error.response.statusText;
      }
    }
  }

  let payload: requestType = {
    status,
    statusMsg,
    data,
  };

  return payload;
}
