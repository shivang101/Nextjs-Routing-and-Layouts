export default async function BlogPostPage({ params }) {
  const { slug } = await params
  return (
    <>
      <h1>{slug}</h1>
    </>
  );
}
