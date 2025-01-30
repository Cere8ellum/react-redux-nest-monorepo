/**
 * Returns URL string
 * @param {string} host
 * @param {string} port
 * @param {string} endpoint
 * @returns {string} URL
 */
export function makeUrlFromEnv(
  host: unknown,
  port: unknown,
  endpoint: unknown
): string {
  const hostString = typeof host === "string" ? host : "";
  const portString = typeof port === "string" ? port : "";
  const endpointString = typeof endpoint === "string" ? endpoint : "";

  const url = `${hostString}${portString ? ":" + portString : ""}${
    endpointString ? "/" + endpointString : ""
  }`;

  return url;
}
