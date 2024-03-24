import { GetEnvVariableFn } from "./typing";

/**
 * Get environment variable from import.meta.env
 * @param key string
 * @returns string | undefined
 */
export const getEnvVariable: GetEnvVariableFn = (key) => {
  return import.meta.env[key];
};
