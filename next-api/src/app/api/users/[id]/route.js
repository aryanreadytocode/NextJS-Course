import { user } from "@/utils/db";
import { NextResponse } from "next/server";

export async function GET(req, content) {
    const param = await (content.params)
    var data = user.filter((item) => 
        item.id == param.id
    )
    data = data.length>0 ? data : {"result": "No Data", "success": false} 
    console.log(data)
    return NextResponse.json(data, {status:200})
}