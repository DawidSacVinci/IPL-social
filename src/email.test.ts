import { validateEmail } from "./email";

describe("Email Validation", () => {
  test("should return false for an empty string", () => {
    expect(validateEmail("")).toBe(false);
  });
});
