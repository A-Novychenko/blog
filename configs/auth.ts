import type {AuthOptions} from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const {NEXTAUTH_URL} = process.env;

export const authConfig: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      id: "login",
      credentials: {
        email: {label: "Email", type: "text", placeholder: "Email"},
        password: {label: "Password", type: "password"},
      },
      async authorize(credentials, req) {
        const {email, password}: {name: string; password: string} | any =
          credentials;

        try {
          const res = await fetch(`${NEXTAUTH_URL}/api/user/login`, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({email, password}),
          });

          const user = await res.json();

          if (user.status === 200) {
            return user;
          }

          return null;
        } catch (e) {
          console.log("e", e);
        }
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/login",
  },
  callbacks: {
    async jwt({token, user}) {
      return {...token, ...user};
    },

    async signIn({user}) {
      if (user) {
        return true;
      }
      return false;
    },

    async session({session, token}) {
      session.user = token as any;

      return session;
    },
  },
};
