import { DefaultSession } from "next-auth";

declare module "next-auth" {
  /**
   * Returned by `getSession`, `useSession`, and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user: {
      id: string;
    } & DefaultSession["user"];
  }

  interface User {
    id: string;
  }
}
