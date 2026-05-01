import { type ClassValue, clsx } from "clsx";

export function cn(...inputs: ClassValue[]): string {
  return clsx(inputs);
}

export function formatPhone(phone: string): string {
  return phone.replace(/\s/g, "");
}
