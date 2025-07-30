"use client";
import { usePathname } from "next/navigation";

export default function NotFound() {
  const pathName = usePathname();

  const productId = pathName.split("/")[2];
  const reviewId = pathName.split("/")[4];

  return (
    <div>
      <h2>
        Review {reviewId} not Found for {productId}
      </h2>
    </div>
  );
}
// not found from the same folder dominates over global not found
