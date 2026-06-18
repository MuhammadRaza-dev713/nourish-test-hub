import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useCart } from "@/lib/cart";
import { track } from "@/lib/track";

export const Route = createFileRoute("/checkout")({
  head: () => ({ meta: [{ title: "Checkout — VitaCore" }] }),
  component: Checkout,
});

function Checkout() {
  const { items, subtotal } = useCart();
  const navigate = useNavigate();
  const [shipping, setShipping] = useState<"standard" | "express">("standard");
  const [form, setForm] = useState({
    firstName: "", lastName: "", email: "", phone: "",
    address: "", apartment: "", city: "", state: "", zip: "", country: "United States",
  });

  useEffect(() => { track("page_view", { page: "checkout" }); }, []);

  const shippingCost = shipping === "express" ? 14.99 : subtotal > 49 ? 0 : 6.99;
  const tax = +(subtotal * 0.08).toFixed(2);
  const total = +(subtotal + shippingCost + tax).toFixed(2);

  const onContinue = (e: React.FormEvent) => {
    e.preventDefault();
    track("add_shipping_info", { method: shipping, value: total });
    navigate({ to: "/payment" });
  };

  const set = (k: string, v: string) => setForm((f) => ({ ...f, [k]: v }));

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="mx-auto max-w-6xl px-6 py-10">
        <h1 className="font-display text-3xl font-extrabold sm:text-4xl">Checkout</h1>
        <form onSubmit={onContinue} className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,1fr)_380px]">
          <div className="space-y-8">
            <section className="rounded-3xl border border-border bg-card p-6 shadow-card">
              <h2 className="text-lg font-bold">Shipping Information</h2>
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                <Field id="ship_first_name" label="First Name" value={form.firstName} onChange={(v) => set("firstName", v)} required />
                <Field id="ship_last_name" label="Last Name" value={form.lastName} onChange={(v) => set("lastName", v)} required />
                <Field id="ship_email" label="Email" type="email" value={form.email} onChange={(v) => set("email", v)} required />
                <Field id="ship_phone" label="Phone" type="tel" value={form.phone} onChange={(v) => set("phone", v)} required />
                <div className="sm:col-span-2">
                  <Field id="ship_address" label="Address" value={form.address} onChange={(v) => set("address", v)} required />
                </div>
                <div className="sm:col-span-2">
                  <Field id="ship_apartment" label="Apartment (optional)" value={form.apartment} onChange={(v) => set("apartment", v)} />
                </div>
                <Field id="ship_city" label="City" value={form.city} onChange={(v) => set("city", v)} required />
                <Field id="ship_state" label="State" value={form.state} onChange={(v) => set("state", v)} required />
                <Field id="ship_zip" label="ZIP" value={form.zip} onChange={(v) => set("zip", v)} required />
                <Field id="ship_country" label="Country" value={form.country} onChange={(v) => set("country", v)} required />
              </div>
            </section>

            <section className="rounded-3xl border border-border bg-card p-6 shadow-card">
              <h2 className="text-lg font-bold">Shipping Method</h2>
              <div className="mt-4 grid gap-3">
                {[
                  { id: "standard", t: "Standard", d: "3–5 business days", p: subtotal > 49 ? "Free" : "$6.99" },
                  { id: "express", t: "Express", d: "1–2 business days", p: "$14.99" },
                ].map((m) => (
                  <label
                    key={m.id}
                    className={`flex cursor-pointer items-center justify-between rounded-2xl border-2 p-4 ${
                      shipping === m.id ? "border-primary bg-primary/5" : "border-border hover:border-primary/50"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <input
                        id={`shipping_${m.id}`}
                        type="radio"
                        checked={shipping === m.id}
                        onChange={() => setShipping(m.id as any)}
                        className="h-4 w-4 accent-[var(--primary)]"
                      />
                      <div>
                        <div className="font-semibold">{m.t}</div>
                        <div className="text-xs text-muted-foreground">{m.d}</div>
                      </div>
                    </div>
                    <span className="font-semibold">{m.p}</span>
                  </label>
                ))}
              </div>
            </section>
          </div>

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
              <div className="flex justify-between"><span className="text-muted-foreground">Shipping</span><span>{shippingCost === 0 ? "Free" : `$${shippingCost.toFixed(2)}`}</span></div>
              <div className="flex justify-between"><span className="text-muted-foreground">Tax</span><span>${tax.toFixed(2)}</span></div>
            </div>
            <div className="mt-4 flex justify-between border-t border-border pt-4">
              <span className="font-semibold">Total</span>
              <span className="font-display text-2xl font-extrabold">${total.toFixed(2)}</span>
            </div>
            <Button
              id="continue_to_payment"
              data-event="add_shipping_info"
              type="submit"
              size="lg"
              className="mt-6 w-full rounded-full bg-gradient-primary shadow-glow"
            >
              Continue to Payment
            </Button>
          </aside>
        </form>
      </div>
      <Footer />
    </div>
  );
}

function Field({ id, label, value, onChange, type = "text", required }: { id: string; label: string; value: string; onChange: (v: string) => void; type?: string; required?: boolean }) {
  return (
    <div>
      <Label htmlFor={id}>{label}</Label>
      <Input id={id} type={type} value={value} required={required} onChange={(e) => onChange(e.target.value)} className="h-11 rounded-xl" />
    </div>
  );
}
