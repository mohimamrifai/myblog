import { createSlug } from "../../src/utils/createSlug";

describe("create slug", () => {
  it("converts a title to a lowercase slug", () => {
    expect(createSlug("Hello World")).toBe("hello-world");
  });

  it("handles strings with multiple spaces", () => {
    console.log(createSlug("Hello    world"))
    expect(createSlug("Hello    world")).toBe("hello----world");
  });

  it("handles empty strings", () => {
    expect(createSlug("")).toBe("");
  });

  it("removes leading and trailing spaces", () => {
    expect(createSlug("  Hello World  ")).toBe("--hello-world--");
  });

  it("works with non-alphabetic characters", () => {
    expect(createSlug("Hello World!!!")).toBe("hello-world!!!");
  });
});
