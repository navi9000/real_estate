"use client"

import { FC, PropsWithChildren, useState } from "react"
import { Currency, defaultCurrency } from "./model"
import { saveCurrency } from "./server-actions"
import { CurrencyContext } from "./currency-context"
import useSWR from "swr"

type Props = {
  initialValue: Currency
}

const CurrencyProvider: FC<PropsWithChildren<Props>> = ({
  children,
  initialValue,
}) => {
  const [currency, setCurrency] = useState<Currency>(initialValue)
  const { data } = useSWR<{ value: number; currency: Currency }>(
    ["currency_multiplier", currency],
    () =>
      fetch(`http://localhost:3000/api/currencies/${currency}`).then((res) =>
        res.json(),
      ),
    { keepPreviousData: true },
  )

  const onCurrencySelect = async (value: Currency | null) => {
    const payload = value ?? defaultCurrency
    setCurrency(payload)
    saveCurrency(payload)
  }

  return (
    <CurrencyContext.Provider
      value={{
        currency,
        onCurrencySelect,
        multiplier: data ?? null,
      }}
    >
      {children}
    </CurrencyContext.Provider>
  )
}

export default CurrencyProvider
