import {NextRequest, NextResponse} from "next/server";

import clientPromise from "@/services/mongodb";

export async function POST(req: Request, res: Response) {
  const client = await clientPromise;
  const db = client.db("db-blog");

  const credentials = await req.json();

  const result = await db
    .collection("user")
    .findOne({email: credentials.email});

  if (result) {
    return NextResponse.json(
      {error: "This user already exists"},
      {status: 409}
    );
  }

  const {insertedId} = await db.collection("user").insertOne(credentials);
  const user = await db.collection("user").findOne(insertedId);

  return NextResponse.json({status: 200, data: user});
}
