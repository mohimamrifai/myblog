"use client";
import React, { useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Eye, EyeOff } from "lucide-react";
import { EyeClosedIcon } from "@radix-ui/react-icons";
import Link from "next/link";

const formSchema = z.object({
  email: z.string().email("Format email tidak valid"),
  password: z.string().min(6, "Password harus terdiri dari minimal 6 karakter"),
});

export default function Page() {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <div className="w-full h-screen flex items-center justify-center">
      <Card className="lg:w-3/12 p-5">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="your email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <div className="flex items-center justify-between">
                    <FormLabel>Password</FormLabel>
                    {isPasswordVisible ? (
                      <Eye
                        className="cursor-pointer"
                        size={18}
                        onClick={() => setIsPasswordVisible(!isPasswordVisible)}
                      />
                    ) : (
                      <EyeOff
                        className="cursor-pointer"
                        size={18}
                        onClick={() => setIsPasswordVisible(!isPasswordVisible)}
                      />
                    )}
                  </div>
                  <FormControl>
                    <Input
                      type={isPasswordVisible ? "text" : "password"}
                      placeholder="your password"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">Login</Button>
          </form>
        </Form>
        <p className="mt-4 text-sm">
          Don't have an account ?{" "}
          <Link href="/register" className="underline">
            Register now!
          </Link>
        </p>
      </Card>
    </div>
  );
}
