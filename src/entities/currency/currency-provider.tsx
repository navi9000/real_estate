"use client"

import { FC, PropsWithChildren, useState } from "react"
import { Currency, defaultCurrency } from "./model"
import { saveCurrency } from "./server-actions"
import { CurrencyContext, type CurrencyMultiplier } from "./currency-context"
import useSWR from "swr"
import { formatPrice } from "@/lib/utils"
import { ROOT_API_URL } from "@/lib/constants"

type Props = {
  initialValue: Currency
}

const CurrencyProvider: FC<PropsWithChildren<Props>> = ({
  children,
  initialValue,
}) => {
  const [currency, setCurrency] = useState<Currency>(initialValue)
  const { data } = useSWR<CurrencyMultiplier>(
    ["currency_multiplier", currency],
    () =>
      fetch(`${ROOT_API_URL}/currencies/${currency}`).then((res) => res.json()),
    { keepPreviousData: true },
  )

  const onCurrencySelect = async (value: Currency | null) => {
    const payload = value ?? defaultCurrency
    setCurrency(payload)
    saveCurrency(payload)
  }

  const displayPrice = (priceInTBH: number) => {
    return data
      ? formatPrice({
          value: priceInTBH * data.value,
          currency: data.currency,
        })
      : "-"
  }

  return (
    <CurrencyContext.Provider
      value={{
        currency,
        onCurrencySelect,
        displayPrice,
      }}
    >
      {children}
    </CurrencyContext.Provider>
  )
}

export default CurrencyProvider
