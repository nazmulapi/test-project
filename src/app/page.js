"use client";

import { useState } from "react";
import Link from "next/link";
import { Briefcase } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function FancyLoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100">
      {/* Left side with animated business-related SVG icon */}
      <div className="hidden w-1/2 items-center justify-center lg:flex">
        <div className="text-center">
          <div className="relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="h-32 w-32 animate-spin-slow rounded-full border-b-2 border-indigo-500"></div>
            </div>
            <Briefcase className="relative z-10 mx-auto h-32 w-32 text-indigo-600" />
          </div>
          <h1 className="mt-6 text-4xl font-bold text-gray-900">
            Welcome Back
          </h1>
          <p className="mt-2 text-xl text-gray-600">
            We&apos;re so excited to see you again!
          </p>
        </div>
      </div>

      {/* Right side with fancy login form */}
      <div className="flex w-full items-center justify-center p-8 lg:w-1/2">
        <div className="w-full max-w-md">
          <div className="rounded-2xl bg-white/80 backdrop-blur-lg shadow-2xl px-8 py-10">
            <h2 className="mb-6 text-center text-3xl font-bold text-gray-800">
              Sign in to your account
            </h2>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <Label
                  htmlFor="email-address"
                  className="text-sm font-medium text-gray-700"
                >
                  Email address
                </Label>
                <Input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={handleEmailChange}
                  className="h-10 mt-1 block w-full border px-3 py-2 text-sm focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 rounded-md border-gray-300 transition-all duration-200 focus:border-indigo-500 focus:ring-gray-400 hover:border-indigo-500"
                />
              </div>
              <div>
                <Label
                  htmlFor="password"
                  className="text-sm font-medium text-gray-700"
                >
                  Password
                </Label>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={handlePasswordChange}
                  className="h-10 mt-1 block w-full border px-3 py-2 text-sm focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 rounded-md border-gray-300 transition-all duration-200 focus:border-indigo-500 focus:ring-gray-400 hover:border-indigo-500"
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Checkbox
                    id="remember-me"
                    className="hover:cursor-pointer border-gray-400"
                  />
                  <Label
                    htmlFor="remember-me"
                    className="ml-2 block text-sm text-gray-900 hover:cursor-pointer"
                  >
                    Remember me
                  </Label>
                </div>

                <div className="text-sm">
                  <Link
                    href="#"
                    className="font-medium text-indigo-600 hover:text-indigo-500"
                  >
                    Forgot your password?
                  </Link>
                </div>
              </div>

              <div>
                <Button
                  type="submit"
                  className="w-full py-5 bg-gradient-to-r from-indigo-500 to-purple-600 text-white transition-all duration-200 hover:from-indigo-600 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 hover:cursor-pointer"
                >
                  Sign in
                </Button>
              </div>
            </form>
          </div>
          <p className="mt-4 text-center text-sm text-gray-600">
            Don&apos;t have an account?{" "}
            <Link
              href="#"
              className="font-medium text-indigo-600 hover:text-indigo-500 hover:cursor-pointer"
            >
              Sign up
            </Link>
          </p>
        </div>
      </div>

      {/* Decorative elements */}
      <div
        className="pointer-events-none fixed inset-0 flex items-center justify-center"
        aria-hidden="true"
      >
        <div className="h-1/3 w-1/3 rounded-full bg-gradient-to-tr from-pink-500 to-purple-500 opacity-10 blur-3xl"></div>
      </div>
      <div
        className="pointer-events-none fixed inset-0 flex items-center justify-center rotate-180"
        aria-hidden="true"
      >
        <div className="h-1/3 w-1/3 rounded-full bg-gradient-to-tr from-indigo-500 to-cyan-500 opacity-10 blur-3xl"></div>
      </div>
    </div>
  );
}
