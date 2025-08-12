export async function generateMetadata({ params }) {
  // const id = (await params).productId;
  const { productId: id } = await params;

  const title = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(`iPhone ${id}`);
    }, 5000);
  })

  return {
    title: `You're looking for ${title}`,
  };
}

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
