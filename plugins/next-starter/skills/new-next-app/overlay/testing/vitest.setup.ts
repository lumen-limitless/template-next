import "@testing-library/jest-dom/vitest";
import { cleanup } from "@testing-library/react";
import { afterEach } from "vitest";

// Testing Library only auto-unmounts when test globals are enabled; this config
// imports from "vitest" explicitly, so unmount after each test here.
afterEach(() => {
  cleanup();
});
