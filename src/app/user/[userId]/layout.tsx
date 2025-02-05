// app/user/[userId]/layout.tsx

import { getServerSession } from "next-auth/next"; // or "next-auth" based on your NextAuth setup
import { redirect } from "next/navigation";
import { authOptions } from "@/lib/authOptions"; // adjust this path based on your configuration

// This is a server component layout
export default async function UserLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Retrieve the session on the server
  const session = await getServerSession(authOptions);

  // If there is no authenticated session, redirect to the homepage (or a login page)
  if (!session) {
    redirect("/");
  }

  // If authenticated, render the children (i.e. the nested pages/components)
  return <>{children}</>;
}
