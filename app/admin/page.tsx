"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardFooter,
  CardHeader,
  CardContent,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import UploadBtn from "@/components/uploadbutton";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { useState } from "react";

export default function Admin() {
  const { data: session, status } = useSession();
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");

  const authenticatedEmails = ["adithyakb93@gmail.com", "abrahul02@gmail.com"];
  if (!session) {
    redirect("/");
  }
  if (session?.user?.email) {
    if (
      status === "authenticated" &&
      !authenticatedEmails.includes(session.user.email)
    ) {
      redirect("/");
    }
  }

  function handleSubmit() {}

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-20">
      <Card className="w-full max-w-md shadow-lg">
        <CardHeader className="text-xl font-bold text-center bg-gray-800 text-white p-4">
          Upload Product
        </CardHeader>

        <CardContent>
          <form
            onSubmit={handleSubmit}
            className="space-y-6 py-5"
          >
            <div>
              <Label
                htmlFor="product-name"
                className="block mb-2 text-md font-medium text-gray-700"
              >
                Product Name
              </Label>
              <Input
                id="product-name"
                type="text"
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
                className="block w-full px-3 py-2 text-gray-900 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Enter product name"
                required
              />
            </div>

            <div>
              <Label
                htmlFor="product-price"
                className="block mb-2 text-md font-medium text-gray-700"
              >
                Product Price
              </Label>
              <Input
                id="product-price"
                type="number"
                value={productPrice}
                onChange={(e) => setProductPrice(e.target.value)}
                className="block w-full px-3 py-2 text-gray-900 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Enter product price"
                required
              />
            </div>

            <div>
              <Label
                htmlFor="product-price"
                className="block mb-2 text-md font-medium text-gray-700"
              >
                Product Image
              </Label>
              <UploadBtn />
            </div>

            <Button
              type="submit"
              className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-500"
            >
              Upload Product
            </Button>
          </form>
        </CardContent>

        <CardFooter className="text-center p-4 bg-gray-50">
          <p className="text-sm text-gray-500">
            Ensure the details are correct before submitting.
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}
