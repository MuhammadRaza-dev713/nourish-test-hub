import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import type { Product } from "./products";
import { track } from "./track";

export type CartItem = { product: Product; quantity: number };

type CartCtx = {
  items: CartItem[];
  add: (p: Product, qty?: number) => void;
  remove: (id: string) => void;
  update: (id: string, qty: number) => void;
  clear: () => void;
  count: number;
  subtotal: number;
};

const Ctx = createContext<CartCtx | null>(null);
const KEY = "mwf_cart_v1";

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(KEY);
      if (raw) setItems(JSON.parse(raw));
    } catch {}
    setReady(true);
  }, []);

  useEffect(() => {
    if (ready) localStorage.setItem(KEY, JSON.stringify(items));
  }, [items, ready]);

  const add = (p: Product, qty = 1) => {
    setItems((cur) => {
      const found = cur.find((i) => i.product.product_id === p.product_id);
      if (found)
        return cur.map((i) =>
          i.product.product_id === p.product_id ? { ...i, quantity: i.quantity + qty } : i,
        );
      return [...cur, { product: p, quantity: qty }];
    });
    track("add_to_cart", { product_id: p.product_id, name: p.product_name, price: p.price, qty });
  };

  const remove = (id: string) => {
    setItems((cur) => cur.filter((i) => i.product.product_id !== id));
    track("remove_from_cart", { product_id: id });
  };

  const update = (id: string, qty: number) =>
    setItems((cur) =>
      cur.map((i) => (i.product.product_id === id ? { ...i, quantity: Math.max(1, qty) } : i)),
    );

  const clear = () => setItems([]);

  const count = items.reduce((a, i) => a + i.quantity, 0);
  const subtotal = items.reduce((a, i) => a + i.quantity * i.product.price, 0);

  return (
    <Ctx.Provider value={{ items, add, remove, update, clear, count, subtotal }}>
      {children}
    </Ctx.Provider>
  );
}

export const useCart = () => {
  const c = useContext(Ctx);
  if (!c) throw new Error("useCart outside CartProvider");
  return c;
};
