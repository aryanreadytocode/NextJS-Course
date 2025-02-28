import { user } from "@/utils/db";
import { NextResponse } from "next/server";

export async function GET(req, content) {
    const userData = user.filter((item) =>item.id == content.params.id)
    return NextResponse.json(
        userData.length==0?{result:"No Data Found", success: false}:{result:userData[0], success:true},
        {status:200}
    )
}