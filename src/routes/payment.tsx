import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { CreditCard, Lock } from "lucide-react";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useCart } from "@/lib/cart";
import { track } from "@/lib/track";

export const Route = createFileRoute("/payment")({
  head: () => ({ meta: [{ title: "Payment — VitaCore" }] }),
  component: PaymentPage,
});

function PaymentPage() {
  const { items, subtotal, clear } = useCart();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ holder: "", number: "", expiry: "", cvv: "", billing: true });

  useEffect(() => { track("page_view", { page: "payment" }); }, []);

  const shipping = subtotal > 49 ? 0 : 6.99;
  const tax = +(subtotal * 0.08).toFixed(2);
  const total = +(subtotal + shipping + tax).toFixed(2);

  const pay = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    track("add_payment_info", { value: total });
    setTimeout(() => {
      track("purchase", {
        value: total,
        currency: "USD",
        items: items.map((i) => ({ id: i.product.product_id, qty: i.quantity })),
      });
      clear();
      navigate({ to: "/order-success" });
    }, 1400);
  };

  const set = (k: string, v: any) => setForm((f) => ({ ...f, [k]: v }));

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="mx-auto max-w-6xl px-6 py-10">
        <h1 className="font-display text-3xl font-extrabold sm:text-4xl">Payment</h1>
        <div className="mt-2 flex items-center gap-2 text-sm text-muted-foreground">
          <Lock className="h-4 w-4 text-primary" /> Secure checkout (this is a demo — no real payment is processed)
        </div>

        <form onSubmit={pay} className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,1fr)_380px]">
          <section className="rounded-3xl border border-border bg-card p-6 shadow-card">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-bold">Payment Method</h2>
              <div className="flex gap-2 text-xs font-bold text-muted-foreground">
                <span className="rounded-md bg-secondary px-2 py-1">VISA</span>
                <span className="rounded-md bg-secondary px-2 py-1">MC</span>
                <span className="rounded-md bg-secondary px-2 py-1">AMEX</span>
                <span className="rounded-md bg-secondary px-2 py-1">DISC</span>
              </div>
            </div>

            <div className="mt-6 space-y-4">
              <div>
                <Label htmlFor="card_holder">Card Holder</Label>
                <Input id="card_holder" required value={form.holder} onChange={(e) => set("holder", e.target.value)} className="h-12 rounded-xl" />
              </div>
              <div>
                <Label htmlFor="card_number">Card Number</Label>
                <div className="relative">
                  <CreditCard className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    id="card_number"
                    required
                    placeholder="4242 4242 4242 4242"
                    inputMode="numeric"
                    value={form.number}
                    onChange={(e) => set("number", e.target.value)}
                    className="h-12 rounded-xl pl-10"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="card_expiry">Expiry</Label>
                  <Input id="card_expiry" required placeholder="MM/YY" value={form.expiry} onChange={(e) => set("expiry", e.target.value)} className="h-12 rounded-xl" />
                </div>
                <div>
                  <Label htmlFor="card_cvv">CVV</Label>
                  <Input id="card_cvv" required placeholder="123" inputMode="numeric" value={form.cvv} onChange={(e) => set("cvv", e.target.value)} className="h-12 rounded-xl" />
                </div>
              </div>
              <label className="flex items-center gap-3 pt-2 text-sm">
                <input id="billing_same" type="checkbox" checked={form.billing} onChange={(e) => set("billing", e.target.checked)} className="h-5 w-5 rounded" />
                Billing address same as shipping
              </label>
            </div>
          </section>

          <aside className="h-fit rounded-3xl border border-border bg-gradient-card p-6 shadow-card lg:sticky lg:top-24">
            <h2 className="text-lg font-bold">Order Summary</h2>
            <div className="mt-4 max-h-56 space-y-3 overflow-auto">
              {items.map(({ product, quantity }) => (
                <div key={product.product_id} className="flex items-center gap-3 text-sm">
                  <img src={product.image} alt="" className="h-12 w-12 rounded-lg object-cover" />
                  <div className="min-w-0 flex-1">
                    <div className="truncate font-medium">{product.product_name}</div>
                    <div className="text-xs text-muted-foreground">Qty {quantity}</div>
                  </div>
                  <div className="font-semibold">${(product.price * quantity).toFixed(2)}</div>
                </div>
              ))}
            </div>
            <div className="mt-4 space-y-2 border-t border-border pt-4 text-sm">
              <div className="flex justify-between"><span className="text-muted-foreground">Subtotal</span><span>${subtotal.toFixed(2)}</span></div>
              <div className="flex justify-between"><span className="text-muted-foreground">Shipping</span><span>{shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}</span></div>
              <div className="flex justify-between"><span className="text-muted-foreground">Tax</span><span>${tax.toFixed(2)}</span></div>
            </div>
            <div className="mt-4 flex justify-between border-t border-border pt-4">
              <span className="font-semibold">Total</span>
              <span className="font-display text-2xl font-extrabold">${total.toFixed(2)}</span>
            </div>
            <Button
              id="payment_button"
              data-event="add_payment_info"
              type="submit"
              size="lg"
              disabled={loading || items.length === 0}
              className="mt-6 w-full rounded-full bg-gradient-primary shadow-glow"
            >
              {loading ? "Processing..." : `Pay $${total.toFixed(2)}`}
            </Button>
            <p className="mt-2 text-center text-xs text-muted-foreground">
              <Lock className="mr-1 inline h-3 w-3" /> 256-bit encrypted — demo only
            </p>
          </aside>
        </form>
      </div>
      <Footer />
    </div>
  );
}
