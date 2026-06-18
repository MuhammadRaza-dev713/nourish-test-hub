import { Link } from "@tanstack/react-router";
import { Heart, Instagram, Twitter, Youtube } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border bg-secondary/40">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-2">
            <div className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-primary">
              <Heart className="h-5 w-5 text-primary-foreground" fill="currentColor" />
            </div>
            <span className="font-display text-lg font-bold">VitaCore</span>
          </div>
          <p className="mt-3 max-w-xs text-sm text-muted-foreground">
            Premium supplements personalized to your goals. Crafted by experts, trusted by 200,000+ customers.
          </p>
          <div className="mt-4 flex gap-3">
            {[Instagram, Twitter, Youtube].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="grid h-9 w-9 place-items-center rounded-full bg-background hover:bg-primary hover:text-primary-foreground"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        {[
          { title: "Shop", links: [["All Products", "/products"], ["Health Quiz", "/quiz"], ["Best Sellers", "/products"]] },
          { title: "Support", links: [["Contact", "#"], ["Shipping", "#"], ["Returns", "#"]] },
          { title: "Company", links: [["About", "#"], ["Science", "#"], ["Reviews", "#"]] },
        ].map((col) => (
          <div key={col.title}>
            <h4 className="mb-3 text-sm font-semibold">{col.title}</h4>
            <ul className="space-y-2">
              {col.links.map(([label, to]) => (
                <li key={label}>
                  <Link to={to} className="text-sm text-muted-foreground hover:text-foreground">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-border py-5 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} VitaCore Wellness. All rights reserved.
      </div>
    </footer>
  );
}
