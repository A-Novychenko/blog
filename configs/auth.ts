import type {AuthOptions} from "next-auth";

import CredentialsProvider from "next-auth/providers/credentials";

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

        console.log("credentials", credentials);

        try {
          const res = await fetch("http://localhost:3000/api/user/login", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({email, password}),
          });

          // console.log("res!!!!!!", res);
          const user = await res.json();

          console.log("userCONFIG", user);

          if (user.status === 200) {
            return user;
          }

          return null;
        } catch (e) {
          console.log("e", e);
        }
      },
    }),
    CredentialsProvider({
      name: "Credentials",
      id: "registration",
      credentials: {
        email: {label: "Email", type: "text", placeholder: "Email"},
        password: {label: "Password", type: "password"},
        role: {label: "Role", type: "role"},
      },
      async authorize(credentials, req) {
        const {email, password, role}: {name: string; password: string} | any =
          credentials;

        console.log("credentials", credentials);

        try {
          const res = await fetch(
            "http://localhost:3000/api/user/registration",
            {
              method: "POST",
              headers: {"Content-Type": "application/json"},
              body: JSON.stringify({email, password, role}),
            }
          );

          const user = await res.json();

          console.log("user", user);

          if (res.status === 200 && user) {
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
