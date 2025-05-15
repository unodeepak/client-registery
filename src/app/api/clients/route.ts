import { NextResponse } from "next/server";
import { clients } from "@/data/clients"; // .ts file with dummy array

export async function GET() {
  return NextResponse.json(clients);
}
