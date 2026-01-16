export function validateEmail(email: string): boolean {
  if (email === "") return false;
  // Vérification simple du @
  return email.includes("@");
}
