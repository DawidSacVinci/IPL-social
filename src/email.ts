export function validateEmail(email: string): boolean {
  if (!email || email.includes(" ")) return false;

  const atIndex = email.indexOf("@");
  if (atIndex === -1) return false;
  if (atIndex === 0 || atIndex === email.length - 1) return false;

  // On coupe l'email en deux parties : avant et après le @
  const domain = email.substring(atIndex + 1);

  // Règle : le domaine doit contenir un point
  const dotIndex = domain.indexOf(".");
  if (dotIndex === -1) return false;

  // Règle : le point ne doit pas être le dernier caractère
  if (domain.lastIndexOf(".") === domain.length - 1) return false;

  return true;
}
