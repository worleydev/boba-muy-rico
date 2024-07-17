'use client';
import SectionHeaders from "@/components/layout/SectionHeaders";
import MenuItem from "../menu/MenuItem";
import { useEffect, useState } from "react";

export default function HomeMenu() {
    const [bestSellers, setBestSellers] = useState([]);
    useEffect(() => {
        fetch('/api/menu-items').then(res => {
            res.json().then(menuItems => {
                setBestSellers(menuItems.slice(-3));
            });
        });
    }, []);

    return (
        <section>
            {/* <div className="text-center mb-4">
                <h3 className="uppercase text-gray-500 font-semibold leading-4">Check Out</h3>
                <h2 className="text-primary font-bold text-4xl italic">Menu</h2>
            </div> */}
            <div className="text-center my-4">
                <SectionHeaders 
                    subHeader={'check out'}
                    mainHeader={'Our Best Sellers'}
                />
            </div>
            <div className="grid sm:grid-cols-3 gap-4">
                 {bestSellers?.length > 0 && bestSellers.map(item => (
                    <MenuItem key={item._id} {...item} />
                 ))}
            </div>
        </section>
    )
}