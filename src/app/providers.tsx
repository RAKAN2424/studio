"use client";
import { ThemeProvider } from "next-themes";
import { createContext, useContext, useState, ReactNode } from "react";
import { Product } from "@/lib/types";

type CartItem = Product & { quantity: number };

const CartContext = createContext<any>(null);

export const useCart = () => useContext(CartContext);

export function Providers({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (product: Product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
      <CartContext.Provider value={{ cart, setCart, addToCart, isCartOpen, setIsCartOpen }}>
        {children}
        {isCartOpen && (
          <div className="fixed inset-0 z-50 flex justify-end bg-black/60 backdrop-blur-sm">
            <div className="w-full max-w-md bg-white dark:bg-zinc-900 h-full p-6 shadow-2xl animate-in slide-in-from-right relative">
              <button
                onClick={() => setIsCartOpen(false)}
                className="absolute top-4 right-4 text-2xl hover:text-[#805454]"
              >
                ×
              </button>
              <h2 className="font-serif text-2xl mb-6 border-b pb-4 dark:border-gray-700">
                Your Cart ({totalItems})
              </h2>
              <div className="flex-1 overflow-y-auto max-h-[70vh] space-y-4">
                {cart.length === 0 ? (
                  <p className="text-center text-gray-500 py-10">
                    Your cart is empty.
                  </p>
                ) : (
                  cart.map((item) => (
                    <div key={item.id} className="flex gap-4">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-16 h-16 object-cover rounded"
                      />
                      <div>
                        <h4 className="font-bold text-sm">{item.title}</h4>
                        <p className="text-[#805454] text-sm">
                          {item.price.toFixed(2)} EGP x {item.quantity}
                        </p>
                      </div>
                    </div>
                  ))
                )}
              </div>
              {cart.length > 0 && (
                <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                  <div className="flex justify-between text-xl font-serif font-bold mb-4">
                    <span>Total:</span>
                    <span>
                      {cart
                        .reduce((sum, i) => sum + i.price * i.quantity, 0)
                        .toFixed(2)}{" "}
                      EGP
                    </span>
                  </div>
                  <button className="w-full bg-[#805454] text-white py-3 font-bold uppercase tracking-widest hover:bg-white hover:text-[#805454] transition-colors">
                    Checkout
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </CartContext.Provider>
    </ThemeProvider>
  );
}