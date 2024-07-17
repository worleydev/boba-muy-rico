'use client';
import { useProfile } from "@/components/UseProfile";
import SectionHeaders from "@/components/layout/SectionHeaders";
import UserTabs from "@/components/layout/UserTabs";
import Link from "next/link";
import { useEffect, useState } from "react";
import {dbTimeForHuman} from "@/libs/datetime";

export default function OrdersPage() {
    const [orders, setOrders] = useState([]);
    const [loadingOrders, setLoadingOrders] = useState(true);
    const {loading, data:profile} = useProfile();

    useEffect(() => {
        fetchOrders();
    }, []);

    function fetchOrders() {
        setLoadingOrders(true);
        fetch('/api/orders').then(res => {
            res.json().then(orders => {
                setOrders(orders.reverse());
                setLoadingOrders(false);
            })
        })
    }

    return (
        <section className="mt-8 max-w-2xl mx-auto">
            <UserTabs isAdmin={profile.admin} />
            <div className="mt-8">
            {loadingOrders && (
                <div>Loading orders...</div>
            )}
            {orders?.length > 0 && orders.map(order => (
                <div
                    key={order._id} 
                    className="bg-gray-100 mb-2 p-4 rounded-lg md:flex items-center gap-6">
                    <div className="text-gray-500">
                        {order.userEmail}
                    </div>
                    <div>
                        <div className="">{order.userEmail}</div>
                        Menu Items: {order.cartProducts.map(p => p.name).join(', ')}
                    </div>
                    <div className="text-right flex gap-2 items-center whitespace-nowrap">
                        <span className={(order.paid ? 'bg-green-500' : 'bg-red-400') 
                                        + 'p-2 rounded-md text-white'}>
                        </span>
                            {order.paid ? 'Paid' : 'Not Paid'}
                    </div>
                    <div>
                        {order.createdAt}
                    </div>
                    <div className="text-right">
                        {/* {dbTimeForHuman(order.CreatedAt)} */}
                        <Link href={"/orders/"+order._id} className=""button>
                            Show order
                        </Link>
                    </div>
                </div>
            ))}
            </div>
        </section>
    );
}