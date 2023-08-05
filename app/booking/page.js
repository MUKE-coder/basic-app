import FormDetails from "@/components/FormDetails";
import ProductDetails from "@/components/ProductDetails";
import React from "react";

export default function Page() {
  const title = "Peanut Butter";
  const price = 2500;
  return (
    <div className="booking-page">
      <div className="container">
        <ProductDetails title={title} price={price} />
        <FormDetails title={title} price={price} />
      </div>
    </div>
  );
}
