import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const convertAmountFromMillUnits = (amount: number) => {
  return amount / 1000;
};

export const convertAmountToMilliUnits = (amount: number) => {
  return Math.round(amount * 100);
};
