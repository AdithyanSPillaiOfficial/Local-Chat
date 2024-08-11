import { NextResponse } from "next/server";

export async function GET() {
    return NextResponse.json({
        message : 'HELLO',
    })
}

export async function POST(req) {
    const data = await req.json();
    return NextResponse.json({
        msg : data.message
    })
}