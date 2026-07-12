import { Currency } from "@/entities/currency/model"
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatPrice({
  value,
  currency,
}: {
  value: number
  currency: Currency
}) {
  return new Intl.NumberFormat("ru-RU", {
    style: "currency",
    currency,
  }).format(value)
}
