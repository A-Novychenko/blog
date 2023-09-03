import {NextRequest, NextResponse} from "next/server";

import clientPromise from "@/services/mongodb";

export async function POST(req: Request, res: Response) {
  const client = await clientPromise;
  const db = client.db("db-blog");

  const data = await req.json();

  const result = await db
    .collection("user")
    .findOne({email: data.email, password: data.password});

  if (!result) {
    return NextResponse.json(
      {error: "email or password is not correct"},
      {status: 401}
    );
  }

  const user = await db.collection("user").findOne(data);

  return NextResponse.json({status: 200, data: user});
}
