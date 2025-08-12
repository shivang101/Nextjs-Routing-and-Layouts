import Link from "next/link";

export const metadata = {
  title: "About Shivang",
  description: "Details about Shivang"
}

export default function anything() {
  return (
    <>
      <main>
        <h1>About Us</h1>
        <Link href="/">Back</Link>
      </main>
    </>
  );
}
