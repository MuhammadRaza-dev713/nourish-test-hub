import { Link } from "@tanstack/react-router";
import { Heart, Menu, Search, ShoppingCart, X } from "lucide-react";
import { useState } from "react";
import { useCart } from "@/lib/cart";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const { count } = useCart();
  const [open, setOpen] = useState(false);

  const nav = [
    { to: "/", label: "Home" },
    { to: "/products", label: "Shop" },
    { to: "/quiz", label: "Health Quiz" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center gap-4 px-4 sm:px-6">
        <Link to="/" id="nav_logo" className="flex shrink-0 items-center gap-2">
          <div className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-primary shadow-soft">
            <Heart className="h-5 w-5 text-primary-foreground" fill="currentColor" />
          </div>
          <span className="font-display text-lg font-bold tracking-tight">VitaCore</span>
        </Link>

        <nav className="ml-6 hidden items-center gap-1 md:flex">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              id={`nav_${n.label.toLowerCase().replace(/\s/g, "_")}`}
              className="rounded-full px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              activeProps={{ className: "bg-secondary text-foreground" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-2">
          <button
            id="nav_search"
            className="hidden h-10 w-10 place-items-center rounded-full hover:bg-secondary sm:grid"
            aria-label="Search"
          >
            <Search className="h-5 w-5" />
          </button>
          <Link
            to="/cart"
            id="cart_icon"
            data-event="view_cart"
            className="relative grid h-10 w-10 place-items-center rounded-full hover:bg-secondary"
            aria-label="Cart"
          >
            <ShoppingCart className="h-5 w-5" />
            {count > 0 && (
              <span className="absolute -right-1 -top-1 grid h-5 min-w-[1.25rem] place-items-center rounded-full bg-primary px-1 text-[11px] font-bold text-primary-foreground">
                {count}
              </span>
            )}
          </Link>
          <Link to="/quiz" className="hidden sm:block">
            <Button id="nav_quiz_cta" data-event="lead" className="rounded-full">
              Take Quiz
            </Button>
          </Link>
          <button
            onClick={() => setOpen((o) => !o)}
            className="grid h-10 w-10 place-items-center rounded-full hover:bg-secondary md:hidden"
            aria-label="Menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border bg-background md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-1 p-4">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="rounded-xl px-4 py-3 text-base font-medium hover:bg-secondary"
              >
                {n.label}
              </Link>
            ))}
            <Link to="/quiz" onClick={() => setOpen(false)}>
              <Button className="mt-2 w-full rounded-full">Take Free Health Quiz</Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
