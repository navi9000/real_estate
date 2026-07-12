import { ROOT_API_URL } from "@/lib/constants"
import { Property } from "./model"

export function fetchProperties() {
  return fetch(ROOT_API_URL + "/properties").then((res) =>
    res.json(),
  ) as Promise<Property[]>
}
