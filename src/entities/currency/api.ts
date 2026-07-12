import { ROOT_API_URL } from "@/lib/constants"
import { CurrencyMultiplier } from "./currency-context"
import { Currency } from "./model"

export function fetchCurrency(currency: Currency) {
  return fetch(`${ROOT_API_URL}/currencies/${currency}`).then((res) =>
    res.json(),
  ) as Promise<CurrencyMultiplier>
}
