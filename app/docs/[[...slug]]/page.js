export default async function Docs({ params }) {
  const { slug } = await params;

  if (slug?.length === 2) {
    return (
      <>
        Viewing Docs for feature {slug[0]} and concept {slug[1]}
      </>
    );
  } else if (slug?.length === 1) {
    return (
      <>
        <h1>Viewing Docs for feature {slug[0]}</h1>
      </>
    );
  }
  // [[..slug]] makes accessible to /docs
  return (
    <>
      <h1>Docs</h1>
    </>
  );
}
