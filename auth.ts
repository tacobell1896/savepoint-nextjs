import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import { Pool } from "@neondatabase/serverless";
import PostgresAdapter from "@auth/pg-adapter";

export const { handlers, signIn, signOut, auth } = NextAuth(() => {
  callbacks: {
    authorized: async ({ auth }) => {
      return !!auth;
    };
  }
  const pool = new Pool({ connectionString: process.env.DATABASE_URL });
  return {
    adapter: PostgresAdapter(pool),
    providers: [GitHub],
  };
});
