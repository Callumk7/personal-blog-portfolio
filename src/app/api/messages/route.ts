import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
	// The body of the request will contain all the information that we need.
	// We are going to do validation on the client side, but we shall ensure that
	// we validate here as well for good practice
	
	const body = await req.json();
	console.log(body);

	return new NextResponse(body);
}
