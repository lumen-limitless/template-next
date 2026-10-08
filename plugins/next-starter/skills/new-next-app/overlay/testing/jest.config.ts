import type { Config } from "jest";
import nextJest from "next/jest.js";

// Loads next.config and .env files into the test environment.
const createJestConfig = nextJest({
  dir: "./",
});

const config: Config = {
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/$1",
  },
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  testEnvironment: "jest-environment-jsdom",
  testMatch: ["**/*.test.ts", "**/*.test.tsx"],
};

// Exported this way so next/jest can load the async Next.js config.
export default createJestConfig(config);
