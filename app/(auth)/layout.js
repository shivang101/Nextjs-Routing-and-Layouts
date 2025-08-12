"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
const navLinks = [
    { name: "Register", href: "/register" },
    { name: "Login", href: "/login" },
    { name: "Forgot Password", href: "/forgot-password" }
]

export default function AuthLayout({ children }) {
    const pathname = usePathname();
    return (
        <>
            <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet"></link>
            <h2>Featured Products (Nested Layout)</h2>
            <div>
                {navLinks.map((el) => {
                    const isActive = pathname === el.href || pathname.startsWith(el.href) && el.href !== "/"
                    return (
                        <Link className={isActive ? "font-bold mr-4" : "text-blue-500 mr-4"} href={el.href} key={el.name}>{el.name}</Link>
                    );
                })}
            </div>
            <br></br>
            {children}
        </>
    );
}
