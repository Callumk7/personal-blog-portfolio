import prisma from "@/db/client";
import { NextRequest, NextResponse } from "next/server";

export async function PATCH(
  request: NextRequest,
  { params }: { params: { postId: number } }
) {
  const updatePost = await prisma.post.update({
    where: {
      id: Number(params.postId),
    },
    data: {
      likes: {
        increment: 1,
      },
    },
  });
  console.log(`${updatePost.title} now has ${updatePost.likes} likes`);
  return new NextResponse(updatePost.title);
}
