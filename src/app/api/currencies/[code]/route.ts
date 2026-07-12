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
  let multiplier
  switch (code) {
    case "THB":
      multiplier = 1
      break
    case "USD":
      multiplier = 0.0286
      break
    case "EUR":
      multiplier = 0.0263
      break
    case "RUB":
      multiplier = 2.57
      break
    default:
      multiplier = 0
      exhaustiveCheck(code)
  }

  return Response.json({ multiplier })
}
