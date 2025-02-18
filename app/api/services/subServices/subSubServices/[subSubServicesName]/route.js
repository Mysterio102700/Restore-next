import { NextResponse } from "next/server";
import connect from "@/app/lib/db";
import { subSubService } from "@/app/models/ourServices";
import Fuse from "fuse.js";

export async function GET(req, { params }) {
  try {
    await connect();

    const { subSubServicesName } = await params;
    if (!subSubServicesName) {
      return NextResponse.json(
        { error: "SubService name is required" },
        { status: 400 }
      );
    }

    const query = subSubServicesName.replace(/-/g, " ").toLowerCase();

    const allSubServices = await subSubService.find();

    const options = {
      includeScore: true,
      threshold: 0.3,
      keys: ["title"],
    };

    const fuse = new Fuse(allSubServices, options);

    const results = fuse.search(query);

    if (results.length === 0) {
      return NextResponse.json(
        { error: "SubService not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(results[0].item);
  } catch (error) {
    console.error("Error fetching sub-service:", error);
    return NextResponse.json(
      { error: "An error occurred while fetching sub-services." },
      { status: 500 }
    );
  }
}


export async function PATCH(req, { params }) {
  try {
    await connect();

    const { subSubServicesName } = params;
    if (!subSubServicesName) {
      return NextResponse.json(
        { error: "SubService name is required" },
        { status: 400 }
      );
    }

    const query = subSubServicesName.replace(/-/g, " ").toLowerCase();
    const { causes } = await req.json();

    if (!causes || !Array.isArray(causes)) {
      return NextResponse.json(
        { error: "Causes array is required" },
        { status: 400 }
      );
    }

    const updatedSubService = await subSubService.findOneAndUpdate(
      { title: new RegExp(`^${query}$`, "i") }, // Case-insensitive match
      { $set: { Causes: causes } }, // Updates the Causes array
      { new: true } // Returns updated document
    );

    if (!updatedSubService) {
      return NextResponse.json(
        { error: "SubService not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(updatedSubService);
  } catch (error) {
    console.error("Error updating Causes:", error);
    return NextResponse.json(
      { error: "An error occurred while updating Causes." },
      { status: 500 }
    );
  }
}
