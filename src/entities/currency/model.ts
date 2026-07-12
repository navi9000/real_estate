export const currencyList = ["THB", "USD", "EUR", "RUB"] as const

export type Currency = (typeof currencyList)[number]
export const defaultCurrency: Currency = "THB"

export function isCurrency(input: unknown): input is Currency {
  return currencyList.some((item) => item === input)
}
