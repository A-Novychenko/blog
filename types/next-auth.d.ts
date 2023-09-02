import NextAuth from "next-auth/next";

declare module "next-auth" {
  interface Session {
    user: {
      status: string;
      data: UserData;
    };
  }
}

interface UserData {
  _id: string;
  email: string;
  password: string;
  role: string;
}
