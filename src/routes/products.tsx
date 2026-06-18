import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { Search } from "lucide-react";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { ProductCard } from "@/components/site/ProductCard";
import { Input } from "@/components/ui/input";
import { products } from "@/lib/products";
import { track } from "@/lib/track";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Shop Premium Supplements — VitaCore" },
      { name: "description", content: "Browse premium protein, vitamins, collagen, pre-workout and more." },
    ],
  }),
  component: ProductList,
});

function ProductList() {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState<string>("All");
  const [sort, setSort] = useState("popular");
  const [maxPrice, setMaxPrice] = useState(100);

  useEffect(() => {
    track("page_view", { page: "products" });
  }, []);

  const cats = ["All", ...Array.from(new Set(products.map((p) => p.category)))];

  const filtered = useMemo(() => {
    let list = products.filter((p) => p.price <= maxPrice);
    if (cat !== "All") list = list.filter((p) => p.category === cat);
    if (q) {
      list = list.filter((p) =>
        (p.product_name + p.category + p.brand).toLowerCase().includes(q.toLowerCase()),
      );
      track("search", { query: q });
    }
    if (sort === "price_low") list = [...list].sort((a, b) => a.price - b.price);
    if (sort === "price_high") list = [...list].sort((a, b) => b.price - a.price);
    if (sort === "rating") list = [...list].sort((a, b) => b.rating - a.rating);
    return list;
  }, [q, cat, sort, maxPrice]);

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="bg-gradient-hero">
        <div className="mx-auto max-w-7xl px-6 py-14">
          <h1 className="font-display text-4xl font-extrabold sm:text-5xl">All Products</h1>
          <p className="mt-2 text-muted-foreground">Premium supplements for every goal.</p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="grid gap-8 lg:grid-cols-[260px_minmax(0,1fr)]">
          {/* Filters */}
          <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
            <div className="rounded-2xl border border-border bg-card p-5 shadow-card">
              <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-muted-foreground">Category</h3>
              <div className="flex flex-wrap gap-2 lg:flex-col">
                {cats.map((c) => (
                  <button
                    key={c}
                    id={`filter_cat_${c}`}
                    onClick={() => setCat(c)}
                    className={`rounded-full px-3 py-1.5 text-sm font-medium transition-colors lg:text-left ${
                      cat === c ? "bg-primary text-primary-foreground" : "bg-secondary hover:bg-secondary/70"
                    }`}
                  >
                    {c}
                  </button>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-card p-5 shadow-card">
              <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                Max Price: ${maxPrice}
              </h3>
              <input
                id="filter_price"
                type="range"
                min={10}
                max={100}
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
                className="w-full accent-[var(--primary)]"
              />
            </div>
          </aside>

          {/* Grid */}
          <div>
            <div className="mb-6 flex flex-wrap items-center gap-3">
              <div className="relative flex-1 min-w-[200px]">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  id="search_input"
                  data-event="search"
                  placeholder="Search products..."
                  value={q}
                  onChange={(e) => setQ(e.target.value)}
                  className="h-11 rounded-full pl-10"
                />
              </div>
              <select
                id="sort_select"
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                className="h-11 rounded-full border border-border bg-card px-4 text-sm"
              >
                <option value="popular">Most Popular</option>
                <option value="price_low">Price: Low to High</option>
                <option value="price_high">Price: High to Low</option>
                <option value="rating">Top Rated</option>
              </select>
            </div>

            <div className="text-sm text-muted-foreground">{filtered.length} products</div>
            <div className="mt-4 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
              {filtered.map((p) => (
                <ProductCard key={p.product_id} product={p} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
