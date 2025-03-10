import { user } from "@/utils/db";
import { NextResponse } from "next/server";

export async function GET(req, content) {
    const userData = user.filter((item) =>item.id == content.params.id)
    return NextResponse.json(
        userData.length==0?{result:"No Data Found", success: false}:{result:userData[0], success:true},
        {status:200}
    )
}

export async function PUT(request, content) {
    let payload = await request.json();
    payload.id = content.params.id;
    if(!payload.id || !payload.name || !payload.email || !payload.age) {
        return NextResponse.json({result: "Request data is not valid", success: false}, {status: 400})
    }
    return NextResponse.json({result: payload, success: true}, {status: 200})

}