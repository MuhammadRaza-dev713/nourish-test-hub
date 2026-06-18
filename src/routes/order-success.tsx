import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useMemo } from "react";
import { CheckCircle2, Package } from "lucide-react";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { Button } from "@/components/ui/button";
import { track } from "@/lib/track";

export const Route = createFileRoute("/order-success")({
  head: () => ({ meta: [{ title: "Order Confirmed — VitaCore" }] }),
  component: OrderSuccess,
});

function OrderSuccess() {
  const orderNumber = useMemo(() => `VC-${Math.floor(100000 + Math.random() * 900000)}`, []);

  useEffect(() => {
    track("purchase_complete", { order: orderNumber });
  }, [orderNumber]);

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="mx-auto max-w-2xl px-6 py-20 text-center">
        <div className="mx-auto grid h-24 w-24 place-items-center rounded-full bg-gradient-primary shadow-glow animate-scale-in">
          <CheckCircle2 className="h-12 w-12 text-primary-foreground" />
        </div>
        <h1 id="purchase_complete" className="mt-8 font-display text-4xl font-extrabold sm:text-5xl">
          Order Confirmed!
        </h1>
        <p className="mt-3 text-lg text-muted-foreground">
          Thank you for your purchase. We've sent a confirmation to your email.
        </p>

        <div className="mt-10 rounded-3xl border border-border bg-card p-8 text-left shadow-card">
          <div className="flex items-center gap-3">
            <div className="grid h-12 w-12 place-items-center rounded-2xl bg-primary/10 text-primary">
              <Package className="h-6 w-6" />
            </div>
            <div>
              <div className="text-xs uppercase tracking-wide text-muted-foreground">Order Number</div>
              <div className="font-display text-xl font-bold">{orderNumber}</div>
            </div>
          </div>
          <div className="mt-6 grid gap-3 border-t border-border pt-6 text-sm sm:grid-cols-2">
            <div>
              <div className="text-muted-foreground">Estimated Delivery</div>
              <div className="font-semibold">3–5 business days</div>
            </div>
            <div>
              <div className="text-muted-foreground">Shipping Method</div>
              <div className="font-semibold">Standard Delivery</div>
            </div>
            <div>
              <div className="text-muted-foreground">Payment</div>
              <div className="font-semibold">Card ending •••• 4242</div>
            </div>
            <div>
              <div className="text-muted-foreground">Status</div>
              <div className="font-semibold text-primary">Confirmed</div>
            </div>
          </div>
        </div>

        <Link to="/products">
          <Button id="continue_shopping" size="lg" className="mt-10 rounded-full bg-gradient-primary px-8 shadow-glow">
            Continue Shopping
          </Button>
        </Link>
      </div>
      <Footer />
    </div>
  );
}
