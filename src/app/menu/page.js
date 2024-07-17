'use client';
import SectionHeaders from "@/components/layout/SectionHeaders";
import MenuItem from "@/components/menu/MenuItem";
import MenuNav from "@/components/menu/MenuNav";
import { useEffect, useState } from "react";

export default function MenuPage() {
    const [categories, setCategories] = useState([]);
    const [menuItems, setMenuItems] = useState([]);
    useEffect(() => {
        fetch('/api/categories').then(res => {
            res.json().then(categories => setCategories(categories))
        });
        fetch('api/menu-items').then(res => {
            res.json().then(menuItems => setMenuItems(menuItems))
        });
    }, []);
    return (
        <section className="">
            <MenuNav />
            {categories?.length > 0 && categories.map(c => (
                <div key={c._id} >
                    <div className="text-center" >
                        <SectionHeaders mainHeader={c.name} />
                    </div>
                    <div className="scroll-mt-60 grid sm:grid-cols-4 gap-4 pt-4 mt-6 mb-12" id={c.name}>
                        {menuItems.filter(item => item.category === c._id).map(item => (
                            <MenuItem key={item._id} {...item} />
                        ))}
                    </div>
                </div>
            ))}
        </section>
    );
}