import Link from "next/link";
import Header from "../components/header";

export default function Home() {
  console.log("Executing.....");
  //rendered on server side not client side
  //this statement is logged in the server not in console of the webpage
  //(just like server logs when using node js server)

  return (
    <main>
      <h1>Welcome Home</h1>
    </main>
  );
}
