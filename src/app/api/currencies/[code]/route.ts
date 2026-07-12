import { isCurrency } from "@/entities/currency/model"
import { type NextRequest } from "next/server"

export function exhaustiveCheck(input: never) {
  console.error(`Unexpected value: ${input}`)
  return input
}

export async function GET(
  _: NextRequest,
  ctx: RouteContext<"/api/currencies/[code]">,
) {
  const { code } = await ctx.params
  if (!isCurrency(code)) {
    return Response.json({ message: "Currency not found" }, { status: 404 })
  }
  let value
  switch (code) {
    case "THB":
      value = 1
      break
    case "USD":
      value = 0.0286
      break
    case "EUR":
      value = 0.0263
      break
    case "RUB":
      value = 2.57
      break
    default:
      value = 0
      exhaustiveCheck(code)
  }

  return Response.json({ value, currency: code })
}
