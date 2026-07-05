export type WaveId = "coastal-180" | "marathon-42" | "duo-orbit";

export interface RegistrationData {
  wave?: WaveId;
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  emergencyName?: string;
  emergencyPhone?: string;
  teamName?: string;
  partnerName?: string;
  jerseySize?: string;
  transportPackage?: boolean;
  merchBundle?: boolean;
  paymentMethod?: string;
  agreeTerms?: boolean;
}

const STORAGE_KEY = "orbit-registration";

export function getRegistrationData(): RegistrationData {
  if (typeof window === "undefined") return {};
  try {
    const raw = sessionStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as RegistrationData) : {};
  } catch {
    return {};
  }
}

export function saveRegistrationData(data: Partial<RegistrationData>) {
  if (typeof window === "undefined") return;
  const current = getRegistrationData();
  sessionStorage.setItem(
    STORAGE_KEY,
    JSON.stringify({ ...current, ...data }),
  );
}

export function clearRegistrationData() {
  if (typeof window === "undefined") return;
  sessionStorage.removeItem(STORAGE_KEY);
}
