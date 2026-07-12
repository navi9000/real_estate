import type { ReactNode } from "react"
import { ItemGroup } from "@/components/ui/item"
import { Property } from "@/entities/property/model"
import PropertyCard from "@/components/property-card/property-card"

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
              <PropertyCard key={property.property_name} property={property} />
            ))}
          </ItemGroup>
        </section>
      </div>
    </main>
  )
}

export default Home
