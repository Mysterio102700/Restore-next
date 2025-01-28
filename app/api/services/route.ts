import { NextResponse } from "next/server";
import connect from "@/app/lib/db";
import { service } from "@/app/lib/models/ourServices";



export const GET = async () => {
  await connect();
  const services = await service.find();
  return NextResponse.json(services);
};

// Handle GET for a specific service


// Handle POST for a specific service
export async function POST(request: Request) {
  await connect();
  const requestData = await request.json();
  const newService = new service(requestData);
  await newService.save();
  return new NextResponse(JSON.stringify(newService), { status: 201 });
}

// Handle PUT for a specific service
export async function PUT(
  req: Request,
  { params }: { params: { serviceId: string } }
) {
  await connect();
  const serviceId = params.serviceId;
  const requestData = await req.json();

  const updatedService = await service.findByIdAndUpdate(
    serviceId,
    requestData,
    { new: true }
  );
  return new NextResponse(JSON.stringify(updatedService));
}
