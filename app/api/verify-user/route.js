import { NextResponse } from "next/server";

export async function POST(req) {
    const { user } = await req.json();
    return NextResponse.json({ user });
}
