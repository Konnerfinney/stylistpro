// src/lib/auth.ts

import { NextAuthOptions } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    async session({ session, token }) {
      // Attach only necessary user information to the session
      // Do not attach the access token
      console.log(session);
      session.user = token?.user as any;
      return session;
    },

    async jwt({ token, account }){
      //console.log(token);
      if (account){
        token.accessToken = account.access_token;
      }
      return token;
    }
  },
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
};
