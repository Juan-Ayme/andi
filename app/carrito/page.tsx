'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Trash2, Plus, Minus, CreditCard, Truck, Shield, ArrowRight, Gift, ShoppingBag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
  artisan: string;
}

// --- Sub-componente para una fila del carrito (Estilo Claro) ---
const CartItemRow = ({ item, onUpdateQuantity, onRemoveItem }: { item: CartItem, onUpdateQuantity: (id: number, change: number) => void, onRemoveItem: (id: number) => void }) => (
  <div className="flex items-center gap-4 sm:gap-6 py-5">
    <div className="relative h-24 w-24 sm:h-32 sm:w-32 rounded-lg overflow-hidden shrink-0">
      <Image src={item.image} alt={item.name} fill sizes="(max-width: 640px) 25vw, 128px" className="object-cover" />
    </div>
    <div className="flex-1 min-w-0">
      <h3 className="text-base sm:text-lg font-bold text-slate-800 truncate">{item.name}</h3>
      <p className="mt-1 text-sm text-slate-500">Por: {item.artisan}</p>
      <div className="mt-3 flex items-center border border-slate-200 rounded-lg w-fit">
        <Button variant="ghost" size="icon" className="h-9 w-9 text-slate-500 hover:bg-slate-100" onClick={() => onUpdateQuantity(item.id, -1)}><Minus className="h-4 w-4" /></Button>
        <span className="w-10 text-center font-bold text-sm text-slate-900">{item.quantity}</span>
        <Button variant="ghost" size="icon" className="h-9 w-9 text-slate-500 hover:bg-slate-100" onClick={() => onUpdateQuantity(item.id, 1)}><Plus className="h-4 w-4" /></Button>
      </div>
    </div>
    <div className="text-right ml-4">
      <p className="text-lg font-bold text-slate-900">S/ {(item.price * item.quantity).toFixed(2)}</p>
      <Button variant="ghost" size="sm" className="text-slate-500 hover:text-red-600 hover:bg-red-50 mt-1" onClick={() => onRemoveItem(item.id)}>
        <Trash2 className="h-4 w-4 mr-1"/> Quitar
      </Button>
    </div>
  </div>
);

// --- Sub-componente para los logos de pago ---
const PaymentMethodIcons = () => (
    <div className="grid grid-cols-4 gap-3">
        <div className="flex justify-center items-center h-10 bg-slate-100 rounded-md"><svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38" fill="none"><path d="M34.223 10.457h-2.315a11.137 11.137 0 0 0-4.088-4.088L29.42 4.053a1.9 1.9 0 0 0-2.685-2.685l-2.316 1.604a11.137 11.137 0 0 0-4.088-4.088L18.727.284a1.9 1.9 0 0 0-2.685 2.685l1.604 2.316c-1.425.665-2.685 1.52-3.705 2.54l-2.316-1.604a1.9 1.9 0 0 0-2.685 2.685l1.604 2.316a11.137 11.137 0 0 0-4.088 4.088L4.053 8.63a1.9 1.9 0 0 0-2.685 2.685l1.604 2.316A11.137 11.137 0 0 0 .284 18.727l-1.604 2.316a1.9 1.9 0 0 0 2.685 2.685l2.316-1.604c.665 1.425 1.52 2.685 2.54 3.705l-1.604 2.316a1.9 1.9 0 0 0 2.685 2.685l2.316-1.604a11.137 11.137 0 0 0 4.088 4.088l2.316 1.604a1.9 1.9 0 0 0 2.685-2.685l-1.604-2.316A11.137 11.137 0 0 0 21.6 29.42l2.316 1.604a1.9 1.9 0 0 0 2.685-2.685l-1.604-2.316a11.137 11.137 0 0 0 4.088-4.088l2.316-1.604a1.9 1.9 0 0 0-2.685-2.685l-2.316 1.604a11.137 11.137 0 0 0 4.088-4.088l1.604-2.316a1.9 1.9 0 0 0-2.685-2.685Z" fill="#262626"></path><path d="M16.34 10.45h5.32l-5.13 17.1h-5.32l5.13-17.1Z" fill="#F7B600"></path><path d="M9.88 10.45h3.99l-5.13 17.1H4.75l5.13-17.1Z" fill="#F7B600"></path><path d="M25.72 10.45h3.99l-1.9 6.84-1.71 5.89-.38 1.23v.01l-1.32 3.13h-4.07l5.32-17.1h.07Z" fill="#F7B600"></path></svg></div>
        <div className="flex justify-center items-center h-10 bg-slate-100 rounded-md"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="20" viewBox="0 0 32 20" fill="none"><path d="M11.385 19.342c-2.348 0-4.406-.91-5.94-2.38-1.559-1.47-2.52-3.41-2.52-5.632 0-2.222.96-4.162 2.52-5.631C7.004 4.229 9.037 3.32 11.385 3.32c2.348 0 4.406.91 5.94 2.38 1.56 1.47 2.52 3.41 2.52 5.631 0 2.222-.96 4.162-2.52 5.632-1.534 1.47-3.592 2.38-5.94 2.38Zm0-13.91c-1.617 0-3.078.623-4.114 1.637-1.062 1.015-1.743 2.365-1.743 3.995s.681 2.98 1.743 3.994c1.036 1.014 2.497 1.637 4.114 1.637s3.078-.623 4.114-1.637c1.062-1.015 1.743-2.365 1.743-3.994s-.68-2.98-1.743-3.995c-1.036-1.014-2.497-1.637-4.114-1.637Z" fill="#EB001B"></path><path d="M26.476 8.527a4.195 4.195 0 0 1 2.576 3.935 3.901 3.901 0 0 1-1.396 3.237c-1.01.9-2.372 1.458-3.945 1.458-2.348 0-4.406-.91-5.94-2.38-1.56-1.47-2.52-3.41-2.52-5.631 0-2.003.82-3.791 2.23-5.078 1.38-1.288 3.228-2.076 5.3-2.076 1.632 0 3.036.565 4.19 1.583Z" fill="#F79E1B"></path><path d="M20.536 11.28c0 2.222.96 4.162 2.52 5.631 1.534 1.47 3.592 2.38 5.94 2.38 1.573 0 2.935-.558 3.946-1.458a3.9 3.9 0 0 0 1.396-3.237 4.2 4.2 0 0 0-2.576-3.935 4.195 4.195 0 0 1-2.576 3.935 3.901 3.901 0 0 1-1.396 3.237c-1.01.9-2.372 1.458-3.945 1.458-2.348 0-4.406-.91-5.94-2.38-1.56-1.47-2.52-3.41-2.52-5.631Z" fill="#00A2E5"></path></svg></div>
        <div className="flex justify-center items-center h-10 bg-slate-100 rounded-md"><svg xmlns="http://www.w3.org/2000/svg" width="38" height="24" viewBox="0 0 38 24" fill="none"><rect width="38" height="24" rx="4" fill="#1426D1"></rect><path d="M38 19v-2.343c0-2.457-3.04-4.429-6.79-4.429s-6.79 1.972-6.79 4.429V19H38Zm-24.42 0v-2.343c0-2.457-3.04-4.429-6.79-4.429S.01 14.199.01 16.656V19h13.57Z" fill="#F9A000"></path><path d="M31.21 19v-2.343c0-2.457-3.04-4.429-6.79-4.429v6.772h6.79Zm-13.58 0v-2.343c0-2.457-3.04-4.429-6.79-4.429v6.772h6.79Z" fill="#FFC700"></path><path d="M19.141 5.312a3.141 3.141 0 0 0-2.923 2.112l-2.023 7.828h2.64l.435-1.7h3.04l.487 1.7h2.51l-2.023-7.828a3.14 3.14 0 0 0-2.143-2.112Zm-.22 5.172 1.05-3.528.998 3.528h-2.048Z" fill="#fff"></path></svg></div>
        <div className="flex justify-center items-center h-10 bg-slate-100 rounded-md"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#0070BA" d="M20.244 4.331H4.113l-.973 4.195h17.915z"/><path fill="#0070BA" d="M20.803 19.669H3.72l-.766-7.882h18.615z"/><path fill="#0093C7" d="M11.956.331L6.78 19.669h3.336l1.248-4.76h4.81l.542 2.05h3.03L17.7.331h-5.744zm1.467 8.356L14.496 5.5l1.04 4.187h-2.113z"/><path fill="#0070BA" d="M4.33 19.669L2.73 4.331H.956L3.437 23.67h.542l3.39-16.145H4.113l.217 12.145z"/></svg></div>
    </div>
);

// --- Componente principal ---
export default function CartPage() {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    { id: 1, name: 'Retablo Ayacuchano Tradicional', price: 250, quantity: 1, image: 'https://images.pexels.com/photos/12913358/pexels-photo-12913358.jpeg', artisan: 'Manuel Huamán' },
    { id: 2, name: 'Tapiz de Lana Natural', price: 180, quantity: 2, image: 'https://images.pexels.com/photos/6045237/pexels-photo-6045237.jpeg', artisan: 'María Quispe' }
  ]);

  const [promoCode, setPromoCode] = useState('');
  const [discount, setDiscount] = useState(0);

  const updateQuantity = (id: number, change: number) => {
    setCartItems(items => items.map(item => item.id === id ? { ...item, quantity: Math.max(1, item.quantity + change) } : item).filter(item => item.quantity > 0));
  };

  const removeItem = (id: number) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const applyPromoCode = () => {
    if (promoCode.toUpperCase() === 'ARTESANO10') {
      setDiscount(0.10);
    }
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const discountAmount = subtotal * discount;
  const shipping = subtotal > 300 ? 0 : 25; // Envío gratis por compras mayores a 300
  const total = subtotal - discountAmount + shipping;

  return (
    <div className="min-h-screen pt-28 pb-12 bg-slate-50 text-slate-900">
      <main className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900">Tu Carrito de Compras</h1>
          <p className="mt-4 text-lg text-slate-600">Revisa tus piezas únicas antes de finalizar tu orden.</p>
        </header>

        {cartItems.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Columna Izquierda: Items del Carrito y Código Promocional */}
            <div className="lg:col-span-8 space-y-6">
              <div className="bg-white rounded-2xl shadow-lg p-6">
                 <h2 className="text-xl font-bold mb-4 text-slate-800">Tus Productos ({cartItems.length})</h2>
                 <div className="divide-y divide-slate-200">
                    {cartItems.map((item) => (
                      <CartItemRow key={item.id} item={item} onUpdateQuantity={updateQuantity} onRemoveItem={removeItem} />
                    ))}
                 </div>
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-6">
                 <h3 className="text-lg font-semibold text-slate-800 mb-4 flex items-center gap-2"><Gift className="h-5 w-5 text-emerald-500" />Código Promocional</h3>
                 <div className="flex gap-3">
                   <Input type="text" value={promoCode} onChange={(e) => setPromoCode(e.target.value)} placeholder="Ingresa tu código" className="flex-1 bg-slate-100 border-slate-300 text-slate-900 placeholder:text-slate-400 focus:ring-emerald-500 focus:border-emerald-500 h-12" />
                   <Button onClick={applyPromoCode} className="h-12 bg-slate-800 hover:bg-slate-900 text-white">Aplicar</Button>
                 </div>
                 {discount > 0 && <p className="text-emerald-600 text-sm mt-3">¡Código aplicado! Tienes un {(discount * 100)}% de descuento.</p>}
              </div>
            </div>

            {/* Columna Derecha: Resumen de la Orden */}
            <div className="lg:col-span-4 sticky top-28">
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h2 className="text-xl font-bold text-slate-800 mb-6">Resumen de la Orden</h2>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between text-slate-600"><span>Subtotal</span><span className="font-medium text-slate-900">S/ {subtotal.toFixed(2)}</span></div>
                  {discount > 0 && (<div className="flex justify-between text-emerald-600"><span>Descuento ({(discount * 100)}%)</span><span className="font-medium">-S/ {discountAmount.toFixed(2)}</span></div>)}
                  <div className="flex justify-between text-slate-600"><span>Envío</span><span className="font-medium text-slate-900">{shipping === 0 ? 'Gratis' : `S/ ${shipping.toFixed(2)}`}</span></div>
                  {shipping === 0 && subtotal > 0 && (<p className="text-emerald-600 text-xs text-center py-2 bg-emerald-50 rounded-md">¡Felicidades! Tu envío es gratis.</p>)}
                </div>
                <div className="border-t border-slate-200 pt-4 mt-4">
                    <div className="flex justify-between text-lg font-bold text-slate-900"><span>Total a pagar</span><span>S/ {total.toFixed(2)}</span></div>
                </div>
                <Button size="lg" className="w-full mt-6 h-14 text-base font-bold text-white bg-gradient-to-br from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 shadow-lg transition-all duration-300 transform hover:scale-105 active:scale-100">
                  <CreditCard className="h-5 w-5 mr-3"/>
                  Proceder al Pago
                </Button>
                <div className="flex items-center justify-center gap-2 text-slate-500 text-xs mt-4">
                  <Shield className="h-4 w-4" /><span>Pago 100% seguro y protegido</span>
                </div>
                 <div className="mt-6 pt-6 border-t border-slate-200">
                  <h3 className="text-sm font-semibold text-slate-600 mb-3 text-center">Aceptamos</h3>
                  <PaymentMethodIcons />
                </div>
              </div>
            </div>
          </div>
        ) : (
          // Vista de Carrito Vacío
          <div className="text-center py-16 animate-fade-in">
            <div className="bg-white rounded-2xl p-12 max-w-md mx-auto shadow-lg">
              <ShoppingBag className="h-16 w-16 mx-auto text-slate-300 mb-6" />
              <h2 className="text-2xl font-bold text-slate-800 mb-2">Tu carrito está vacío</h2>
              <p className="text-slate-500 mb-8">Parece que aún no has añadido ninguna pieza de arte. ¡Explora nuestra colección!</p>
              <Button asChild size="lg" className="h-12 bg-emerald-600 hover:bg-emerald-700 text-white font-bold">
                <Link href="/productos">
                  Descubrir Artesanías
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
