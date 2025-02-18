import { NextResponse } from "next/server";
import connect from "@/app/lib/db";
import { subService } from "@/app/models/ourServices";
import Fuse from "fuse.js";

export async function GET(req, context) {
  try {
    await connect();

    const { subServicesName } = await context.params || {};

    if (!subServicesName) {
      return NextResponse.json(
        { error: "The sub-service is required." },
        { status: 400 }
      );
    }

    const query = subServicesName.replace(/-/g, " ").toLowerCase();

    const allServices = await subService.find();

    const options = {
      includeScore: true,
      threshold: 0.3,
      keys: ["title"],
    };

    const fuse = new Fuse(allServices, options);

    const results = fuse.search(query);

    if (results.length === 0) {
      return NextResponse.json(
        { error: `No sub-services found for: ${subServicesName}` },
        { status: 404 }
      );
    }

    return NextResponse.json(results[0].item, { status: 200 });
  } catch (error) {
    console.error("Error fetching sub-services:", error);
    return NextResponse.json(
      { error: "An error occurred while fetching sub-services." },
      { status: 500 }
    );
  }
}
