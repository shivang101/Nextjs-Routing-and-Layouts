"use client"
import { useRouter } from "next/navigation"

export default function OrderProduct() {
    const router = useRouter();
    const handleClick = () => {
        console.log("Placing your Order");
        router.push("/");

        // router.replace("/"); no new page is added over the stack

        // router.back() last visited page of the website




    }

    return (
        <div>
            <h1>Order Product</h1>
            <button onClick={handleClick}>Place Order</button>
        </div>
    )
}
