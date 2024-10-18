import Image from "next/image";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "./ui/button";
import { ShoppingBasket } from "lucide-react";
interface ProductCardProps {
  image: string;
  productName: string;
  price: number | null | undefined;
}

export default function ProductCard({
  image,
  productName,
  price,
}: ProductCardProps) {
  return (
    <Card className="w-full max-w-sm overflow-hidden">
      <div className="relative h-48 w-full">
        <Image
          src={image}
          alt={productName}
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-300 ease-in-out hover:scale-105"
        />
      </div>
      <CardContent className="p-4">
        <h2 className="text-lg font-semibold text-gray-800 dark:text-white">
          {productName}
        </h2>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex flex-col">
        <div className="flex justify-center items-center pb-5 gap-2">
          <span className="text-sm text-gray-600 dark:text-white">
            Price/Kg
          </span>
          <span className="text-lg font-bold text-green-600">
            {price != null ? `₹${price}` : "N/A"}
          </span>
        </div>
        <Button className="flex gap-2 items-center bg-[#e8e8e8] text-black hover:bg-green-400">
          <ShoppingBasket />
          <p>Add to Cart</p>
        </Button>
      </CardFooter>
    </Card>
  );
}
