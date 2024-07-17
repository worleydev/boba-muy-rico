const stripe = require('stripe')(process.env.STRIPE_SK);
import { buffer } from 'micro';
import { Order } from '@/models/Order';

export async function POST(req) {
    const sig = req.headers.get('stripe-signature');
    let event;

    try {
        const reqBuffer = await req.text();
        const signSecret  = process.env.STRIPE_SIGN_SC;
        event = stripe.webhooks.constructEvent(reqBuffer, sig, signSecret);
    } catch (e) {
        console.error('Stripe Error');
        return Response.json(e, {status: 400});
    }

    if (event.type === 'checkout.session.completed') {
        const orderId = event?.data?.object?.metadata?.orderId;
        const isPaid = event?.data?.object?.payment_status === 'paid';
        if (isPaid) {
            await Order.updateOne({_id:orderId}, {paid: true});
        }
    }

    console.log(event);

    return Response.json('ok', {status: 200});
}