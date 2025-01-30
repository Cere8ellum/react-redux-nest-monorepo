import { makeUrlFromEnv } from "@monorepo/utils/makeUrlFromEnv";

export const BASE_API_URL = makeUrlFromEnv(
  process.env.API_SERVER,
  process.env.API_PORT,
  process.env.API_ENDPOINT
);

export const BASE_WEB_URL = makeUrlFromEnv(
  process.env.WEB_SERVER,
  process.env.WEB_PORT,
  process.env.WEB_ENDPOINT
);
