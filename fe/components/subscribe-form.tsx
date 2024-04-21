import React from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

export default function SubscribeForm() {
  return (
    <div className="px-5 py-10 lg:p-28 bg-gray-900 text-slate-100 mt-10 rounded-md flex flex-col justify-center items-center">
      <h2 className="lg:text-2xl text-xl font-semibold">
        Get the latest articles early, subscribe now!
      </h2>
      <div className="flex w-full max-w-md items-center space-x-2 mx-auto mt-5">
        <Input type="email" className="outline-blue-500 text-gray-900" placeholder="your email address" />
        <Button type="submit" variant="outline" className="text-gray-900">Subscribe</Button>
      </div>
    </div>
  );
}
