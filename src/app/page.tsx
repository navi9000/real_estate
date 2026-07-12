import type { ReactNode } from "react"
import {
  Item,
  ItemGroup,
  ItemTitle,
  ItemDescription,
  ItemContent,
} from "@/components/ui/item"
import { Property } from "@/entities/property/model"
import PropertyCard from "@/entities/property/ui/property-card/property-card"
import { ROOT_API_URL } from "@/lib/constants"

const Home = async (): Promise<ReactNode> => {
  const res = await fetch(ROOT_API_URL + "/properties")
  const propertyList = (await res.json()) as Property[]

  return (
    <main className="flex-1 px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-8">
        <section className="space-y-4">
          <Item
            variant="muted"
            className="rounded-[1.25rem] border border-slate-200 bg-white/80 p-4 shadow-sm"
          >
            <ItemContent>
              <ItemTitle className="text-sm text-slate-500 uppercase font-semibold tracking-[0.25em]">
                Объекты недвижимости
              </ItemTitle>
              <ItemDescription className="text-2xl text-slate-900 font-semibold">
                Рекомендуемое
              </ItemDescription>
            </ItemContent>
          </Item>
          <ItemGroup className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {propertyList.map((property) => (
              <PropertyCard key={property.property_name} property={property} />
            ))}
          </ItemGroup>
        </section>
      </div>
    </main>
  )
}

export default Home
