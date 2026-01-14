'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Heart, ShoppingCart, Eye, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

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
  { id: 1, name: 'Retablo Ayacuchano Tradicional', price: 250, image: 'https://www.huillcaexpedition.com/images/blog/retablo-ayacuchano-1743141563.jpg', category: 'Retablos', artisan: 'Manuel Huamán' },
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
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {products.map((product, index) => (
        <div
          key={product.id}
          className="group bg-white dark:bg-neutral-900 rounded-3xl overflow-hidden flex flex-col shadow-lg border border-neutral-200 dark:border-neutral-800 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 animate-fade-in-up"
          style={{ animationDelay: `${index * 50}ms` }}
        >
          {/* Image Container */}
          <div className="relative aspect-[4/5] w-full overflow-hidden bg-neutral-100 dark:bg-neutral-800">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            {/* Actions */}
            <div className="absolute top-4 right-4 flex flex-col gap-2 transform translate-x-12 group-hover:translate-x-0 transition-transform duration-300">
              <button
                onClick={() => toggleLike(product.id)}
                className={cn(
                  "p-3 rounded-full backdrop-blur-md shadow-sm transition-all hover:scale-110",
                  likedProducts.includes(product.id)
                    ? "bg-white text-red-500"
                    : "bg-white/90 text-neutral-600 hover:text-red-500"
                )}
              >
                <Heart className={cn("h-5 w-5", likedProducts.includes(product.id) && "fill-current")} />
              </button>
              <Link
                href={`/productos/item/${product.id}`}
                className="p-3 rounded-full bg-white/90 backdrop-blur-md text-neutral-600 hover:text-primary-600 shadow-sm transition-all hover:scale-110"
              >
                <Eye className="h-5 w-5" />
              </Link>
            </div>

            {/* Badge */}
            <div className="absolute top-4 left-4">
              <span className="text-xs font-bold bg-white/90 dark:bg-black/60 backdrop-blur-md text-neutral-900 dark:text-white px-3 py-1.5 rounded-full uppercase tracking-wider shadow-sm">
                {product.category}
              </span>
            </div>

            {/* Add to Cart */}
            <div className="absolute bottom-4 left-4 right-4 transform translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
              <Button className="w-full h-12 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-xl shadow-lg shadow-black/20">
                <ShoppingCart className="h-5 w-5 mr-2" />
                Agregar al Carrito
              </Button>
            </div>
          </div>

          {/* Info */}
          <div className="p-6 flex-grow flex flex-col">
            <div className="mb-2">
              <p className="text-sm text-primary-600 dark:text-primary-400 font-medium mb-1">{product.artisan}</p>
              <h3 className="text-lg font-playfair font-bold text-neutral-900 dark:text-neutral-100 leading-tight group-hover:text-primary-700 dark:group-hover:text-primary-400 transition-colors">
                {product.name}
              </h3>
            </div>

            <div className="mt-auto flex items-end justify-between border-t border-neutral-100 dark:border-neutral-800 pt-4">
              <div className="flex flex-col">
                <span className="text-xs text-neutral-500 uppercase tracking-widest">Precio</span>
                <p className="text-2xl font-bold text-neutral-900 dark:text-white">S/ {product.price.toFixed(2)}</p>
              </div>
              <div className="flex text-yellow-500 gap-0.5">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="h-3 w-3 fill-current" />
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}