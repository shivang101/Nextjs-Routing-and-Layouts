export default async function ProductDetails({ params }) {
  const { productId } = await params;
  return (
    <>
      <h1>Details about product</h1>
      <h2>This page is about details of Product {productId}</h2>

      {/* <h2>This page is about details of {`Product ${params.productId}`}</h2> */}
    </>
  );
}
