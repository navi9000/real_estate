"use client"

import { Currency } from "@/entities/currency/model"
import { type FC } from "react"
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
  return (
    <div className="flex items-baseline justify-between gap-2">
      <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-500">
        Цена
      </span>
      <p className="text-lg font-semibold text-slate-900">{output}</p>
    </div>
  )
}

export default Price
