import Image from "next/image";
import Right from "../icons/Right";
import Link from "next/link";

export default function Hero() {
    return (
        <>
        {/* <section className="hero md:my-8">
            <div className="py-8 md:py-12">
                <h1 className="text-4xl font-semibold">Mexican Fusion Boba</h1>
                <p className="my-6 text-gray-500">A Mexican spin on the classic Taiwanese beverage.</p>
            <div className="flex gap-4">
                <button className="flex justify-center gap-2 items-center bg-primary text-white px-4 py-2 rounded-full">
                    Order Now
                    <Right />                
                </button>
                
                    <button className="flex items-center border-0 gap-2 py-2 text-gray-600 font-semibold">
                        Learn More
                        <Right />
                    </button>

                
                </div>           
            </div>
            <div className="relative hidden md:block">
                <Image src={'/Bobas.jpg'} objectFit={'contain'} alt={'img description'}  
                width={600} 
                height={600} 
                className="object-cover rounded-lg shadow-md" 
                />
            </div>


        </section>       */}
        <section className="md:my-8" >
            <div class="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
                        <div class="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
                            <div class="max-w-lg">
                                <h2 class="text-3xl font-extrabold text-gray-900 sm:text-4xl">Mexican Fusion Boba</h2>
                                <p class="mt-4 text-gray-600 text-lg">Boba Muy Rico is an Asian-Mexican fusion restaurant. Combining classic takes on boba with traditional Mexican cuisine, Boba Muy Rico creates a delicous and one-of-a-kind experience. Stop by today!</p>
                                {/* <div class="flex gap-4 mt-8">
                                <button className="flex justify-center gap-2 items-center bg-primary text-white px-4 py-2 rounded-full">
                                    Order Now
                                    <Right />                
                                </button>
                                <button className="flex items-center border-0 gap-2 py-2 text-gray-600 font-semibold">
                                    Learn More
                                    <Right />
                                </button>
                                </div> */}
                            </div>
                        <div class="mt-12 md:mt-0 hidden md:block">
                            <Image src={'/Bobas.jpg'} alt="About Us Image" class="object-cover rounded-lg shadow-md" width={700} height={700} />
                        </div>
                        </div>
                    </div>
                </section>
                </>
    )
}