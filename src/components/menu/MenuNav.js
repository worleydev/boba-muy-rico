import Link from "next/link";

export default function MenuNav() {
    return (
        <nav class="sticky top-20 z-40 bg-gray-100 shadow dark:bg-gray-800">
            <div class="container flex items-center justify-center p-6 mx-auto mb-12 text-sm sm:text-base text-gray-600 capitalize dark:text-gray-300">
            <Link href={"#top"} class="text-gray-800 scroll transition-colors duration-300 transform dark:text-gray-200 mx-1.5 sm:mx-6">Milk Tea</Link>

            <Link href={"#Milk Foam"} class="border-b-2 border-transparent hover:text-gray-800 transition-colors duration-300 transform dark:hover:text-gray-200  mx-1.5 sm:mx-6">Milk Foam</Link>

            <Link href={"#Shakes"} class="border-b-2 border-transparent hover:text-gray-800 transition-colors duration-300 transform dark:hover:text-gray-200  mx-1.5 sm:mx-6">Shakes</Link>

            <Link href={"#Hot Beverages"} class="border-b-2 border-transparent hover:text-gray-800 transition-colors duration-300 transform dark:hover:text-gray-200  mx-1.5 sm:mx-6">Hot Beverages</Link>

            <Link href={"#Smoothies"} class="border-b-2 border-transparent hover:text-gray-800 transition-colors duration-300 transform dark:hover:text-gray-200  mx-1.5 sm:mx-6">Smoothies</Link>

            
        </div>
        </nav>
    )
}