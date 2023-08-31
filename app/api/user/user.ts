// import clientPromise from "@/services/mongodb";
// import {NextResponse} from "next/server";

// export default async function POST(req: any, res: any) {
//   const client = await clientPromise;
//   const db = client.db("db-blog");

//   console.log("req.body", req.body);

//   const data = JSON.parse(req.body);
//   const user = await db.collection("user").insertOne(data);
//   console.log("user", user);

//   return NextResponse.json({status: 200, data: user});
// }
// import clientPromise from "@/services/mongodb";

// export default async function handler(req: any, res: any) {
//   const client = await clientPromise;
//   const db = client.db("db-blog");
//   switch (req.method) {
//     case "POST":
//       const bodyObject = JSON.parse(req.body);
//       const newUser = await db.collection("user").insertOne(bodyObject);
//       res.json(newUser);
//       break;
//     case "GET":
//       const user = JSON.parse(req.body);
//       const allPosts = await db.collection("user").find({}).toArray();
//       res.json({status: 200, data: allPosts});
//       break;
//   }
// }

// export default async function handler(req: any, res: any) {
//   try {
//     const client = await clientPromise;
//     const db = client.db("db-blog");

//     const movies = await db
//       .collection("posts")
//       .find({})
//       .sort({metacritic: -1})
//       .limit(10)
//       .toArray();

//     res.json(movies);
//   } catch (e) {
//     console.error(e);
//   }
// }
// export default async function handler(req: any, res: any) {
//   const client = await clientPromise;
//   const db = client.db("nextjs-mongodb-demo");
//   switch (req.method) {
//     case "POST":
//       let bodyObject = JSON.parse(req.body);
//       let myPost = await db.collection("posts").insertOne(bodyObject);
//       res.json(myPost.ops[0]);
//       break;
//     case "GET":
//       const allPosts = await db.collection("allPosts").find({}).toArray();
//       res.json({status: 200, data: allPosts});
//       break;
//   }
// }
