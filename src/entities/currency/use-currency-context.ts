import { use } from "react"
import { CurrencyContext } from "./currency-context"

export function useCurrencyContext() {
  const context = use(CurrencyContext)
  if (!context) {
    throw new Error(
      "useCurrencyContext must be called within a CurrencyProvider",
    )
  }
  return context
}
