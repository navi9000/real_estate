import { type NextPage } from "next"
import {
  Item,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemHeader,
  ItemTitle,
} from "@/components/ui/item"
import { Property } from "@/entities/property/model"
import Image from "next/image"
import Price from "@/components/price/price"

const Home: NextPage = async () => {
  const res = await fetch("http://localhost:3000/api/properties")
  const propertyList = (await res.json()) as Property[]

  return (
    <main>
      <ItemGroup className="grid grid-cols-3">
        {propertyList.map((property) => (
          <Item key={property.property_name} variant="outline">
            <ItemHeader className="h-[200px] w-auto relative">
              <Image
                src={property.img_url}
                alt="property image"
                fill
                className="rounded object-cover"
              />
            </ItemHeader>
            <ItemContent>
              <ItemTitle>{property.property_name}</ItemTitle>
              <ItemDescription>
                Площадь: {property.area_sq_m}м<sup>2</sup>
              </ItemDescription>
              <Price price_in_thb={property.price_in_thb} />
            </ItemContent>
          </Item>
        ))}
      </ItemGroup>
    </main>
  )
}

export default Home
