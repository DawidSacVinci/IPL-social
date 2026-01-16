import { validateEmail } from "./email";

describe("Email Validation", () => {
  test("should return false for an empty string", () => {
    expect(validateEmail("")).toBe(false);
  });

  test("should return true if email contains @", () => {
    expect(validateEmail("test@test.com")).toBe(true);
  });
});
