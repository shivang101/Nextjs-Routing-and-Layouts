import { notFound } from "next/navigation";

export default async function ProductReview({ params }) {
  const { productId, reviewId } = await params;

  if (reviewId >= 100) {
    // not found from the same folder dominates over global not found
    notFound();
  }
  return (
    <>
      <h1>
        Review number {reviewId} for Product {productId}
      </h1>
    </>
  );
}
