import { user } from "@/utils/db";
import { NextResponse } from "next/server";

export function GET() {
    const data = user;
    return NextResponse.json(data, {status:200})
}

export async function POST(request) {
    let payload = await request.json();
    if(!payload.name || !payload.email || !payload.age) {
        return NextResponse.json({result: "Data not found"}, {status:400})
    }
    return NextResponse.json({result: "Data saved success"}, {status:200})
}

