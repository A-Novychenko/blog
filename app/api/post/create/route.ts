import {NextRequest, NextResponse} from "next/server";

import clientPromise from "@/services/mongodb";

export async function POST(req: Request, res: Response) {
  const client = await clientPromise;
  const db = client.db("db-blog");

  const data = await req.json();

  const {insertedId} = await db
    .collection("posts")
    .insertOne({...data, comments: []});

  const post = await db.collection("posts").findOne(insertedId);

  return NextResponse.json({status: 201, data: post});
}
