"use client";

import Image from "next/image";
import { products } from "../data/products";
import { useState } from "react";
import { product } from "@/types/types";

export default function ProductPage() {
  const [selectedProduct, setSelectedProduct] = useState<product | null>();
  return (
    <main className="flex min-h-screen flex-col items-center p-12 md:p-24">
      <div className="w-full md:w-[60%]">
        <div className="flex flex-row gap-6 w-full justify-center">
          {products.map((product) => (
            <button
              key={product.productId}
              className="bg-emerald-600 py-4 px-6 rounded-md hover:bg-emerald-800 text-lg"
              onClick={() => {
                setSelectedProduct(product);
              }}
            >
              {product.productName}
            </button>
          ))}
          <button
            className="bg-red-600 rounded-md py-4 px-6 hover:bg-red-700 text-lg"
            onClick={() => setSelectedProduct(null)}
          >
            삭제
          </button>
        </div>
        {selectedProduct && (
          <div className="bg-slate-900 p-10 rounded-md mt-10 flex flex-col items-center gap-4 w-full">
            <Image
              src={selectedProduct.productImageUrl}
              alt={`Photo of product: ${selectedProduct.productName}`}
              width={"50"}
              height={"50"}
            />
            <p className="text-2xl">{selectedProduct.productName}</p>
          </div>
        )}
      </div>
    </main>
  );
}
