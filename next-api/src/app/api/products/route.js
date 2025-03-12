import { connectionStr } from "@/lib/db";
import mongoose from "mongoose";
import { NextResponse } from "next/server";
import { Product } from "@/lib/model/products";
import RenderResult from "next/dist/server/render-result";
import { POST } from "../users/route";

export async function GET() {
  let data = [];
  try {
    await mongoose.connect(connectionStr);
    data = await Product.find();
  } catch (err) {
    data = { success: false };
  }
  return NextResponse.json({ result: data, success: true });
}

