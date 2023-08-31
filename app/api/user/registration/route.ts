import clientPromise from "@/services/mongodb";
import {NextRequest, NextResponse} from "next/server";

export async function POST(req: Request, res: Response) {
  const client = await clientPromise;
  const db = client.db("db-blog");

  //   console.log("req.body", req.body);

  console.log("!!!!VVVVVV!!!!");

  //   const data = JSON.parse(req.body);
  const credentials = await req.json();

  //   const data = NextRequest;

  console.log("datacredentials", credentials);
  const {insertedId} = await db.collection("user").insertOne(credentials);
  console.log("xxx", insertedId);

  const user = await db.collection("user").findOne(insertedId);
  console.log("userRRRR", user);

  return NextResponse.json({status: 200, data: user});
}
