"use client"

import { useState, type FC } from "react"
import {
  Combobox,
  ComboboxItem,
  ComboboxList,
  ComboboxContent,
  ComboboxInput,
} from "../ui/combobox"
import {
  type Currency,
  currencyList,
  defaultCurrency,
} from "@/entities/currency/model"
import { setCurrency } from "@/entities/currency/server-actions"

type Props = {
  initialCurrencyValue: Currency
}

const Header: FC<Props> = ({ initialCurrencyValue }) => {
  const [value, setValue] = useState<Currency>(initialCurrencyValue)

  const onValueChange = (value: Currency | null) => {
    const payload = value ?? defaultCurrency
    setValue(payload)
    setCurrency(payload)
  }

  return (
    <header>
      <div className="w-[100px] ml-auto">
        <Combobox
          items={currencyList}
          value={value}
          onValueChange={onValueChange}
        >
          <ComboboxInput />
          <ComboboxContent>
            <ComboboxList>
              {(item) => (
                <ComboboxItem key={item} value={item}>
                  {item}
                </ComboboxItem>
              )}
            </ComboboxList>
          </ComboboxContent>
        </Combobox>
      </div>
    </header>
  )
}

export default Header
