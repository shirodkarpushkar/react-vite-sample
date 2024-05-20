import { describe, it, expect } from "vitest";
import { getEnvVariable } from "../utils";

describe("getEnvVariable", () => {
  it("should return all values of the environment variables correctly", () => {
    // Arrange
    const object = {
      VITE_URL: "https://vitejs.dev",
      VITE_REACT_URL: "https://reactjs.org",
      VITE_API_URL: "https://jsonplaceholder.typicode.com",
      VITE_FLAGS_URL: "https://www.countryflags.io",
      VITE_GOOGLE_MAPS_API_KEY: "YOUR_GOOGLE_MAPS_API_KEY",
    };

    // Act
    const result = Object.keys(object).map((key) => getEnvVariable(key));
    // Assert
    expect(result).toEqual(Object.values(object));
  });

  it("should return undefined if the environment variable is not defined", () => {
    // Arrange
    const key = "VITE_NOT_DEFINED";
    // Act
    const result = getEnvVariable(key);
    // Assert
    expect(result).toBeUndefined();
  });
});
