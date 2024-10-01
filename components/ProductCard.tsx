import Image from 'next/image';
import { Card, CardContent, CardFooter } from '@/components/ui/card';

interface ProductCardProps {
    image: string;
    productName: string;
    price: number | null | undefined;
}

export default function ProductCard({ image, productName, price }: ProductCardProps) {
    return (
        <Card className="w-full max-w-sm overflow-hidden">
            <div className="relative h-48 w-full">
                <Image src={image} alt={productName} layout="fill" objectFit="cover" className="transition-transform duration-300 ease-in-out hover:scale-105" />
            </div>
            <CardContent className="p-4">
                <h2 className="text-lg font-semibold text-gray-800">{productName}</h2>
            </CardContent>
            <CardFooter className="p-4 pt-0 flex flex-col">
                <div className="flex justify-center items-center">
                    <span className="text-sm text-gray-600">Price/Kg</span>
                    <span className="text-lg font-bold text-green-600">
                        {price != null ? `₹${price}` : 'N/A'}
                    </span>
                </div>
                <button>Add to Cart</button>
            </CardFooter>
        </Card>
    );
}