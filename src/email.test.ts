import { validateEmail } from "./email";

describe("Email Validation", () => {
  test("should return false for an empty string", () => {
    expect(validateEmail("")).toBe(false);
  });

  test("should return true if email contains @", () => {
    expect(validateEmail("test@test.com")).toBe(true);
  });

  test("should return false if email contains spaces", () => {
    expect(validateEmail("te st@test.com")).toBe(false);
  });

  test("should return false if no text before @", () => {
    expect(validateEmail("@test.com")).toBe(false);
  });

  test("should return false if no text after @", () => {
    expect(validateEmail("user@")).toBe(false);
  });

  test("should return false if domain has no dot", () => {
    expect(validateEmail("user@domaincom")).toBe(false);
  });

  test("should return false if dot is the last character", () => {
    expect(validateEmail("user@domain.com.")).toBe(false);
  });

  test("should return true for valid email with dot", () => {
    expect(validateEmail("user@domain.com")).toBe(true);
  });
});
