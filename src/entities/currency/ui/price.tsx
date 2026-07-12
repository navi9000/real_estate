"use client"

import { type FC } from "react"
import { Item, ItemDescription, ItemTitle } from "@/components/ui/item"
import { useCurrencyContext } from "../use-currency-context"

type Props = {
  price_in_thb: number
}

const Price: FC<Props> = ({ price_in_thb }) => {
  const { displayPrice } = useCurrencyContext()

  return (
    <Item
      variant="muted"
      className="flex items-baseline justify-between gap-2 rounded-2xl border border-slate-100 bg-slate-50 px-3 py-2"
    >
      <ItemDescription className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-500">
        Цена
      </ItemDescription>
      <ItemTitle className="text-lg font-semibold text-slate-900">
        {displayPrice(price_in_thb)}
      </ItemTitle>
    </Item>
  )
}

export default Price
