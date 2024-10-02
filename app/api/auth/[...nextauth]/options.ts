import { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "@/lib/prisma";

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.CLIENT_ID!,
      clientSecret: process.env.CLIENT_SECRET!,
    }),
    // ...add more providers here
  ],
  callbacks: {
    session({ session, user }) {
      if (session?.user) {
        session.user.id = user.id;
      }
      return session; // The return type will match the one returned in `useSession()`
    },
  },
};

export default authOptions;
