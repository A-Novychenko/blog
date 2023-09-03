import {NextRequest, NextResponse} from "next/server";
import {ObjectId} from "mongodb";

import clientPromise from "@/services/mongodb";

export async function PUT(req: Request, res: Response) {
  const client = await clientPromise;
  const db = client.db("db-blog");

  const {_id: id, data} = await req.json();

  const _id = {_id: new ObjectId(id)};

  const post = await db.collection("posts").findOne(_id);

  const newData = [
    ...post?.comments,
    {comment: data?.comment, owner: data?.owner},
  ];

  const newPost = await db
    .collection("posts")
    .findOneAndUpdate(_id, {$set: {comments: newData}});

  return NextResponse.json({status: 201, data: newPost});
}
