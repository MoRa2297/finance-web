"use client";

import { useState } from "react";
import Link from "next/link";
import { Button, Input, Card, CardContent } from "@finance/ui";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: connect to auth-sdk
  };

  return (
    <div>
      <div className="mb-8 text-center">
        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600 text-xl font-bold text-white">
          F
        </div>
        <h1 className="text-2xl font-bold text-white">Welcome back</h1>
        <p className="mt-1 text-gray-400">Sign in to your account</p>
      </div>

      <Card>
        <CardContent>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <Input
              label="Email"
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Input
              label="Password"
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <Button type="submit" fullWidth className="mt-2">
              Sign in
            </Button>
          </form>
        </CardContent>
      </Card>

      <p className="mt-6 text-center text-sm text-gray-400">
        Don&apos;t have an account?{" "}
        <Link href="/register" className="text-blue-400 hover:text-blue-300">
          Sign up
        </Link>
      </p>
    </div>
  );
}
