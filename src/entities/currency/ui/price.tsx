"use client"

import { Currency } from "@/entities/currency/model"
import { type FC } from "react"
import { Item, ItemDescription, ItemTitle } from "@/components/ui/item"
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
  const { multiplier } = useCurrencyContext()

  console.log({ multiplier })

  const output = multiplier
    ? formatOuput(price_in_thb * multiplier.value, multiplier.currency)
    : "-"
  return (
    <Item
      variant="muted"
      className="flex items-baseline justify-between gap-2 rounded-2xl border border-slate-100 bg-slate-50 px-3 py-2"
    >
      <ItemDescription className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-500">
        Цена
      </ItemDescription>
      <ItemTitle className="text-lg font-semibold text-slate-900">
        {output}
      </ItemTitle>
    </Item>
  )
}

export default Price
