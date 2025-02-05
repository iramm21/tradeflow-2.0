"use client";

import { useState } from "react";
import { signIn, getSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setErrorMsg("");

    // Call signIn with redirect set to false
    const res = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    // If an error occurs, set an error message.
    if (res?.error) {
      setErrorMsg("Invalid credentials. Please try again.");
    } else {
      // Retrieve the session so we can get the user ID.
      const session = await getSession();
      if (session?.user?.id) {
        router.push(`/user/${session.user.id}/dashboard`);
      } else {
        // Fallback redirection if, for some reason, the user id is missing.
        router.push("/");
      }
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md bg-white p-4 md:p-6 rounded shadow-lg">
        <h1 className="text-2xl md:text-3xl font-bold text-center mb-4">
          Log In
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700 mb-1">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-1">Password</label>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          {errorMsg && (
            <p className="text-red-500 text-sm md:text-base">{errorMsg}</p>
          )}
          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors text-sm md:text-base"
          >
            Log In
          </button>
        </form>
        <div className="text-center mt-4">
          <p className="text-xs md:text-sm text-gray-600">
            Don&apos;t have an account?{" "}
            <Link
              href="/auth/register"
              className="text-blue-600 hover:underline"
            >
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
