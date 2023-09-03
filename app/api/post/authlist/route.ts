import clientPromise from "@/services/mongodb";
import {NextRequest, NextResponse} from "next/server";

export async function POST(req: Request, res: Response) {
  const client = await clientPromise;
  const db = client.db("db-blog");

  const owner = await req.json();
  console.log("owner", owner);

  const posts = await db.collection("posts").find(owner).toArray();

  console.log("postsDB", posts);

  return NextResponse.json({status: 200, posts, revalidated: true});
}