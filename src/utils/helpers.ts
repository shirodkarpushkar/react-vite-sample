import { GetEnvVariableFn } from "./typing";

/**
 * Get environment variable from import.meta.env
 * @param key string
 * @returns string | undefined
 */
export const getEnvVariable: GetEnvVariableFn = (key) => {
  return import.meta.env[key];
};

/**
 * Get environment variable from import.meta.env or throw an error
 * @param key string
 * @returns string
 */
export const getEnvVariableOrThrow: GetEnvVariableFn = (key) => {
  const value = getEnvVariable(key);
  if (!value) {
    throw new Error(`Environment variable ${key} is not defined`);
  }
  return value;
}