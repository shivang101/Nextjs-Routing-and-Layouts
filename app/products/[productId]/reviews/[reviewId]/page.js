import { notFound, redirect } from "next/navigation";

export async function generateMetadata({ params }) {
  const { productId, reviewId } = await params;

  return {
    title: `${productId} | ${reviewId} check`
  }
}

export default async function ProductReview({ params }) {

  const { productId, reviewId } = await params;



  if (reviewId >= 100) {
    // not found from the same folder dominates over global not found
    redirect("/products")
    // notFound();
  }
  return (
    <>
      <h1>
        Review number {reviewId} for Product {productId}
      </h1>
    </>
  );
}
