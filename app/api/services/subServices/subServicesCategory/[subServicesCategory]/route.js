import { NextResponse } from "next/server";
import connect from "@/app/lib/db";
import { subSubService } from "@/app/models/ourServices";

export async function GET(req, context) {
  try {
    await connect();

    const { subServicesCategory } = context.params;

    if (!subServicesCategory) {
      return NextResponse.json(
        { error: "The sub-service category is required." },
        { status: 400 }
      );
    }

    const serviceData = await subSubService.find({
      subService: subServicesCategory,
    });

    if (!serviceData || serviceData.length === 0) {
      return NextResponse.json(
        { error: `No sub-services found for category: ${subServicesCategory}` },
        { status: 404 }
      );
    }

    return NextResponse.json(serviceData, { status: 200 });
  } catch (error) {
    console.error("Error fetching sub-services:", error);
    return NextResponse.json(
      { error: "An error occurred while fetching sub-services." },
      { status: 500 }
    );
  }
}
