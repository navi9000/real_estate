import type { ReactNode } from "react"
import {
  Item,
  ItemContent,
  ItemGroup,
  ItemHeader,
  ItemTitle,
} from "@/components/ui/item"
import { Property } from "@/entities/property/model"
import Image from "next/image"
import Price from "@/entities/currency/ui/price"
import { Ruler } from "lucide-react"

const Home = async (): Promise<ReactNode> => {
  const res = await fetch("http://localhost:3000/api/properties")
  const propertyList = (await res.json()) as Property[]

  return (
    <main className="flex-1 px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-8">
        <section className="space-y-4">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">
                Объекты недвижимости
              </p>
              <h2 className="text-2xl font-semibold text-slate-900">
                Рекомендуемое
              </h2>
            </div>
          </div>

          <ItemGroup className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {propertyList.map((property) => (
              <Item
                key={property.property_name}
                variant="outline"
                className="gap-0 group overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white p-0 shadow-[0_10px_40px_-20px_rgba(15,23,42,0.3)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_55px_-20px_rgba(15,23,42,0.4)]"
              >
                <ItemHeader className="relative h-[220px] w-full overflow-hidden rounded-b-none">
                  <Image
                    src={property.img_url}
                    alt="property image"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/10 to-transparent" />
                </ItemHeader>
                <ItemContent className="grid gap-3 p-5">
                  <ItemTitle className="min-h-[3.75rem] line-clamp-2 text-lg leading-6 text-slate-900">
                    {property.property_name}
                  </ItemTitle>
                  <div className="flex items-center gap-2 text-sm text-slate-600">
                    <Ruler className="size-4 text-sky-600" />
                    <span>Площадь: {property.area_sq_m} м²</span>
                  </div>
                  <div className="mt-auto rounded-2xl border border-slate-100 bg-slate-50 px-3 py-2">
                    <Price price_in_thb={property.price_in_thb} />
                  </div>
                </ItemContent>
              </Item>
            ))}
          </ItemGroup>
        </section>
      </div>
    </main>
  )
}

export default Home
