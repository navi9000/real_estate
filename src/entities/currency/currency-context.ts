import { createContext } from "react"
import { Currency } from "./model"

export type CurrencyMultiplier = {
  value: number
  currency: Currency
}

export type CurrencyContextData = {
  currency: Currency
  onCurrencySelect: (value: Currency | null) => Promise<void>
  multiplier: CurrencyMultiplier | null
}

export const CurrencyContext = createContext<CurrencyContextData | null>(null)
