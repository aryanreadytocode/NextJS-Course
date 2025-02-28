import { user } from "@/utils/db";
import { NextResponse } from "next/server";

export async function GET(req, content) {
    const param = await (content.params)
    const data = user.filter((item) => 
        item.id == param.id
    )
    console.log(data)
    return NextResponse.json(data, {status:200})
}