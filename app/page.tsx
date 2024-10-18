import ProductCard from "@/components/ProductCard";

export default function Home() {
  return (
    <div className="p-20">
      <div className="flex flex-col gap-10 py-10">
        <div>
          <p className="text-2xl font-medium px-2">Top Products</p>
        </div>
        <div className="flex-1 grid grid-cols-4 gap-5">
          <ProductCard
            image="/test.jpg"
            productName="Fuji"
            price={200}
          />
          <ProductCard
            image="/test.jpg"
            productName="Fuji"
            price={200}
          />
          <ProductCard
            image="/test.jpg"
            productName="Fuji"
            price={200}
          />
          <ProductCard
            image="/test.jpg"
            productName="Fuji"
            price={200}
          />
          <ProductCard
            image="/test.jpg"
            productName="Fuji"
            price={200}
          />
        </div>
      </div>
    </div>
  );
}
