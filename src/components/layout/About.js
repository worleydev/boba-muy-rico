import Image from "next/image"

export default function About() {
    return (
        <>
        <section class="bg-gray-100">
                    <div class="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
                        <div class="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
                            <div class="max-w-lg">
                                <h2 class="text-3xl font-extrabold text-gray-900 sm:text-4xl">Unique Experience</h2>
                                <p class="mt-4 text-gray-600 text-lg">Discover a fusion of vibrant Mexican flavors and traditional Asian boba teas at Boba Muy Rico, where every sip tells a story of cultural harmony. Combining traditional Taiwanese milk tea with the bright flavors of Mexico, Boba Muy Rico curates an experience unlike any other.</p>
                                <div class="mt-8">
                                    <span href="#" class="text-primary font-medium">One of the few, one of the best</span>
                                </div>
                            </div>
                        <div class="mt-12 md:mt-0">
                            <Image src={'/fruitTea.jpg'} alt="About Us Image" class="object-cover rounded-lg shadow-md" width={500} height={500} />
                        </div>
                        </div>
                    </div>
                </section>
                
                <section class="bg-gray-100">
                <div class="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
                    <div class="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
                        <div class="mt-12 md:mt-0">
                        <Image src={'/fruits.jpg'} alt="About Us Image" class="object-cover rounded-lg shadow-md" width={500} height={500} />
                        </div>
                        <div class="max-w-lg">
                            <h2 class="text-3xl font-extrabold text-gray-900 sm:text-4xl">Quality Ingredients</h2>
                            <p class="mt-4 text-gray-600 text-lg">Our drinks are made from the finest ingredients, making use of only high-quality tea leaves. The leaves and ingredients are tested to ensure the best possible quality across our lineup of beverages. Locally sourced when possible, free-trade when not; we are proud of our ingredients, and you'll be able to taste the difference.</p>
                            <div class="mt-8">
                            <span class="text-primary font-medium">Free trade products, guilt free mind</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="bg-gray-100">
            <div class="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
                <div class="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
                    <div class="max-w-lg">
                        <h2 class="text-3xl font-extrabold text-gray-900 sm:text-4xl">About Us</h2>
                        <p class="mt-4 text-gray-600 text-lg">Founded in 2022 by a passionate duo with a shared love for both Mexican and Asian culinary traditions, Boba Muy Rico was born from a dream to celebrate diversity through fusion cuisine. Join us on a journey of flavor and culture at Boba Muy Rico, where each visit promises a taste adventure that transcends borders and delights the senses.</p>
                        <div class="mt-8">
                            <span class="text-primary font-medium">Locally owned, internationally inspired</span>
                
                        </div>
                    </div>
                <div class="mt-12 md:mt-0">
                <Image src={'/bobaShop.jpg'} alt="About Us Image" class="object-cover rounded-lg shadow-md" width={500} height={500} />
                </div>
                </div>
            </div>
        </section>
        </>
    )
}