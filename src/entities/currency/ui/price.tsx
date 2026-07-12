"use client"

import { Currency } from "@/entities/currency/model"
import { type FC, useDeferredValue, useMemo } from "react"
import { useCurrencyContext } from "../use-currency-context"

type Props = {
  price_in_thb: number
}

const formatOuput = (value: number, currency: Currency) => {
  return new Intl.NumberFormat("ru-RU", {
    style: "currency",
    currency,
  }).format(value)
}

const Price: FC<Props> = ({ price_in_thb }) => {
  const { currency, defaultCurrencyMultiplier } = useCurrencyContext()

  const output = defaultCurrencyMultiplier
    ? formatOuput(price_in_thb * defaultCurrencyMultiplier, currency)
    : "-"
  return <p className="font-bold text-lg/5">{output}</p>
}

export default Price
