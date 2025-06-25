'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Star, Heart, Share2, ShoppingCart, Minus, Plus, User, Award, PackageCheck, Wand2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

// La interfaz de Props se mantiene igual
interface ProductDetailsProps {
  product: {
    id: number | string; name: string; description: string; price: number; rating: number;
    reviews: number; stock: number; artisan: { name: string; id: number; location: string; rating: number; };
    images: string[]; details: string[];
  };
}

export default function ProductDetails({ product }: ProductDetailsProps) {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [isLiked, setIsLiked] = useState(false);

  const handleQuantityChange = (amount: number) => {
    const newQuantity = quantity + amount;
    if (newQuantity >= 1 && newQuantity <= product.stock) {
      setQuantity(newQuantity);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-x-16 gap-y-10">

        {/* --- Columna Izquierda: Galería con Filmstrip Vertical --- */}
        <div className="lg:col-span-3 grid grid-cols-6 gap-4">
          <div className="col-span-1 flex flex-col gap-3">
            {product.images.map((image, index) => (
              <button key={index} onClick={() => setSelectedImage(index)} className={cn("relative aspect-square rounded-lg overflow-hidden transition-all duration-200", selectedImage === index ? "ring-2 ring-emerald-500 ring-offset-2 ring-offset-neutral-900" : "opacity-60 hover:opacity-100")}>
                <Image src={image} alt={`${product.name} ${index + 1}`} fill className="object-cover"/>
              </button>
            ))}
          </div>
          <div className="relative col-span-5 aspect-square rounded-2xl overflow-hidden bg-neutral-800/50">
            <Image src={product.images[selectedImage]} alt={product.name} fill priority className="object-cover transition-all duration-500 ease-in-out"/>
          </div>
        </div>

        {/* --- Columna Derecha: Flujo de Información Unificado y Sin Bordes --- */}
        <div className="lg:col-span-2">
          <div className="flex flex-col gap-8"> {/* Aumentamos el espaciado general */}

            {/* Bloque 1: Título, Rating y Acciones Sociales */}
            <div>
              <h1 className="text-4xl font-extrabold tracking-tight text-neutral-100">{product.name}</h1>
              <div className="mt-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Star className="h-5 w-5 text-yellow-400 fill-yellow-400"/>
                  <span className="font-bold text-neutral-100">{product.rating}</span>
                  <span className="text-sm text-neutral-400">({product.reviews} reseñas)</span>
                </div>
                <div className="flex items-center gap-3">
                  <button onClick={() => setIsLiked(!isLiked)} aria-label="Añadir a favoritos" className="transition-transform active:scale-90">
                    <Heart className={cn("h-6 w-6 text-neutral-500 hover:text-red-500", isLiked && "text-red-500 fill-current")}/>
                  </button>
                  <button aria-label="Compartir" className="transition-transform active:scale-90">
                    <Share2 className="h-6 w-6 text-neutral-500 hover:text-emerald-400"/>
                  </button>
                </div>
              </div>
            </div>

            {/* Bloque 2: Descripción y Detalles en Acordeón sin bordes */}
            <Accordion type="multiple" className="w-full" defaultValue={['item-1']}>
              <AccordionItem value="item-1" className="border-b-0">
                <AccordionTrigger className="hover:no-underline text-lg">Descripción</AccordionTrigger>
                <AccordionContent>
                  <div className="prose prose-invert text-neutral-300 max-w-none">{product.description}</div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2" className="border-b-0">
                <AccordionTrigger className="hover:no-underline text-lg">Detalles del Producto</AccordionTrigger>
                <AccordionContent>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-sm">
                    {product.details.map((detail, i) => (
                      <li key={i} className="flex items-center gap-2 text-neutral-300">
                        <PackageCheck className="h-4 w-4 text-emerald-500 flex-shrink-0"/>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            
            {/* Bloque 3: Tarjeta del Artesano sin bordes */}
            <div className="bg-neutral-800/50 rounded-2xl p-4">
               <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <Award className="h-10 w-10 text-emerald-400"/>
                  <div>
                    <h3 className="font-semibold text-neutral-200">Artesano</h3>
                    <Link href={`/artesanos/${product.artisan.id}`} className="text-emerald-400 hover:text-emerald-300 transition-colors font-medium">
                      {product.artisan.name}
                    </Link>
                  </div>
                </div>
                <div className="text-right">
                  <div className="flex items-center">
                    <Star className="h-5 w-5 text-yellow-400 fill-yellow-400 mr-1" />
                    <span className="text-lg font-medium text-neutral-100">{product.artisan.rating}</span>
                  </div>
                  <p className="text-xs text-neutral-400">Calificación</p>
                </div>
              </div>
            </div>

            {/* Bloque 4: Barra de Acciones Flotante y Sin Bordes */}
            <div className="sticky bottom-4 z-10">
              <div className="bg-neutral-900/60 backdrop-blur-lg rounded-2xl p-5 space-y-4 shadow-2xl shadow-black/30">
                {/* BOTÓN PRINCIPAL: PERSONALIZAR */}
                <Button 
                  size="lg" 
                  className="w-full h-14 text-lg font-bold text-white bg-gradient-to-br from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 shadow-lg transition-all duration-300 transform hover:scale-105 active:scale-100 animate-pulse-shadow"
                >
                  <Wand2 className="h-6 w-6 mr-3"/>
                  ¡Personalízalo Ahora!
                </Button>
                
                <div className="flex justify-between items-center pt-2">
                   <p className="text-3xl font-bold text-neutral-100">S/ {product.price.toFixed(2)}</p>
                   <div className="flex items-center bg-neutral-800 rounded-lg">
                    <Button variant="ghost" size="icon" onClick={() => handleQuantityChange(-1)} className="text-neutral-300"><Minus className="h-4 w-4"/></Button>
                    <span className="w-10 text-center font-bold text-lg text-neutral-100">{quantity}</span>
                    <Button variant="ghost" size="icon" onClick={() => handleQuantityChange(1)} className="text-neutral-300"><Plus className="h-4 w-4"/></Button>
                  </div>
                </div>

                {/* BOTÓN SECUNDARIO: AÑADIR AL CARRITO */}
                <Button size="lg" className="w-full bg-neutral-700 text-neutral-200 hover:bg-neutral-600 active:scale-95">
                  <ShoppingCart className="h-5 w-5 mr-2" />
                  O añadir al carrito
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 