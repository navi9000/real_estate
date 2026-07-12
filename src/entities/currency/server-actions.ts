"use server"

import { cookies } from "next/headers"
import { Currency, defaultCurrency, isCurrency } from "./model"

const CURRENCY_COOKIE_NAME = "real-estate::currency"

export async function readCurrency(): Promise<Currency> {
  const cookieValue = (await cookies()).get(CURRENCY_COOKIE_NAME)?.value

  if (isCurrency(cookieValue)) {
    return cookieValue
  }
  return defaultCurrency
}

export async function saveCurrency(value: Currency) {
  ;(await cookies()).set(CURRENCY_COOKIE_NAME, value)
}
