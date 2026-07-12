"use client"

import { Currency } from "@/entities/currency/model"
import { FC } from "react"

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
  return (
    <p className="font-bold text-lg/5">{formatOuput(price_in_thb, "THB")}</p>
  )
}

export default Price
