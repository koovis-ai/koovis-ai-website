import { NextResponse } from "next/server";
import { Resend } from "resend";

const isValidEmail = (email: string) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

const VALID_PRODUCTS = ["wealthpilot", "studios"] as const;
type Product = (typeof VALID_PRODUCTS)[number];
const PRODUCT_LABEL: Record<Product, string> = {
  wealthpilot: "WealthPilot",
  studios: "Koovis Studios",
};

export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  try {
    if (!process.env.RESEND_API_KEY) {
      console.error("Missing RESEND_API_KEY environment variable");
      return NextResponse.json(
        { error: "Email service is not configured." },
        { status: 503 }
      );
    }

    const { email, product } = await request.json();

    if (!email || !product) {
      return NextResponse.json(
        { error: "Email and product are required." },
        { status: 400 }
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        { error: "Invalid email format." },
        { status: 400 }
      );
    }

    if (!VALID_PRODUCTS.includes(product)) {
      return NextResponse.json(
        { error: "Invalid product." },
        { status: 400 }
      );
    }

    const label = PRODUCT_LABEL[product as Product];
    const resend = new Resend(process.env.RESEND_API_KEY);

    await resend.emails.send({
      from: "Koovis AI <info@koovis.ai>",
      to: [process.env.CONTACT_EMAIL ?? "info@koovis.ai"],
      subject: `Waitlist: ${label} — ${email}`,
      replyTo: email,
      text: `New waitlist signup.\n\nProduct: ${label}\nEmail: ${email}\n`,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Waitlist error:", error);
    return NextResponse.json(
      { error: "Failed to join waitlist." },
      { status: 500 }
    );
  }
}
