'use client'
import Field from "@/components/Field";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Eye, EyeOff } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

export default function Page() {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false)
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <Card className="w-3/12">
        <CardHeader>
          <CardTitle className="text-center">Login</CardTitle>
        </CardHeader>
        <CardContent>
          <Field
            label="Email"
            type="email"
            placeholder="Email"
            htmlFor="email"
            className="mb-3"
          />
          <Field
            label="Password"
            type={isPasswordVisible ? "text" : "password"}
            placeholder="Password"
            htmlFor="password"
            className="mb-3"
          />
          <div className="flex justify-between items-center mb-5">
            <div className="flex items-center space-x-2 ">
              <Checkbox id="remember" />
              <label
                htmlFor="remember"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Remember Me
              </label>
            </div>
            {isPasswordVisible ? 
            <Eye size={18} className="cursor-pointer" onClick={() => setIsPasswordVisible(!isPasswordVisible)} /> : 
            <EyeOff size={18} className="cursor-pointer" onClick={() => setIsPasswordVisible(!isPasswordVisible)} />}
          </div>
          <Button className="w-full">Login</Button>
          <p className="text-center mt-2 text-sm">don't have an account yet ? 
            <Link href="/register" className="underline text-blue-400"> Register</Link>
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
