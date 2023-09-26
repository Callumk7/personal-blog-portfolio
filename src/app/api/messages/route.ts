import { prisma } from "@/lib/clients/prisma";
import { schema } from "@/types/messages";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
	
	const body = await req.json();
	const validSubmission = schema.parse(body);

	const messagePost = await prisma.message.create({
		data: {
			name: validSubmission.name,
			email: validSubmission.email,
			message: validSubmission.message
		}
	})

	const resBody = JSON.stringify(messagePost);
	console.log(resBody);
	return new NextResponse(resBody);
}
