"use client"

import { type FC } from "react"
import {
  Combobox,
  ComboboxItem,
  ComboboxList,
  ComboboxContent,
  ComboboxInput,
} from "../ui/combobox"
import { currencyList } from "@/entities/currency/model"
import { useCurrencyContext } from "@/entities/currency/use-currency-context"

const Header: FC = () => {
  const { currency, onCurrencySelect } = useCurrencyContext()

  return (
    <header>
      <div className="w-[100px] ml-auto">
        <Combobox
          items={currencyList}
          value={currency}
          onValueChange={onCurrencySelect}
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
