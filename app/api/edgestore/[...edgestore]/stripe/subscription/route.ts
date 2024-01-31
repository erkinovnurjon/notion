import stripe from "@/lib/stripe";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const public_domain = process.env.NEXT_PUBLIC_DOMAIN;
    const { email, userId, priceID } = await req.json();

    const isExistingCustomer = await stripe.customers.list({ email });

    let customer;
    if (isExistingCustomer.data.length) {
      customer = isExistingCustomer.data[0];
    }

    if (!customer) {
      customer = await stripe.customers.create({
        email,
        metadata: { userId },
      });
    }

    const subscription = await stripe.checkout.sessions.create({
      mode: "subscription",
      payment_method_types: ["card"],
      line_items: [{ price: priceID, quantity: 1 }],
      customer: customer.id,
      success_url: `${public_domain}/documents`,
    });

    return NextResponse.json(subscription.url);
  } catch (error) {
    return NextResponse.json("Something went wrong.Plesase try again", {
      status: 500,
    });
  }
}
