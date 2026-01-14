'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Heart, ShoppingCart, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

// Interfaz y datos de ejemplo
interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  artisan: string;
}

const featuredProducts = [
  {
    id: 1,
    name: 'Retablo Ayacuchano Tradicional',
    description: 'Retablo hecho a mano con escenas tradicionales ayacuchanas',
    price: 250,
    image: 'https://ayacuchoemprende.com/wp-content/uploads/2023/12/EFRAIN-SANCHEZ-RETABLO-TRADICIONAL-COSECHA-DE-TUNA-ayacucho-artesania.jpg',
    category: 'Retablos',
    artisan: 'Manuel Huamán'
  },
  {
    id: 2,
    name: 'Tapiz de Lana Natural',
    description: 'Tapiz tejido a mano con tintes naturales y diseños ancestrales',
    price: 180,
    image: 'https://lareallana.com/wp-content/uploads/2023/05/Tapiz-ALBA_IMG_1325-.jpg',
    category: 'Textiles',
    artisan: 'María Quispe'
  },
  {
    id: 3,
    name: 'Escultura en Piedra de Huamanga',
    description: 'Delicada escultura tallada en piedra de Huamanga con motivos andinos',
    price: 320,
    image: 'https://d20f60vzbd93dl.cloudfront.net/uploads/tienda_009057/tienda_009057_524ceac3bdf9cc08b6098f3090e79bb480de271d_producto_large_90.jpg?not-from-cache-please',
    category: 'Tallados',
    artisan: 'José Cárdenas'
  },
  {
    id: 4,
    name: 'Cerámica Decorativa Tradicional',
    description: 'Pieza de cerámica decorativa con diseños precolombinos',
    price: 150,
    image: 'https://img.kwcdn.com/product/fancy/c8ca8325-c167-403d-bbc1-2d57742608ff.jpg?imageMogr2/auto-orient%7CimageView2/2/w/800/q/70/format/webp',
    category: 'Cerámica',
    artisan: 'Luisa Mendoza'
  }
];

export default function FeaturedProducts() {
  const [likedProducts, setLikedProducts] = useState<number[]>([]);

  const toggleLike = (id: number) => {
    setLikedProducts(prev =>
      prev.includes(id) ? prev.filter(prodId => prodId !== id) : [...prev, id]
    );
  };

  return (
    <section className="bg-neutral-50 dark:bg-neutral-950 py-24 relative overflow-hidden transition-colors duration-300">
      {/* Background pattern */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 opacity-[0.03] dark:opacity-5 bg-[url('/patterns/inca-pattern.svg')] bg-cover pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-xl">
            <span className="text-primary-600 dark:text-primary-400 font-bold tracking-widest uppercase text-xs mb-3 block">
              Colección Exclusiva
            </span>
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-neutral-900 dark:text-white tracking-tight">
              Piezas Destacadas
            </h2>
            <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
              Una selección curada de nuestras obras maestras más excepcionales, donde la tradición cobra vida.
            </p>
          </div>
          <Button
            variant="outline"
            className="hidden md:inline-flex rounded-full border-neutral-300 dark:border-neutral-700 bg-transparent text-neutral-900 dark:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors group"
            asChild
          >
            <Link href="/productos">
              Ver toda la colección <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map((product, index) => (
            <div
              key={product.id}
              className="group relative bg-white dark:bg-neutral-900 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-primary-900/10 transition-all duration-500 hover:-translate-y-2 border border-neutral-100 dark:border-neutral-800"
            >
              {/* Image Container */}
              <div className="relative aspect-[4/5] overflow-hidden bg-neutral-100 dark:bg-neutral-800">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                />

                {/* Overlay actions */}
                <div className="absolute top-4 right-4 flex flex-col gap-2 translate-x-12 group-hover:translate-x-0 transition-transform duration-300 ease-out z-20">
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      toggleLike(product.id);
                    }}
                    className="p-3 bg-white/90 dark:bg-neutral-900/90 backdrop-blur shadow-md rounded-full text-neutral-600 dark:text-neutral-300 hover:text-red-500 dark:hover:text-red-500 transition-colors"
                    aria-label="Añadir a favoritos"
                  >
                    <Heart className={cn("h-5 w-5", likedProducts.includes(product.id) && "fill-current text-red-500")} />
                  </button>
                  <Link href={`/productos/item/${product.id}`}>
                    <button className="p-3 bg-white/90 dark:bg-neutral-900/90 backdrop-blur shadow-md rounded-full text-neutral-600 dark:text-neutral-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors" aria-label="Ver detalles">
                      <Eye className="h-5 w-5" />
                    </button>
                  </Link>
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Category Badge */}
                <span className="absolute top-4 left-4 bg-white/90 dark:bg-black/80 backdrop-blur text-[10px] font-bold px-3 py-1.5 rounded-full text-neutral-900 dark:text-white uppercase tracking-widest shadow-sm">
                  {product.category}
                </span>

                {/* Floating Price Tag moved to bottom-left of image area for better visibility and no overlap */}
                <div className="absolute bottom-4 left-4 bg-primary-600 text-white font-bold px-4 py-2 rounded-xl shadow-lg z-20 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  S/ {product.price}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 relative flex flex-col h-auto">
                <div className="mb-4">
                  <p className="text-xs font-medium text-primary-600 dark:text-primary-400 mb-1 uppercase tracking-wide">Por {product.artisan}</p>
                  <Link href={`/productos/item/${product.id}`} className="group-hover:text-primary-700 dark:group-hover:text-primary-400 transition-colors">
                    <h3 className="text-lg font-bold text-neutral-900 dark:text-white font-playfair leading-tight line-clamp-2" title={product.name}>{product.name}</h3>
                  </Link>
                </div>

                {/* Price (Visible when not hovering, or always visible if preferred) */}
                <div className="mt-auto pt-4 border-t border-neutral-100 dark:border-neutral-800 flex justify-between items-center">
                  <span className="text-xl font-bold text-neutral-900 dark:text-white group-hover:opacity-0 transition-opacity duration-200">
                    S/ {product.price}
                  </span>
                  <Button size="sm" className="rounded-full h-10 w-10 p-0 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 hover:bg-primary-600 dark:hover:bg-primary-200 shadow-sm transition-all hover:scale-110">
                    <ShoppingCart className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center md:hidden">
          <Button variant="outline" className="rounded-full w-full h-12" asChild>
            <Link href="/productos">Ver colección completa</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}