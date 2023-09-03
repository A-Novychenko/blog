import {NextRequest, NextResponse} from "next/server";
import {revalidateTag} from "next/cache";

import clientPromise from "@/services/mongodb";

export async function POST(req: Request, res: Response) {
  const client = await clientPromise;
  const db = client.db("db-blog");

  const posts = await db.collection("posts").find({}).toArray();

  revalidateTag("blog");
  return NextResponse.json({
    status: 200,
    posts,
  });
}
