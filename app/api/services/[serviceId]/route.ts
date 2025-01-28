import { NextRequest, NextResponse } from "next/server";
import connect from "@/app/lib/db";
import { service } from "@/app/lib/models/ourServices";

export async function GET(
  req: NextRequest,
  { params }: { params: { serviceId: string } }
) {
  await connect();

  const serviceId = params.serviceId;
  if (!serviceId) {
    return NextResponse.json(
      { error: "Service ID is required" },
      { status: 400 }
    );
  }

  const serviceData = await service.findById(serviceId);
  if (!serviceData) {
    return NextResponse.json({ error: "Service not found" }, { status: 404 });
  }

  return NextResponse.json(serviceData);
}
