export function validateEmail(email: string): boolean {
  if (!email || email.includes(" ")) return false;

  const atIndex = email.indexOf("@");
  if (atIndex === -1) return false; // Pas de @

  // Si @ est au début (index 0) ou à la fin (dernier index)
  if (atIndex === 0 || atIndex === email.length - 1) return false;

  return true;
}
