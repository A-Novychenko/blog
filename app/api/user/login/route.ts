import clientPromise from "@/services/mongodb";
import {NextRequest, NextResponse} from "next/server";

export async function POST(req: Request, res: Response) {
  const client = await clientPromise;
  const db = client.db("db-blog");

  //   console.log("req.body", req.body);

  console.log("!!!!VVVVVV!!!!");

  //   const data = JSON.parse(req.body);
  const data = await req.json();

  //   const data = NextRequest;

  console.log("data", data.email);

  const result = await db
    .collection("user")
    .findOne({email: data.email, password: data.password});
  console.log("userLLLLL", result);

  if (!result) {
    return NextResponse.json({
      status: 401,
      message: "email or password is not correct",
      data: null,
    });
  }

  const user = await db.collection("user").findOne(data);
  console.log("user", user);

  return NextResponse.json({status: 200, data: user});
}
