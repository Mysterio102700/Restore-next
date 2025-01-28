import { NextRequest, NextResponse } from "next/server";
import connect from "@/app/lib/db";
import { subService } from "@/app/lib/models/ourServices";

export async function GET(
  req: NextRequest,
  { params }: { params: { subServicesName: string } }
) {
  await connect();

  const { subServicesName } = params  ;
  if (!subServicesName) {
    return NextResponse.json(
      { error: "SubService name is required" },
      { status: 400 }
    );
  }

  const serviceData = await subService.findOne({ title: subServicesName });
  if (!serviceData) {
    return NextResponse.json(
      { error: "SubService not found" },
      { status: 404 }
    );
  }

  return NextResponse.json(serviceData);
}
