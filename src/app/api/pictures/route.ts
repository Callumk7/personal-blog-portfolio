import { NextResponse } from "next/server";

export async function GET() {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos/1", {
        headers: {
            "content-type": "application/json",
        },
    });
    const data = await res.json();

    return NextResponse.json({ data });
}