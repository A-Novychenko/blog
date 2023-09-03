import clientPromise from "@/services/mongodb";
import {revalidateTag} from "next/cache";
import {NextRequest, NextResponse} from "next/server";

export async function POST(req: Request, res: Response) {
  const client = await clientPromise;
  const db = client.db("db-blog");

  const posts = await db.collection("posts").find({}).toArray();

  revalidateTag("blog"); // Purge all data with the 'blog' tag
  return NextResponse.json({
    status: 200,
    posts,
  });
}
// import clientPromise from "@/services/mongodb";
// import {revalidateTag} from "next/cache";
// import {NextRequest, NextResponse} from "next/server";

// export async function GET(req: Request, res: Response) {
//   const client = await clientPromise;
//   const db = client.db("db-blog");

//   const posts = await db.collection("posts").find({}).toArray();

//   revalidateTag("blog"); // Purge all data with the 'blog' tag
//   return NextResponse.json({
//     status: 200,
//     posts,
//   });
// }
