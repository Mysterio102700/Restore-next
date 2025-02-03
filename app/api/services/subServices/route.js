import { NextResponse } from "next/server";
import connect from "@/app/lib/db";
import { subService } from "@/app/models/ourServices";

export async function GET() {
  await connect();
  const subServices = await subService.find();
  return NextResponse.json(subServices, { status: 200 });
}

export async function POST(req) {
  await connect();
  const requestData = await req.json();
  const newSubService = new subService(requestData);
  await newSubService.save();
  return NextResponse.json(newSubService, { status: 201 });
}
