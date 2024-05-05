import { createSlug } from "../../src/utils/createSlug";

describe("createSlug", () => {
  test("converts mixed case letters to lowercase", () => {
    expect(createSlug("Hello World")).toBe("hello-world");
  });

  test("removes non-alphanumeric characters except dashes and spaces", () => {
    expect(createSlug("Hello, World!")).toBe("hello-world");
  });

  test("replaces multiple spaces with a single dash", () => {
    expect(createSlug("Hello   World")).toBe("hello-world");
  });

  test("replaces multiple dashes with a single dash", () => {
    expect(createSlug("Hello---World")).toBe("hello-world");
  });

  test("handles empty strings correctly", () => {
    expect(createSlug("")).toBe("");
  });

  test("trims leading and trailing spaces and dashes", () => {
    expect(createSlug("  Hello World  ")).toBe("hello-world");
    expect(createSlug("---Hello World---")).toBe("hello-world");
  });

  test("converts complex strings with various invalid characters", () => {
    expect(createSlug("Hello @ World#2021!!")).toBe("hello-world2021");
  });
});
