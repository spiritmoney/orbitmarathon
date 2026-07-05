/** Generate a unique runner ID after jersey payment */
export function generateRunnerId(): string {
  const suffix = Date.now().toString(36).toUpperCase().slice(-6);
  return `ORB-${suffix}`;
}
