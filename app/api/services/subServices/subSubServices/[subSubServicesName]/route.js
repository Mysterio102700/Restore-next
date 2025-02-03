import { NextResponse } from "next/server";
import connect from "@/app/lib/db";
import { subSubService } from "@/app/models/ourServices";

export async function GET(req, { params }) {
  await connect();

  const { subSubServicesName } = params;
  if (!subSubServicesName) {
    return NextResponse.json(
      { error: "SubService name is required" },
      { status: 400 }
    );
  }

  const serviceData = await subSubService.findOne({
    title: subSubServicesName,
  });
  if (!serviceData) {
    return NextResponse.json(
      { error: "SubService not found" },
      { status: 404 }
    );
  }

  return NextResponse.json(serviceData);
}
