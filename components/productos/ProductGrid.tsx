'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Heart, ShoppingCart, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

// La interfaz y los datos por defecto se mantienen igual
interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  artisan: string;
}

interface ProductGridProps {
  products?: Product[];
  viewMode?: 'grid' | 'list';
}

const defaultProducts: Product[] = [
    { id: 1, name: 'Retablo Ayacuchano Tradicional',
       price: 250,
        image: 'https://www.huillcaexpedition.com/images/blog/retablo-ayacuchano-1743141563.jpg', category: 'Retablos', artisan: 'Manuel Huamán' },
    { id: 2, name: 'Tapiz de Lana Natural', price: 180, image: 'https://i.pinimg.com/236x/64/4b/f1/644bf1323e73959b7803ed5c441bbee5.jpg', category: 'Textiles', artisan: 'María Quispe' },
    { id: 3, name: 'Cerámica Decorativa', price: 150, image: 'https://d20f60vzbd93dl.cloudfront.net/uploads/tienda_008087/tienda_008087_dbdca40f9861e76e713579c52eb0a3caa478a6f4_producto_large_90.png?not-from-cache-please', category: 'Cerámica', artisan: 'Ana López' },
    { id: 4, name: 'Escultura en Piedra de Huamanga', price: 320, image: 'https://ictys.org/wp-content/uploads/2019/11/CNI-G05_JoseGalvezQuispe.jpg', category: 'Tallados', artisan: 'José Cárdenas' },
    { id: 5, name: 'Manta Tradicional Ayacuchana', price: 220, image: 'https://d15yqn4xt8exgp.cloudfront.net/media/products/TTP000285/inka-products-tissu-traditionnel-du-cusco-tisse-main-motifs-ethniques-4-20210925021840.jpeg', category: 'Textiles', artisan: 'María Quispe' },
    { id: 6, name: 'Chal de Alpaca', price: 150, image: 'https://acdn-us.mitiendanube.com/stores/545/007/products/img_70571-48803bbcaebdc106af15920640719748-1024-1024.jpg', category: 'Textiles', artisan: 'Rosa Mendoza' }
];


export default function ProductGrid({ products = defaultProducts, viewMode = 'grid' }: ProductGridProps) {
  const [likedProducts, setLikedProducts] = useState<number[]>([]);

  const toggleLike = (id: number) => {
    setLikedProducts(prev => 
      prev.includes(id) ? prev.filter(prodId => prodId !== id) : [...prev, id]
    );
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        // El contenedor de la tarjeta ahora tiene un fondo y bordes redondeados
        <div 
          key={product.id} 
          className="bg-neutral-800/40 rounded-2xl overflow-hidden flex flex-col shadow-lg transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-900/50"
        >
          {/* --- PARTE SUPERIOR: Contenedor de la Imagen (Interactivo) --- */}
          <div className="group relative aspect-square w-full">
            {/* Capa 1: Imagen del Producto */}
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
            />
            
            {/* Capa 2: Gradiente que aparece en hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"/>

            {/* Capa 3: Contenido que aparece en hover */}
            <div className="absolute inset-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="flex justify-between">
                {/* Etiqueta de Categoría (siempre visible, pero con estilo de overlay) */}
                <span className="text-xs font-bold bg-emerald-600 text-white px-3 py-1 rounded-full self-start opacity-100 group-hover:opacity-100">
                  {product.category}
                </span>

                <div className="flex flex-col gap-2 transform translate-x-4 group-hover:translate-x-0 transition-transform duration-300">
                  <button onClick={() => toggleLike(product.id)} aria-label="Añadir a favoritos" className={cn("p-2 rounded-full bg-black/30 backdrop-blur-sm transition-colors", likedProducts.includes(product.id) ? "text-red-500" : "text-white hover:text-red-400")}>
                      <Heart className={cn("h-5 w-5", likedProducts.includes(product.id) && "fill-current")} />
                  </button>
                  <Link href={`/productos/item/${product.id}`} className="p-2 rounded-full bg-black/30 backdrop-blur-sm text-white hover:text-emerald-300 transition-colors" aria-label="Ver producto">
                      <Eye className="h-5 w-5" />
                  </Link>
                </div>
              </div>

              <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <Button className="w-full bg-emerald-500 text-white hover:bg-emerald-600 active:scale-95 shadow-lg">
                  <ShoppingCart className="h-4 w-4 mr-2"/>
                  Añadir al Carrito
                </Button>
              </div>
            </div>
          </div>
          
          {/* --- PARTE INFERIOR: Barra de Información (Siempre Visible) --- */}
          <div className="p-4 flex-grow flex flex-col">
            <h3 className="text-base font-bold text-neutral-100 leading-snug">{product.name}</h3>
            <p className="text-sm text-neutral-400 mt-1">Por {product.artisan}</p>
            <div className="mt-4 flex-grow flex items-end justify-between">
              <p className="text-xl font-semibold text-emerald-400">S/ {product.price.toFixed(2)}</p>
              {/* Puedes agregar un rating pequeño aquí si lo deseas */}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}