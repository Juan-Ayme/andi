'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Star, Heart, Share2, ShoppingCart, MapPin, Award, Minus, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface ProductDetailsProps {
  product: {
    id: number | string;
    name: string;
    description: string;
    price: number;
    rating: number;
    reviews: number;
    stock: number;
    artisan: {
      name: string;
      id: number;
      location: string;
      rating: number;
    };
    images: string[];
    details: string[];
  };
}

export default function ProductDetails({ product }: ProductDetailsProps) {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [isLiked, setIsLiked] = useState(false);

  const handleQuantityChange = (value: number) => {
    setQuantity(Math.max(1, Math.min(product.stock, value)));
  };

  return (
    <div className="min-h-screen pt-16 bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950">
      <div className="absolute inset-0 bg-[url('/patterns/inca-pattern.svg')] opacity-5"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="relative aspect-square rounded-lg overflow-hidden card-dark p-2">
              <Image
                src={product.images[selectedImage]}
                alt={product.name}
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div className="grid grid-cols-3 gap-4">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  className={cn(
                    "relative aspect-square rounded-lg overflow-hidden card-dark p-1 transition-all duration-300",
                    selectedImage === index && "ring-2 ring-primary-500"
                  )}
                  onClick={() => setSelectedImage(index)}
                >
                  <Image
                    src={image}
                    alt={`${product.name} ${index + 1}`}
                    fill
                    className="object-cover rounded"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-neutral-100 ">{product.name}</h1>
              
              <div className="mt-4 flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={cn(
                          "h-5 w-5",
                          i < Math.floor(product.rating)
                            ? "text-yellow-400 fill-yellow-400"
                            : "text-neutral-600"
                        )}
                      />
                    ))}
                    <span className="ml-2 text-sm text-neutral-300">
                      ({product.reviews} reseñas)
                    </span>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => setIsLiked(!isLiked)}
                    className={cn(
                      "p-2 rounded-full transition-colors",
                      isLiked ? "text-red-400 bg-red-500/20" : "text-neutral-400 hover:text-red-400 hover:bg-red-500/20"
                    )}
                  >
                    <Heart className={cn("h-6 w-6", isLiked && "fill-current")} />
                  </button>
                  <button className="p-2 rounded-full text-neutral-400 hover:text-primary-400 hover:bg-primary-500/20 transition-colors">
                    <Share2 className="h-6 w-6" />
                  </button>
                </div>
              </div>
            </div>

            <div className="card-dark p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-3xl font-bold text-primary-400">
                  S/ {product.price.toFixed(2)}
                </h2>
                <div className="text-right">
                  <p className="text-sm text-neutral-400">Stock disponible</p>
                  <p className="text-lg font-medium text-neutral-200">{product.stock} unidades</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 mb-6">
                <label htmlFor="quantity" className="text-neutral-300 font-medium">Cantidad:</label>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => handleQuantityChange(quantity - 1)}
                    className="p-2 rounded-lg bg-neutral-800 border border-neutral-700 text-neutral-300 hover:bg-neutral-700 hover:text-neutral-100 transition-colors"
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <input
                    type="number"
                    id="quantity"
                    value={quantity}
                    onChange={(e) => handleQuantityChange(parseInt(e.target.value))}
                    min="1"
                    max={product.stock}
                    className="w-20 px-3 py-2 bg-neutral-800 border border-neutral-700 text-neutral-100 rounded-lg text-center focus:outline-none focus:ring-2 focus:ring-primary-500"
                  />
                  <button
                    onClick={() => handleQuantityChange(quantity + 1)}
                    className="p-2 rounded-lg bg-neutral-800 border border-neutral-700 text-neutral-300 hover:bg-neutral-700 hover:text-neutral-100 transition-colors"
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
              </div>
              
              <div className="flex space-x-4">
                <Button className="flex-1 bg-green-600 text-white hover:bg-green-700 focus:ring-4 focus:ring-green-300 transition-colors duration-300 flex items-center justify-center">
                  <ShoppingCart className="h-5 w-5 mr-2" />
                  Añadir al Carrito
                </Button>
                <Button 
                  className="
                    flex-1 
                    relative          // Necesario para que el texto se mantenga encima
                    overflow-hidden   // Oculta el gradiente que se sale de los bordes
                    rounded-lg        // Bordes redondeados para un mejor efecto
                    px-5 py-3         // Padding interno
                    text-white        // Color del texto, blanco para un buen contraste
                    font-bold         // Texto en negrita
                    transition-transform duration-300 ease-in-out
                    hover:scale-105   // Un pequeño efecto de zoom al pasar el cursor
                    btn-liquid        // ¡Nuestra clase mágica para la animación!
                  "
                >
                  <span className="relative z-10">Personalizar
                  </span>
                </Button>
              </div>
            </div>

            <div className="card-dark p-6">
              <h3 className="text-lg font-medium text-neutral-100 mb-4">Descripción</h3>
              <p className="text-neutral-300 leading-relaxed">{product.description}</p>
            </div>

            <div className="card-dark p-6">
              <h3 className="text-lg font-medium text-neutral-100 mb-4">Detalles del Producto</h3>
              <ul className="space-y-3">
                {product.details.map((detail, index) => (
                  <li key={index} className="flex items-start">
                    <Star className="h-5 w-5 text-primary-400 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-neutral-300">{detail}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="card-dark p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-primary-700 rounded-full flex items-center justify-center">
                    <Award className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-medium text-neutral-100">Artesano</h3>
                    <Link 
                      href={`/artesanos/${product.artisan.id}`}
                      className="text-primary-400 hover:text-primary-300 transition-colors font-medium"
                    >
                      {product.artisan.name}
                    </Link>
                    <div className="flex items-center text-sm text-neutral-400">
                      <MapPin className="h-4 w-4 mr-1" />
                      {product.artisan.location}
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="flex items-center">
                    <Star className="h-5 w-5 text-yellow-400 fill-yellow-400 mr-1" />
                    <span className="text-lg font-medium text-neutral-100">{product.artisan.rating}</span>
                  </div>
                  <p className="text-sm text-neutral-400">Calificación</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}