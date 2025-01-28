import { NextRequest, NextResponse } from "next/server";
import connect from "@/app/lib/db";
import { subSubService } from "@/app/lib/models/ourServices";

export async function GET() {
  await connect();
  const subServices = await subSubService.find();
  return NextResponse.json(subServices, { status: 200 });
}

export async function POST(req: NextRequest) {
    try {
      await connect();
      const requestData = await req.json();
      
      const newSubSubService = new subSubService(requestData);
      await newSubSubService.save();
      return NextResponse.json(newSubSubService, { status: 201 });
    } catch (error:any) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }
  }
  