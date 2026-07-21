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
import { Badge } from "@/components/ui/badge";
import { Lock, Mail, ArrowRight, Building2, Eye, EyeOff, Users, KeyRound } from "lucide-react";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  // Logic placeholders - ready for your localStorage & auth state hooks!
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("EMS Auth Handled");
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-slate-50/50 text-slate-900 p-6 relative font-sans overflow-hidden">
      
      {/* Premium Ambient Radial Gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-indigo-100/50 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-slate-200/40 rounded-full blur-[120px] pointer-events-none" />

      {/* Main Container */}
      <div className="w-full max-w-[460px] z-10 space-y-8 my-auto">
        
        {/* Brand & System Identifier */}
        <div className="flex flex-col items-center text-center space-y-3">
          <div className="flex items-center gap-2.5 bg-white border border-slate-200/80 px-4 py-2 rounded-sm shadow-sm">
            <div className="h-7 w-7 rounded-sm bg-indigo-600 text-white flex items-center justify-center shadow-xs">
              <Building2 className="w-4 h-4" />
            </div>
            <span className="font-bold text-slate-900 text-sm tracking-tight">
              Nexus<span className="text-indigo-600">EMS</span>
            </span>
            <Separator orientation="vertical" className="h-4 bg-slate-200" />
            <Badge variant="secondary" className="bg-indigo-50 text-indigo-700 hover:bg-indigo-50 border-indigo-100 text-[10px] font-semibold tracking-wide uppercase rounded-sm">
              v2.0
            </Badge>
          </div>
          <p className="text-xs text-slate-500 font-medium">
            Enterprise Employee Management Portal
          </p>
        </div>

        {/* Elevated System Access Card */}
        <Card className="border border-indigo-100/80 bg-white/95 backdrop-blur-xl shadow-[0_12px_35px_rgb(99,102,241,0.08)] rounded-sm overflow-hidden p-2">
          <CardHeader className="space-y-1.5 text-center pt-7 pb-5 px-6">
            <CardTitle className="text-2xl font-bold tracking-tight text-slate-900">
              Sign in to Portal
            </CardTitle>
            <CardDescription className="text-slate-500 text-sm">
              Enter your organizational credentials to proceed
            </CardDescription>
          </CardHeader>

          <CardContent className="px-6 pb-4">
            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Corporate Email Field */}
              <div className="space-y-2">
                <Label htmlFor="email" className="text-slate-700 text-xs font-semibold tracking-wide">
                  Work Email
                </Label>
                <div className="relative group">
                  <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400 group-focus-within:text-indigo-600 transition-colors" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="alex.morgan@company.com"
                    autoComplete="email"
                    className="pl-10 pr-4 py-5 text-sm rounded-sm border border-slate-200/90 bg-slate-50/50 text-slate-900 placeholder:text-slate-400 focus-visible:ring-2 focus-visible:ring-indigo-700/20 focus-visible:border-indigo-500 focus-visible:bg-white transition-all shadow-xs"
                    required
                  />
                </div>
              </div>

              {/* Security Key / Password Field */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password" className="text-slate-700 text-xs font-semibold tracking-wide">
                    Password
                  </Label>
                  <a
                    href="#forgot"
                    className="text-xs font-semibold text-indigo-600 hover:text-indigo-700 transition-colors cursor-pointer"
                  >
                    Forgot password?
                  </a>
                </div>
                <div className="relative group">
                  <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400 group-focus-within:text-indigo-600 transition-colors" />
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    autoComplete="current-password"
                    className="pl-10 pr-10 py-5 text-sm rounded-sm border border-slate-200/90 bg-slate-50/50 text-slate-900 placeholder:text-slate-400 focus-visible:ring-2 focus-visible:ring-indigo-700/20 focus-visible:border-indigo-500 focus-visible:bg-white transition-all shadow-xs"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 p-1 rounded-sm text-slate-400 hover:text-slate-700 transition cursor-pointer"
                    aria-label={showPassword ? "Hide password" : "Show password"}
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Primary Action Button */}
              <Button
                type="submit"
                className="w-full py-5 text-sm rounded-sm bg-indigo-600 hover:bg-indigo-700 text-white font-semibold transition-all group mt-3 shadow-md shadow-indigo-600/20 active:scale-[0.99] cursor-pointer"
              >
                Access Dashboard
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>
          </CardContent>

          {/* Quick Mock Role Hints for Logic Testing */}
          <CardFooter className="flex flex-col space-y-4 px-6 pb-6 pt-2">
            <Separator className="bg-slate-100" />
            <div className="flex items-center justify-between w-full text-xs text-slate-500 bg-slate-50/80 p-3 rounded-sm border border-slate-100">
              <span className="flex items-center gap-1.5 text-slate-600 font-medium">
                <Users className="w-3.5 h-3.5 text-indigo-600" /> Local Storage Auth:
              </span>
              <span className="font-mono text-[11px] text-slate-700 bg-white px-2 py-0.5 rounded border border-slate-200">
                Admin / Employee
              </span>
            </div>
          </CardFooter>
        </Card>

        {/* Footer Subtext */}
        <p className="text-center text-xs text-slate-400">
          Nexus Employee Management • Secure Local Session
        </p>
      </div>
    </div>
  );
}