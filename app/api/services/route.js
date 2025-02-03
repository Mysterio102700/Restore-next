import { NextResponse } from "next/server";
import connect from "@/app/lib/db";
import { service } from "@/app/models/ourServices";

export const GET = async () => {
  await connect();
  const services = await service.find();
  return NextResponse.json(services);
};

export async function POST(request) {
  await connect();
  const requestData = await request.json();
  const newService = new service(requestData);
  await newService.save();
  return new NextResponse(JSON.stringify(newService), { status: 201 });
}
