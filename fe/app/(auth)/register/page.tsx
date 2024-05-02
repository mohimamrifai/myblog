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
          <CardTitle className="text-center">Register</CardTitle>
        </CardHeader>
        <CardContent>
          <Field
            label="Username"
            type="text"
            placeholder="Username"
            htmlFor="username"
            className="mb-3"
          />
          <Field
            label="Email"
            type="email"
            placeholder="Email"
            htmlFor="email"
            className="mb-3"
          />
          <Field
            label="Password"
            type="text"
            placeholder="Password"
            htmlFor="password"
            className="mb-3"
          />
          <Field
            label="Confirmation Password"
            type="text"
            placeholder="Confirmation Password"
            htmlFor="confirmation_password"
            className="mb-3"
          />
          <Field
            label="Avatar"
            type="file"
            placeholder="Your Avatar Profile"
            htmlFor="avatar"
            className="mb-3"
          />
          <Button className="w-full">Register</Button>
          <p className="text-center mt-2 text-sm">do have an account yet ? 
            <Link href="/login" className="underline text-blue-400"> Login</Link>
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
