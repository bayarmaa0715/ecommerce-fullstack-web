"use client";

import SearchComp from "@/components/main-section/searchComp";
import Product from "./products/page";
import ProductDetail from "@/components/main-section/productDetail";

export default function Home() {
  return (
    <div>
      <Product />
      <ProductDetail />
    </div>
  );
}
