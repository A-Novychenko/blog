import {NextRequest, NextResponse} from "next/server";

import clientPromise from "@/services/mongodb";

export async function POST(req: Request, res: Response) {
  const client = await clientPromise;
  const db = client.db("db-blog");

  const owner = await req.json();

  const posts = await db.collection("posts").find(owner).toArray();

  return NextResponse.json({status: 200, posts, revalidated: true});
}
