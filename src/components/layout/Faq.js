import React from "react";

export default function Faq() {
    const faqs = [
        {
            question: "Do you have dairy-free milk options?",
            answer: "Yes! We offer Lactose-Free, Almond, Oat, and Soy milk alternatives"
        },
        {
            question: "Can I pay with cash at the store?",
            answer: "Absolutely — cash is accepted"
        },
        {
            question: "Do you provide non-caffeine drinks?",
            answer: "Of course! We offer milk-based drinks, decaf milk tea, and decaf refreshers"
        },
        {
            question: "Do you accept group orders?",
            answer: "Yes! Order in-store or online, and add a note with your preferred date and time"
        },
        {
            question: "Do you have gift cards?",
            answer: "Yes, we offer physical gift cards, available for in-store purchase only"
        },
        {
            question: "Can I adjust my sweetness and ice level?",
            answer: "Yes, all drinks are fully customizable"
        }
    ];

    return (
        <section className="py-16 ">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                    {/* Left label */}
                    <div className="text-4xl font-extrabold text-gray-900">
                        FAQ
                    </div>

                    {/* Right content */}
                    <div className="space-y-4 text-gray-800">
                        {faqs.map(({ question, answer }, index) => (
                            <div key={index}>
                                <h3 className="font-semibold mb-1">{question}</h3>
                                <p>{answer}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}