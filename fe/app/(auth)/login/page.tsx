import Field from "@/components/Field";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";

export default function Page() {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <Card className="w-3/12">
        <CardHeader>
          <CardTitle className="text-center">Login</CardTitle>
        </CardHeader>
        <CardContent>
          <Field label="Email" type="email" placeholder="Email" htmlFor="email" className="mb-3"  />
          <Field label="Password" type="password" placeholder="Password" htmlFor="password" className="mb-3"  />
          <div className="flex items-center space-x-2 mb-5">
            <Checkbox id="remember" />
            <label
              htmlFor="remember"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Remember Me
            </label>
          </div>
          <Button className="w-full">Login</Button>
        </CardContent>
      </Card>
    </div>
  );
}
