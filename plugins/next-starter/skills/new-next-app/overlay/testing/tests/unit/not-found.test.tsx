import { render, screen } from "@testing-library/react";
import { expect, it } from "vitest";
import NotFound from "@/app/not-found";

it("renders the 404 heading", () => {
  render(<NotFound />);
  expect(
    screen.getByRole("heading", { level: 1, name: "404" })
  ).toBeInTheDocument();
});
