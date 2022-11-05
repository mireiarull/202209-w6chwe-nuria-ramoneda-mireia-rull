import { rest } from "msw";
import mockGetResponse from "./mockGetResponse";

const robotsApiUrl = process.env.REACT_APP_API_URL_LOCAL;

const handlers = [
  rest.get(robotsApiUrl!, async (request, response, context) => {
    return response(context.status(200), context.json(mockGetResponse));
  }),
];

export default handlers;
