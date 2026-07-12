import { dummyData } from "./data"

export async function GET() {
  return Response.json(dummyData)
}
