import { Link } from "@tanstack/react-router";
import { Star } from "lucide-react";
import type { Product } from "@/lib/products";
import { Button } from "@/components/ui/button";
import { useCart } from "@/lib/cart";
import { track } from "@/lib/track";

export function ProductCard({ product }: { product: Product }) {
  const { add } = useCart();
  const discount = Math.round(((product.old_price - product.price) / product.old_price) * 100);

  return (
    <div
      id="product_card"
      data-event="view_content"
      data-product-id={product.product_id}
      className="group relative flex flex-col overflow-hidden rounded-3xl border border-border bg-gradient-card shadow-card hover-lift"
    >
      <Link
        to="/products/$id"
        params={{ id: product.slug }}
        id="product_view"
        data-event="view_content"
        data-product-id={product.product_id}
        onClick={() => track("view_content", { product_id: product.product_id })}
        className="relative block aspect-square overflow-hidden bg-secondary/40"
      >
        {product.badge && (
          <span className="absolute left-3 top-3 z-10 rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-foreground shadow-soft">
            {product.badge}
          </span>
        )}
        {discount > 0 && (
          <span className="absolute right-3 top-3 z-10 rounded-full bg-destructive px-3 py-1 text-xs font-bold text-destructive-foreground">
            -{discount}%
          </span>
        )}
        <img
          src={product.image}
          alt={product.product_name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </Link>
      <div className="flex flex-1 flex-col p-5">
        <div className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
          {product.category}
        </div>
        <Link
          to="/products/$id"
          params={{ id: product.slug }}
          className="mt-1 line-clamp-2 font-display text-base font-semibold leading-snug hover:text-primary"
        >
          {product.product_name}
        </Link>
        <div className="mt-2 flex items-center gap-1">
          <Star className="h-4 w-4 fill-accent text-accent" />
          <span className="text-sm font-medium">{product.rating}</span>
          <span className="text-xs text-muted-foreground">({product.reviews})</span>
        </div>
        <div className="mt-3 flex items-baseline gap-2">
          <span className="font-display text-xl font-bold text-foreground">${product.price}</span>
          <span className="text-sm text-muted-foreground line-through">${product.old_price}</span>
        </div>
        <Button
          id="add_to_cart"
          data-event="add_to_cart"
          data-product-id={product.product_id}
          onClick={() => add(product)}
          className="mt-4 w-full rounded-full"
        >
          Add to Cart
        </Button>
      </div>
    </div>
  );
}
