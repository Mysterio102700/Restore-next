import { NextResponse } from "next/server";
import connect from "@/app/lib/db";
import { subSubService } from "@/app/models/ourServices";

export async function GET() {
  await connect();
  const subSubServices = await subSubService.find();
  return NextResponse.json(subSubServices, { status: 200 });
}

export async function POST(req) {
  try {
    await connect();
    const requestData = await req.json();
    
    const newSubSubService = new subSubService(requestData);
    await newSubSubService.save();
    return NextResponse.json(newSubSubService, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
