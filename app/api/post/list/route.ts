import clientPromise from "@/services/mongodb";
import {NextRequest, NextResponse} from "next/server";

export async function GET(req: Request, res: Response) {
  const client = await clientPromise;
  const db = client.db("db-blog");

  const posts = await db.collection("posts").find({}).toArray();

  return NextResponse.json({status: 200, posts});
}
