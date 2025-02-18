import { NextResponse } from "next/server";
import connect from "@/app/lib/db";
import { subSubService } from "@/app/models/ourServices";
import Fuse from "fuse.js";

export async function GET(req, context) {
  try {
    await connect();

    const { subServicesCategory } = await context.params;

    if (!subServicesCategory) {
      return NextResponse.json(
        { error: "The sub-service category is required." },
        { status: 400 }
      );
    }

    // Normalize the input query (replace hyphens with spaces, make it lowercase)
    const query = subServicesCategory.replace(/-/g, " ").toLowerCase();

    // Fetch all sub-sub-service data
    const allSubServices = await subSubService.find();

    // Fuse.js options for fuzzy search
    const options = {
      includeScore: true,
      threshold: 0.3, // Controls fuzziness, can be adjusted
      keys: ["subService"], // Searching in the `subService` field
    };

    // Initialize Fuse.js with the data and options
    const fuse = new Fuse(allSubServices, options);

    // Perform the fuzzy search
    const results = fuse.search(query);

    if (results.length === 0) {
      return NextResponse.json(
        { error: `No sub-services found for category: ${subServicesCategory}` },
        { status: 404 }
      );
    }

    // Return the results (all matching items)
    return NextResponse.json(results.map(result => result.item), { status: 200 });

  } catch (error) {
    console.error("Error fetching sub-services:", error);
    return NextResponse.json(
      { error: "An error occurred while fetching sub-services." },
      { status: 500 }
    );
  }
}
