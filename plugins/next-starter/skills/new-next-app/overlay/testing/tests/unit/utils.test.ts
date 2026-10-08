import { cn } from "@/lib/utils";

describe("cn", () => {
  it("lets later Tailwind classes override conflicting earlier ones", () => {
    expect(cn("px-2 py-1", "px-4")).toBe("py-1 px-4");
  });

  it("drops falsy values", () => {
    expect(cn("block", false, undefined, "text-sm")).toBe("block text-sm");
  });
});
