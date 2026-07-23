import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Lock, Mail, ArrowRight, Building2, Eye, EyeOff } from "lucide-react";
import { InteractiveParticleNetwork } from "./ParticleConstellation";

// MOUSE-INTERACTIVE PARTICLE CONSTELLATION CANVAS
<InteractiveParticleNetwork />

export default function Login(props) {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data", email, password);
    props.handleLogin(email, password)
    setEmail('')
    setPassword('')
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 p-4 sm:p-6 relative font-sans overflow-hidden transition-colors duration-300">

      {/* Interactive Canvas Background */}
      <InteractiveParticleNetwork />

      {/* Responsive Ambient Backdrop Accents */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[600px] h-[200px] sm:h-[400px] bg-emerald-100/40 dark:bg-emerald-900/20 rounded-full blur-[100px] sm:blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-48 sm:w-80 h-48 sm:h-80 bg-slate-200/50 dark:bg-slate-900/40 rounded-full blur-[80px] sm:blur-[100px] pointer-events-none" />

      {/* Main Container */}
      <div className="w-full max-w-[440px] z-10 space-y-6 sm:space-y-8 my-auto">

        {/* Brand Header */}
        <div className="flex flex-col items-center text-center space-y-3">
          <div className="h-12 w-12 rounded-xl bg-emerald-700 dark:bg-emerald-600 text-white flex items-center justify-center shadow-md shadow-emerald-900/10 dark:shadow-emerald-950/50 transition-transform hover:scale-105">
            <Building2 className="w-6 h-6" />
          </div>
          <div className="space-y-0.5">
            <h2 className="text-base font-bold text-slate-900 dark:text-slate-100 tracking-tight">
              EMPLOYEE PORTAL
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
              Management & Operations System
            </p>
          </div>
        </div>

        {/* Elevated Glass Card */}
        <Card className="border border-slate-200/80 dark:border-slate-800 bg-white/90 dark:bg-slate-900/80 backdrop-blur-xl shadow-[0_15px_35px_-5px_rgba(0,0,0,0.05)] dark:shadow-[0_15px_35px_-5px_rgba(0,0,0,0.4)] rounded-2xl overflow-hidden p-1 sm:p-2 transition-colors duration-300">
          <CardHeader className="space-y-1.5 text-center pt-6 sm:pt-7 pb-4 px-4 sm:px-6">
            <CardTitle className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
              Welcome back
            </CardTitle>
            <CardDescription className="text-slate-500 dark:text-slate-400 text-xs sm:text-sm">
              Please sign in with your organizational credentials
            </CardDescription>
          </CardHeader>

          <CardContent className="px-4 sm:px-6 pb-4">
            <form onSubmit={handleSubmit} className="space-y-4">

              {/* Email Field */}
              <div className="space-y-2">
                <Label htmlFor="email" className="text-slate-700 dark:text-slate-300 text-xs font-semibold tracking-wide">
                  Work Email
                </Label>
                <div className="relative group">
                  <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400 dark:text-slate-500 group-focus-within:text-emerald-700 dark:group-focus-within:text-emerald-400 transition-colors" />
                  <Input
                    onChange={(e) => {
                      setEmail(e.target.value)
                    }}
                    value={email}
                    id="email"
                    type="email"
                    placeholder="official@company.com"
                    autoComplete="email"
                    className="pl-10 pr-4 py-5 text-sm rounded-md border border-slate-200/90 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-500 focus-visible:bg-white dark:focus-visible:bg-slate-900 focus-visible:ring-2 focus-visible:ring-emerald-300 dark:focus-visible:ring-emerald-500/50 focus-visible:border-emerald-600 dark:focus-visible:border-emerald-500 transition-all shadow-xs"
                    required

                  />
                </div>
              </div>

              {/* Password Field */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password" className="text-slate-700 dark:text-slate-300 text-xs font-semibold tracking-wide">
                    Password
                  </Label>
                  <a
                    href="#forgot"
                    className="text-xs font-semibold text-emerald-700 dark:text-emerald-400 hover:text-emerald-800 dark:hover:text-emerald-300 transition-colors"
                  >
                    Forgot?
                  </a>
                </div>
                <div className="relative group">
                  <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400 dark:text-slate-500 group-focus-within:text-emerald-700 dark:group-focus-within:text-emerald-400 transition-colors" />
                  <Input
                    onChange={(e) => {
                      setPassword(e.target.value)
                    }}
                    value={password}
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    autoComplete="current-password"
                    className="pl-10 pr-10 py-5 text-sm rounded-md border border-slate-200/90 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-500 focus-visible:bg-white dark:focus-visible:bg-slate-900 focus-visible:ring-2 focus-visible:ring-emerald-300 dark:focus-visible:ring-emerald-500/50 focus-visible:border-emerald-600 dark:focus-visible:border-emerald-500 transition-all shadow-xs"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 p-1 rounded-md text-slate-400 dark:text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 transition"
                    aria-label={showPassword ? "Hide password" : "Show password"}
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Primary Action Button */}
              <Button
                type="submit"
                className="w-full py-5 cursor-pointer text-sm rounded-md bg-emerald-700 dark:bg-emerald-600 hover:bg-emerald-800 dark:hover:bg-emerald-500 text-white font-semibold transition-all group mt-2 shadow-md shadow-emerald-900/10 dark:shadow-emerald-950/40 active:scale-[0.99]"
              >
                Sign In
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>
          </CardContent>

          {/* Card Footer */}
          <CardFooter className="flex flex-col space-y-5 px-0 pb-6">
            <div className="relative w-full flex items-center justify-center px-4 sm:px-6">
              {/* <Separator className="dark:bg-slate-800" /> */}
              <span className="bg-transparent px-3 text-[11px] font-semibold tracking-wider text-slate-400 dark:text-slate-500 absolute rounded-full">
                OR
              </span>
            </div>

            <p className="text-xs text-center text-slate-500 dark:text-slate-400">
              Need access?{" "}
              <a
                href="#signup"
                className="text-emerald-700 dark:text-emerald-400 font-semibold hover:text-emerald-800 dark:hover:text-emerald-300 transition-colors"
              >
                Request an account
              </a>
            </p>
          </CardFooter>
        </Card>

        {/* Footer Info */}
        <p className="text-center text-xs text-slate-400 dark:text-slate-500">
          Secured with local session persistence
        </p>
      </div>
    </div>
  );
}