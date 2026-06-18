import { createFileRoute, Link, useParams } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Check, Minus, Plus, Shield, Star, Truck } from "lucide-react";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { ProductCard } from "@/components/site/ProductCard";
import { Button } from "@/components/ui/button";
import { getProduct, products } from "@/lib/products";
import { useCart } from "@/lib/cart";
import { track } from "@/lib/track";
import { useNavigate } from "@tanstack/react-router";

export const Route = createFileRoute("/products/$id")({
  head: ({ params }) => {
    const p = getProduct(params.id);
    return {
      meta: [
        { title: p ? `${p.product_name} — VitaCore` : "Product — VitaCore" },
        { name: "description", content: p?.description ?? "Premium supplement." },
        { property: "og:image", content: p?.image ?? "" },
      ],
    };
  },
  component: ProductDetail,
});

function ProductDetail() {
  const { id } = useParams({ from: "/products/$id" });
  const product = getProduct(id);
  const [qty, setQty] = useState(1);
  const [tab, setTab] = useState<"description" | "ingredients" | "nutrition" | "shipping">("description");
  const { add } = useCart();
  const navigate = useNavigate();

  useEffect(() => {
    if (product) track("view_content", { product_id: product.product_id, name: product.product_name });
  }, [product]);

  if (!product) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <div className="mx-auto max-w-3xl px-6 py-24 text-center">
          <h1 className="text-2xl font-bold">Product not found</h1>
          <Link to="/products" className="mt-4 inline-block text-primary underline">
            Back to shop
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const related = products.filter((p) => p.category === product.category && p.product_id !== product.product_id).slice(0, 4);
  const discount = Math.round(((product.old_price - product.price) / product.old_price) * 100);

  const buyNow = () => {
    add(product, qty);
    track("buy_now", { product_id: product.product_id });
    navigate({ to: "/checkout" });
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <div className="overflow-hidden rounded-3xl bg-secondary/30 shadow-card">
              <img src={product.image} alt={product.product_name} className="aspect-square w-full object-cover" />
            </div>
            <div className="mt-4 grid grid-cols-4 gap-3">
              {[0, 1, 2, 3].map((i) => (
                <button key={i} className="overflow-hidden rounded-2xl border border-border bg-secondary/30 hover:border-primary">
                  <img src={product.image} alt="" className="aspect-square w-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          <div>
            <div className="text-sm font-medium uppercase tracking-wide text-primary">{product.category}</div>
            <h1 className="mt-2 font-display text-3xl font-extrabold sm:text-4xl">{product.product_name}</h1>
            <div className="mt-3 flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`h-4 w-4 ${i < Math.round(product.rating) ? "fill-accent text-accent" : "text-muted"}`} />
                ))}
              </div>
              <span className="text-sm font-semibold">{product.rating}</span>
              <span className="text-sm text-muted-foreground">({product.reviews} reviews)</span>
            </div>

            <div className="mt-6 flex items-baseline gap-3">
              <span className="font-display text-4xl font-extrabold">${product.price}</span>
              <span className="text-lg text-muted-foreground line-through">${product.old_price}</span>
              <span className="rounded-full bg-destructive/10 px-2.5 py-1 text-xs font-bold text-destructive">
                Save {discount}%
              </span>
            </div>

            <p className="mt-5 text-muted-foreground">{product.description}</p>

            <div className="mt-5 flex items-center gap-2 text-sm">
              <Check className="h-4 w-4 text-success" />
              <span className="font-medium">In stock</span>
              <span className="text-muted-foreground">— {product.stock} units available</span>
            </div>

            <div className="mt-6 flex items-center gap-4">
              <div className="flex items-center gap-1 rounded-full border border-border p-1">
                <button onClick={() => setQty((q) => Math.max(1, q - 1))} className="grid h-9 w-9 place-items-center rounded-full hover:bg-secondary">
                  <Minus className="h-4 w-4" />
                </button>
                <span id="product_qty" className="w-10 text-center font-semibold">{qty}</span>
                <button onClick={() => setQty((q) => q + 1)} className="grid h-9 w-9 place-items-center rounded-full hover:bg-secondary">
                  <Plus className="h-4 w-4" />
                </button>
              </div>
              <Button
                id="add_to_cart"
                data-event="add_to_cart"
                data-product-id={product.product_id}
                size="lg"
                onClick={() => add(product, qty)}
                className="flex-1 rounded-full"
              >
                Add to Cart
              </Button>
            </div>
            <Button
              id="buy_now"
              data-event="initiate_checkout"
              data-product-id={product.product_id}
              size="lg"
              onClick={buyNow}
              className="mt-3 w-full rounded-full bg-gradient-primary shadow-glow"
            >
              Buy Now
            </Button>

            <div className="mt-6 grid grid-cols-2 gap-3">
              <div className="flex items-center gap-3 rounded-2xl border border-border bg-card p-4">
                <Truck className="h-5 w-5 text-primary" />
                <div className="text-sm">Free shipping over $49</div>
              </div>
              <div className="flex items-center gap-3 rounded-2xl border border-border bg-card p-4">
                <Shield className="h-5 w-5 text-primary" />
                <div className="text-sm">30-day guarantee</div>
              </div>
            </div>

            <h3 className="mt-8 text-sm font-semibold uppercase tracking-wide text-muted-foreground">Key Benefits</h3>
            <ul className="mt-3 grid gap-2 sm:grid-cols-2">
              {product.benefits.map((b) => (
                <li key={b} className="flex items-center gap-2 text-sm">
                  <span className="grid h-5 w-5 place-items-center rounded-full bg-primary/15 text-primary">
                    <Check className="h-3 w-3" />
                  </span>
                  {b}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Tabs */}
        <div className="mt-16">
          <div className="flex flex-wrap gap-2 border-b border-border">
            {(["description", "ingredients", "nutrition", "shipping"] as const).map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={`-mb-px border-b-2 px-4 py-3 text-sm font-semibold capitalize ${
                  tab === t ? "border-primary text-primary" : "border-transparent text-muted-foreground hover:text-foreground"
                }`}
              >
                {t}
              </button>
            ))}
          </div>
          <div className="prose mt-6 max-w-3xl text-muted-foreground">
            {tab === "description" && <p>{product.description}</p>}
            {tab === "ingredients" && (
              <ul className="list-disc pl-5">{product.ingredients.map((i) => <li key={i}>{i}</li>)}</ul>
            )}
            {tab === "nutrition" && (
              <table className="w-full text-sm">
                <tbody>
                  {product.nutrition.map((n) => (
                    <tr key={n.label} className="border-b border-border">
                      <td className="py-2 font-medium text-foreground">{n.label}</td>
                      <td className="py-2 text-right">{n.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
            {tab === "shipping" && (
              <p>
                Free 2-day shipping on US orders over $49. Standard delivery 3–5 business days.
                30-day money-back guarantee on all purchases.
              </p>
            )}
          </div>
        </div>

        {/* Related */}
        <div className="mt-20">
          <h2 className="font-display text-2xl font-bold">You may also like</h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {related.map((p) => <ProductCard key={p.product_id} product={p} />)}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
