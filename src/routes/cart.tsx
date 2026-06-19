import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Minus, Plus, ShoppingBag, Trash2 } from "lucide-react";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useCart } from "@/lib/cart";
import { track } from "@/lib/track";

export const Route = createFileRoute("/cart")({
  head: () => ({ meta: [{ title: "Your Cart — VitaCore" }] }),
  component: CartPage,
});

function CartPage() {
  const { items, update, remove, subtotal } = useCart();
  const [coupon, setCoupon] = useState("");
  const [applied, setApplied] = useState(0);

  useEffect(() => {
    track("view_cart", { value: subtotal, items: items.length });
  }, []);

  const shipping = subtotal > 49 || subtotal === 0 ? 0 : 6.99;
  const tax = +(subtotal * 0.08).toFixed(2);
  const total = +(subtotal + shipping + tax - applied).toFixed(2);

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="mx-auto max-w-6xl px-6 py-10">
        <h1 className="font-display text-3xl font-extrabold sm:text-4xl">Your Cart</h1>

        {items.length === 0 ? (
          <div className="mt-12 rounded-3xl border border-border bg-card p-12 text-center shadow-card">
            <ShoppingBag className="mx-auto h-12 w-12 text-muted-foreground" />
            <p className="mt-4 text-muted-foreground">Your cart is empty.</p>
            <Link to="/products">
              <Button className="mt-6 rounded-full">Continue Shopping</Button>
            </Link>
          </div>
        ) : (
          <div className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,1fr)_380px]">
            <div className="space-y-4">
              {items.map(({ product, quantity }) => (
                <div
                  key={product.product_id}
                  className="grid grid-cols-[80px_minmax(0,1fr)_auto] items-center gap-4 rounded-2xl border border-border bg-card p-4 shadow-card sm:grid-cols-[100px_minmax(0,1fr)_auto_auto]"
                >
                  <img src={product.image} alt={product.product_name} className="h-20 w-20 rounded-xl object-cover sm:h-24 sm:w-24" />
                  <div className="min-w-0">
                    <div className="text-xs text-muted-foreground">{product.category}</div>
                    <Link to="/products/$id" params={{ id: product.slug }} className="line-clamp-2 font-semibold hover:text-primary">
                      {product.product_name}
                    </Link>
                    <div className="mt-1 text-sm font-semibold">${product.price}</div>
                  </div>
                  <div className="flex items-center gap-1 rounded-full border border-border p-1">
                    <button onClick={() => update(product.product_id, quantity - 1)} className="grid h-8 w-8 place-items-center rounded-full hover:bg-secondary">
                      <Minus className="h-3 w-3" />
                    </button>
                    <span className="w-8 text-center text-sm font-semibold">{quantity}</span>
                    <button onClick={() => update(product.product_id, quantity + 1)} className="grid h-8 w-8 place-items-center rounded-full hover:bg-secondary">
                      <Plus className="h-3 w-3" />
                    </button>
                  </div>
                  <div className="col-span-3 flex items-center justify-between sm:col-span-1 sm:flex-col sm:items-end sm:gap-2">
                    <div className="font-bold">${(product.price * quantity).toFixed(2)}</div>
                    <button
                      id="remove_from_cart"
                      data-event="remove_from_cart"
                      data-product-id={product.product_id}
                      onClick={() => remove(product.product_id)}
                      className="text-muted-foreground hover:text-destructive"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <aside className="h-fit rounded-3xl border border-border bg-gradient-card p-6 shadow-card lg:sticky lg:top-24">
              <h2 className="text-lg font-bold">Order Summary</h2>
              <div className="mt-4 flex gap-2">
                <Input
                  id="coupon_input"
                  placeholder="Coupon code"
                  value={coupon}
                  onChange={(e) => setCoupon(e.target.value)}
                  className="rounded-full"
                />
                <Button
                  variant="outline"
                  className="rounded-full"
                  onClick={() => {
                    if (coupon.trim().toUpperCase() === "SAVE10") {
                      setApplied(+(subtotal * 0.1).toFixed(2));
                    } else setApplied(0);
                  }}
                >
                  Apply
                </Button>
              </div>
              <p className="mt-1 text-xs text-muted-foreground">Try code: SAVE10</p>

              <div className="mt-6 space-y-2 border-t border-border pt-4 text-sm">
                <Row label="Subtotal" value={`$${subtotal.toFixed(2)}`} />
                <Row label="Shipping" value={shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`} />
                <Row label="Tax" value={`$${tax.toFixed(2)}`} />
                {applied > 0 && <Row label="Discount" value={`-$${applied.toFixed(2)}`} />}
              </div>
              <div className="mt-4 flex items-center justify-between border-t border-border pt-4">
                <span className="font-semibold">Total</span>
                <span className="font-display text-2xl font-extrabold">${total.toFixed(2)}</span>
              </div>
              <Link
                to="/checkout"
                onClick={() => {
                  track("initiate_checkout", {
                    currency: "USD",
                    value: total,
                    coupon: applied > 0 ? coupon.trim().toUpperCase() : undefined,
                    ecommerce: {
                      currency: "USD",
                      value: total,
                      items: items.map(({ product, quantity }) => ({
                        item_id: product.product_id,
                        item_name: product.product_name,
                        item_brand: product.brand,
                        item_category: product.category,
                        price: product.price,
                        quantity,
                      })),
                    },
                  });
                }}
              >
                <Button
                  id="checkout_button"
                  data-event="initiate_checkout"
                  size="lg"
                  className="mt-6 w-full rounded-full bg-gradient-primary shadow-glow"
                >
                  Proceed to Checkout
                </Button>
              </Link>
            </aside>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between">
      <span className="text-muted-foreground">{label}</span>
      <span className="font-medium">{value}</span>
    </div>
  );
}
