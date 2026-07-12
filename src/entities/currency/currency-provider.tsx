"use client"

import { FC, PropsWithChildren, useState } from "react"
import { Currency, defaultCurrency } from "./model"
import { saveCurrency } from "./server-actions"
import { CurrencyContext } from "./currency-context"

type Props = {
  initialValue: Currency
}

const CurrencyProvider: FC<PropsWithChildren<Props>> = ({
  children,
  initialValue,
}) => {
  const [currency, setCurrency] = useState<Currency>(initialValue)

  const onCurrencySelect = async (value: Currency | null) => {
    const payload = value ?? defaultCurrency
    setCurrency(payload)
    saveCurrency(payload)
  }

  return (
    <CurrencyContext.Provider value={{ currency, onCurrencySelect }}>
      {children}
    </CurrencyContext.Provider>
  )
}

export default CurrencyProvider
