"use client"

import { Building2 } from "lucide-react"
import { type FC } from "react"
import { Button } from "@/components/ui/button"
import {
  Combobox,
  ComboboxItem,
  ComboboxList,
  ComboboxContent,
  ComboboxInput,
} from "../../../components/ui/combobox"
import { currencyList } from "@/entities/currency/model"
import { useCurrencyContext } from "@/entities/currency/use-currency-context"

const Header: FC = () => {
  const { currency, onCurrencySelect } = useCurrencyContext()

  return (
    <header className="border-b border-slate-200/80 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <Button
            variant="default"
            size="icon"
            className="size-11 rounded-2xl bg-slate-900 p-0 text-white shadow-sm hover:bg-slate-800"
          >
            <Building2 className="size-5" />
          </Button>
        </div>
        <div className="w-[140px] sm:w-[160px]">
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
      </div>
    </header>
  )
}

export default Header
