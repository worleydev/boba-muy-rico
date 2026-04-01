import React from "react";
import Link from "next/link";

export default function LocationHours() {
    const hours = [
        { day: "Monday", open: "11:00 am", close: "9:00 pm" },
        { day: "Tuesday", open: "11:00 am", close: "9:00 pm" },
        { day: "Wednesday", open: "11:00 am", close: "9:00 pm" },
        { day: "Thursday", open: "11:00 am", close: "9:00 pm" },
        { day: "Friday", open: "11:00 am", close: "9:00 pm" },
        { day: "Saturday", open: "11:00 am", close: "9:00 pm" },
        { day: "Sunday", open: "11:00 am", close: "9:00 pm" },
    ];

    return (
        <section className="py-16 bg-gray-100">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-4xl font-extrabold text-gray-900 mb-12">
                    Location & Hours
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                    {/* Location Info */}
                    <div className="bg-white p-12 rounded-lg shadow-md shadow-gray-400/40 min-h-[400px] flex flex-col justify-between">
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-2">
                                BOBATALE TEA HOUSE
                            </h2>
                            <p className="text-gray-700 mb-1">928 Fort Stockton Dr</p>
                            <p className="text-gray-700 mb-1">San Diego, CA 92103</p>
                            <a
                                href="https://www.google.com/maps/dir//928+Fort+Stockton+Dr,+San+Diego,+CA+92103"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block text-primary font-medium hover:underline mb-6"
                            >
                                Get directions
                            </a>
                        </div>
                        <Link href="/menu">
                            <button className="mt-4 bg-primary text-white font-semibold px-6 py-3 rounded-lg hover:bg-primary-dark transition">
                                Order Now
                            </button>
                        </Link>
                    </div>

                    {/* Hours Info */}
                    <div className="bg-white p-8 rounded-lg shadow-md shadow-gray-400/40">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">
                            Hours
                        </h2>
                        <ul className="divide-y divide-gray-200">
                            {hours.map(({ day, open, close }) => (
                                <li key={day} className="flex justify-between py-2">
                                    <span className="font-medium text-gray-800">{day}</span>
                                    <span className="text-gray-700">{open} - {close}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}