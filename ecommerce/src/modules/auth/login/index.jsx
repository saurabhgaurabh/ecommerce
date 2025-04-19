import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      alert("Logged in successfully! (Simulated)");
    }, 1500);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4 py-12 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight">Welcome back</h2>
          <p className="mt-2 text-sm text-gray-500">Sign in to your account to continue</p>
        </div>

        <div className="overflow-hidden rounded-lg bg-white shadow-lg">
          <div className="px-6 py-5">
            <h3 className="text-xl font-semibold">Sign in</h3>
            <p className="mt-1 text-sm text-gray-500">Enter your email and password to access your account</p>
          </div>
          <div className="px-6 py-4">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="name@example.com"
                  className="w-full rounded-md border border-gray-300 px-4 py-2 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                    Password
                  </label>
                  <Link to="#" className="text-xs text-blue-600 hover:underline">
                    Forgot password?
                  </Link>
                </div>
                <div className="relative">
                  {/* Optional Lock icon or emoji */}
                  {/* <span className="absolute left-3 top-2.5">🔒</span> */}
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    className="w-full rounded-md border border-gray-300 px-4 py-2 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-2.5 text-xs text-gray-500"
                    tabIndex={-1}
                  >
                    {showPassword ? "🙈" : "👁️"}
                  </button>
                </div>
              </div>

              <button
                type="submit"
                className={`w-full rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                  isLoading ? "cursor-not-allowed opacity-70" : ""
                }`}
                disabled={isLoading}
              >
                {isLoading ? "Signing in..." : "Sign in"}
              </button>
            </form>
          </div>

          <div className="border-t border-gray-200 px-6 py-4">
            <div className="flex items-center gap-2 w-full">
              <div className="h-px flex-1 bg-gray-200"></div>
              <span className="text-xs text-gray-500">OR</span>
              <div className="h-px flex-1 bg-gray-200"></div>
            </div>
            <button className="mt-4 w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
              Continue with Google
            </button>
            <div className="mt-4 text-center text-sm">
              Don&apos;t have an account?{" "}
              <Link to="/" className="text-blue-600 hover:underline">
                Sign up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
