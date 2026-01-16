"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Building2, Package, Truck, ArrowRight, Minus, Plus, ShoppingCart, CheckCircle, Phone } from "lucide-react";
import Link from "next/link";

const products = [
  {
    id: 1,
    name: "Pavés Classiques",
    category: "Pavés",
    price: 8500,
    unit: "m²",
    description: "Pavés autobloquants standard",
  },
  {
    id: 2,
    name: "Pavés Premium",
    category: "Pavés",
    price: 12000,
    unit: "m²",
    description: "Pavés haute résistance",
  },
  {
    id: 3,
    name: "Bordures T2",
    category: "Bordures",
    price: 3500,
    unit: "ml",
    description: "Bordures type T2",
  },
  {
    id: 4,
    name: "Hourdis 16x20x53",
    category: "Hourdis",
    price: 1200,
    unit: "unité",
    description: "Hourdis pour planchers",
  },
  {
    id: 5,
    name: "Agglos 15",
    category: "Agglos",
    price: 450,
    unit: "unité",
    description: "Agglos creux 15 cm",
  },
  {
    id: 6,
    name: "Agglos 20",
    category: "Agglos",
    price: 550,
    unit: "unité",
    description: "Agglos creux 20 cm",
  },
];

const deliveryZones = [
  { zone: "Abidjan", price: 0, delay: "24-48h" },
  { zone: "Banlieue Abidjan", price: 50000, delay: "48-72h" },
  { zone: "Intérieur du pays", price: 150000, delay: "5-7 jours" },
];

type CartItem = {
  product: typeof products[0];
  quantity: number;
};

export default function ConfigurateurPage() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [selectedZone, setSelectedZone] = useState(deliveryZones[0]);
  const [activeCategory, setActiveCategory] = useState("Tous");

  const categories = ["Tous", "Pavés", "Bordures", "Hourdis", "Agglos"];

  const filteredProducts = activeCategory === "Tous" 
    ? products 
    : products.filter((p) => p.category === activeCategory);

  const addToCart = (product: typeof products[0]) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { product, quantity: 1 }];
    });
  };

  const updateQuantity = (productId: number, delta: number) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.product.id === productId
            ? { ...item, quantity: Math.max(0, item.quantity + delta) }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const getCartTotal = () => {
    const productsTotal = cart.reduce(
      (sum, item) => sum + item.product.price * item.quantity,
      0
    );
    return productsTotal + selectedZone.price;
  };

  const getProductsTotal = () => {
    return cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  };

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("fr-FR").format(value) + " FCFA";
  };

  const cartItemsCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div>
      <section className="relative py-20 bg-[#1B2B5A]">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 bg-[#B8923B] rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#B8923B] rounded-full blur-3xl" />
        </div>
        <div className="container-premium relative z-10 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 mb-6"
          >
            <Building2 size={18} className="text-[#B8923B]" />
            <span className="text-sm font-medium">Outil Interactif</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-playfair text-4xl md:text-5xl font-bold mb-4"
          >
            Configurateur <span className="text-[#B8923B]">Béton</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-white/80 max-w-2xl mx-auto"
          >
            Composez votre commande et obtenez un devis instantané
          </motion.p>
        </div>
      </section>

      <section className="py-16 bg-[#F8F9FA]">
        <div className="container-premium">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="flex flex-wrap gap-2 mb-8">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`px-4 py-2 text-sm font-medium transition-all ${
                      activeCategory === category
                        ? "bg-[#1B2B5A] text-white"
                        : "bg-white text-gray-600 hover:bg-gray-100"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                {filteredProducts.map((product) => {
                  const cartItem = cart.find((item) => item.product.id === product.id);
                  return (
                    <div
                      key={product.id}
                      className="bg-white border border-gray-100 p-6 hover:shadow-lg transition-all"
                    >
                      <span className="inline-block px-2 py-1 bg-[#1B2B5A] text-white text-xs mb-3">
                        {product.category}
                      </span>
                      <h3 className="font-semibold text-[#1B2B5A] mb-1">{product.name}</h3>
                      <p className="text-gray-500 text-sm mb-4">{product.description}</p>
                      <div className="flex items-center justify-between">
                        <div>
                          <span className="text-[#B8923B] font-bold">{formatCurrency(product.price)}</span>
                          <span className="text-gray-500 text-sm"> / {product.unit}</span>
                        </div>
                        {cartItem ? (
                          <div className="flex items-center gap-2">
                            <button
                              onClick={() => updateQuantity(product.id, -1)}
                              className="w-8 h-8 flex items-center justify-center border border-gray-300 hover:bg-gray-100"
                            >
                              <Minus size={16} />
                            </button>
                            <span className="w-8 text-center font-medium">{cartItem.quantity}</span>
                            <button
                              onClick={() => updateQuantity(product.id, 1)}
                              className="w-8 h-8 flex items-center justify-center border border-gray-300 hover:bg-gray-100"
                            >
                              <Plus size={16} />
                            </button>
                          </div>
                        ) : (
                          <button
                            onClick={() => addToCart(product)}
                            className="px-4 py-2 bg-[#B8923B] text-white text-sm font-medium hover:bg-[#9A7A32] transition-colors"
                          >
                            Ajouter
                          </button>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="bg-white p-6 shadow-lg sticky top-24">
                <div className="flex items-center gap-2 mb-6">
                  <ShoppingCart size={24} className="text-[#B8923B]" />
                  <h2 className="font-playfair text-xl font-semibold text-[#1B2B5A]">
                    Votre Devis
                  </h2>
                  {cartItemsCount > 0 && (
                    <span className="ml-auto px-2 py-1 bg-[#B8923B] text-white text-xs rounded-full">
                      {cartItemsCount}
                    </span>
                  )}
                </div>

                {cart.length === 0 ? (
                  <div className="text-center py-8 text-gray-500">
                    <Package size={48} className="mx-auto mb-4 opacity-30" />
                    <p>Votre panier est vide</p>
                    <p className="text-sm">Ajoutez des produits pour générer un devis</p>
                  </div>
                ) : (
                  <div>
                    <div className="space-y-4 mb-6 max-h-64 overflow-y-auto">
                      {cart.map((item) => (
                        <div key={item.product.id} className="flex items-center justify-between py-2 border-b border-gray-100">
                          <div className="flex-1">
                            <div className="font-medium text-sm text-[#1B2B5A]">{item.product.name}</div>
                            <div className="text-xs text-gray-500">
                              {item.quantity} {item.product.unit} x {formatCurrency(item.product.price)}
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="font-semibold text-[#B8923B]">
                              {formatCurrency(item.product.price * item.quantity)}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="mb-6">
                      <label className="font-medium text-gray-700 text-sm mb-2 block">
                        <Truck size={16} className="inline mr-2" />
                        Zone de livraison
                      </label>
                      <select
                        value={selectedZone.zone}
                        onChange={(e) => {
                          const zone = deliveryZones.find((z) => z.zone === e.target.value);
                          if (zone) setSelectedZone(zone);
                        }}
                        className="w-full px-3 py-2 border border-gray-300 text-sm focus:border-[#B8923B] focus:outline-none"
                      >
                        {deliveryZones.map((zone) => (
                          <option key={zone.zone} value={zone.zone}>
                            {zone.zone} - {zone.price === 0 ? "Gratuit" : formatCurrency(zone.price)}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="border-t border-gray-200 pt-4 space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Sous-total produits</span>
                        <span>{formatCurrency(getProductsTotal())}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Livraison</span>
                        <span>{selectedZone.price === 0 ? "Gratuit" : formatCurrency(selectedZone.price)}</span>
                      </div>
                      <div className="flex justify-between text-lg font-bold pt-2 border-t border-gray-200">
                        <span className="text-[#1B2B5A]">Total TTC</span>
                        <span className="text-[#B8923B]">{formatCurrency(getCartTotal())}</span>
                      </div>
                    </div>

                    <div className="mt-6 space-y-3">
                      <Link href="/contact" className="btn-gold w-full flex items-center justify-center gap-2">
                        Demander ce Devis
                        <ArrowRight size={18} />
                      </Link>
                      <a href="tel:+2250700000000" className="btn-outline w-full flex items-center justify-center gap-2">
                        <Phone size={18} />
                        Commander par Téléphone
                      </a>
                    </div>
                  </div>
                )}

                <div className="mt-6 pt-6 border-t border-gray-100">
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2 text-gray-600">
                      <CheckCircle size={16} className="text-[#B8923B]" />
                      Devis gratuit sans engagement
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <CheckCircle size={16} className="text-[#B8923B]" />
                      Livraison rapide sur Abidjan
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <CheckCircle size={16} className="text-[#B8923B]" />
                      Qualité garantie
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}