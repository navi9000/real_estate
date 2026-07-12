import { createContext } from "react"
import { Currency } from "./model"

export type CurrencyContextData = {
  currency: Currency
  onCurrencySelect: (value: Currency | null) => Promise<void>
  defaultCurrencyMultiplier: number | null
}

export const CurrencyContext = createContext<CurrencyContextData | null>(null)
