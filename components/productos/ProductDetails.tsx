// ---- ARCHIVO ACTUALIZADO: `components/productos/ProductDetails.tsx` ----

'use client';

// Importaciones de React y Next.js.
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Importación de íconos de la librería lucide-react.
import { Star, Heart, Share2, ShoppingCart, Minus, Plus, Award, PackageCheck, Wand2 } from 'lucide-react';

// Importaciones de componentes de UI personalizados.
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

// Define la estructura de las propiedades (props) que espera el componente.
interface ProductDetailsProps {
  product: {
    id: number | string; name: string; description: string; price: number; rating: number;
    reviews: number; stock: number; artisan: { name: string; id: number; location: string; rating: number; };
    images: string[]; details: string[];
  };
}

// =================================================================================
// NUEVOS DATOS DE EJEMPLO PARA LAS RESEÑAS
// En una aplicación real, estos datos vendrían de una API.
// =================================================================================
const sampleReviews = [
  {
    id: 1,
    author: 'Ana Torres',
    avatarUrl: 'https://i.pravatar.cc/150?u=a042581f4e29026704d', // URL de avatar de ejemplo
    rating: 5,
    date: '15 de junio, 2024',
    text: '¡Absolutamente impresionante! La calidad y el detalle del retablo superaron mis expectativas. Se nota el amor y la dedicación en cada pincelada. Llegó muy bien empacado.'
  },
  {
    id: 2,
    author: 'Carlos Mendoza',
    avatarUrl: 'https://i.pravatar.cc/150?u=a042581f4e29026704e',
    rating: 4,
    date: '10 de junio, 2024',
    text: 'Un producto muy bonito y auténtico. Le doy 4 estrellas solo porque el envío tardó un poco más de lo esperado, pero el tapiz es de una calidad excelente.'
  },
  {
    id: 3,
    author: 'Lucía Fernández',
    avatarUrl: 'https://i.pravatar.cc/150?u=a042581f4e29026704f',
    rating: 5,
    date: '02 de mayo, 2024',
    text: 'Compré este retablo como regalo para mis padres y quedaron encantados. Es una verdadera obra de arte que representa nuestra cultura. 100% recomendado.'
  }
];

export default function ProductDetails({ product }: ProductDetailsProps) {
  // Estados del componente (sin cambios)
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [isLiked, setIsLiked] = useState(false);

  // Función para manejar la cantidad (sin cambios)
  const handleQuantityChange = (amount: number) => {
    const newQuantity = quantity + amount;
    if (newQuantity >= 1 && newQuantity <= product.stock) {
      setQuantity(newQuantity);
    }
  };

  return (
    <div className="bg-neutral-50 dark:bg-neutral-950 min-h-screen pt-28 pb-12 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb simple */}
        <div className="text-sm text-neutral-500 mb-8">
          <Link href="/productos" className="hover:text-primary-600 transition-colors">Productos</Link>
          <span className="mx-2">/</span>
          <span className="text-neutral-900 dark:text-neutral-300 font-medium">{product.name}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-10 items-start">

          {/* --- Columna Izquierda: Galería --- */}
          <div className="space-y-4">
            <div className="relative aspect-square rounded-[2rem] overflow-hidden bg-white dark:bg-neutral-900 shadow-sm border border-neutral-200 dark:border-neutral-800">
              <Image
                src={product.images[selectedImage]}
                alt={product.name}
                fill
                priority
                className="object-cover transition-all duration-500 ease-in-out hover:scale-105"
              />
            </div>
            <div className="grid grid-cols-5 gap-4">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={cn(
                    "relative aspect-square rounded-xl overflow-hidden transition-all duration-200 border-2",
                    selectedImage === index
                      ? "border-primary-600 scale-95"
                      : "border-transparent opacity-70 hover:opacity-100 hover:border-neutral-300 dark:hover:border-neutral-700"
                  )}
                >
                  <Image src={image} alt={`${product.name} ${index + 1}`} fill className="object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* --- Columna Derecha: Flujo de Información --- */}
          <div className="flex flex-col h-full">
            {/* Cabecera del Producto */}
            <div className="mb-6">
              <div className="flex justify-between items-start">
                <div>
                  <h1 className="text-3xl md:text-4xl font-bold font-playfair text-neutral-900 dark:text-white leading-tight mb-2">
                    {product.name}
                  </h1>
                  <Link href={`/artesanos/${product.artisan.id}`} className="text-sm font-medium text-primary-600 dark:text-primary-400 hover:underline">
                    Por {product.artisan.name}
                  </Link>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => setIsLiked(!isLiked)}
                    className={cn(
                      "p-3 rounded-full bg-white dark:bg-neutral-800 shadow-sm border border-neutral-100 dark:border-neutral-700 transition-colors",
                      isLiked ? "text-red-500 bg-red-50 dark:bg-red-900/10" : "text-neutral-400 hover:text-red-500"
                    )}
                  >
                    <Heart className={cn("h-5 w-5", isLiked && "fill-current")} />
                  </button>
                  <button className="p-3 rounded-full bg-white dark:bg-neutral-800 shadow-sm border border-neutral-100 dark:border-neutral-700 text-neutral-400 hover:text-primary-600 transition-colors">
                    <Share2 className="h-5 w-5" />
                  </button>
                </div>
              </div>

              <div className="flex items-center gap-4 mt-4">
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                  <span className="font-bold text-neutral-900 dark:text-white">{product.rating}</span>
                </div>
                <span className="text-neutral-300">|</span>
                <span className="text-sm text-neutral-500 dark:text-neutral-400 underline decoration-dotted">{product.reviews} reseñas</span>
              </div>
            </div>

            {/* Precio y Controles */}
            <div className="bg-white dark:bg-neutral-900 p-6 rounded-2xl shadow-sm border border-neutral-200 dark:border-neutral-800 mb-8">
              <div className="flex items-end justify-between mb-6">
                <div className="flex flex-col">
                  <span className="text-sm text-neutral-500 uppercase tracking-wide font-medium">Precio Total</span>
                  <span className="text-4xl font-bold text-neutral-900 dark:text-white font-playfair">S/ {(product.price * quantity).toFixed(2)}</span>
                </div>
                <div className="flex items-center bg-neutral-100 dark:bg-neutral-800 rounded-full px-1 py-1">
                  <Button variant="ghost" size="icon" onClick={() => handleQuantityChange(-1)} className="rounded-full h-8 w-8 text-neutral-600 dark:text-neutral-300 hover:bg-white dark:hover:bg-neutral-700">
                    <Minus className="h-4 w-4" />
                  </Button>
                  <span className="w-8 text-center font-bold text-neutral-900 dark:text-white select-none">{quantity}</span>
                  <Button variant="ghost" size="icon" onClick={() => handleQuantityChange(1)} className="rounded-full h-8 w-8 text-neutral-600 dark:text-neutral-300 hover:bg-white dark:hover:bg-neutral-700">
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <Button size="lg" className="h-14 w-full bg-primary-600 hover:bg-primary-700 text-white font-bold text-lg rounded-xl shadow-lg shadow-primary-600/20 transition-all hover:scale-[1.02]">
                  <ShoppingCart className="h-5 w-5 mr-2" />
                  Añadir al Carrito
                </Button>
                <Button variant="outline" size="lg" className="h-14 w-full border-2 border-primary-600 text-primary-700 dark:text-primary-400 hover:bg-primary-50 dark:hover:bg-primary-900/10 font-bold text-lg rounded-xl transition-all">
                  <Wand2 className="h-5 w-5 mr-2" />
                  Personalizar Diseño
                </Button>
              </div>

              <div className="mt-4 flex items-center justify-center gap-2 text-xs text-neutral-500">
                <PackageCheck className="h-4 w-4 text-green-500" />
                <span>Envío gratis a nivel nacional por compras mayores a S/ 300</span>
              </div>
            </div>

            {/* Acordeones y Detalles */}
            <div className="space-y-6">
              <div className="prose prose-neutral dark:prose-invert max-w-none">
                <p className="text-lg leading-relaxed text-neutral-600 dark:text-neutral-300">{product.description}</p>
              </div>

              <Accordion type="multiple" className="w-full" defaultValue={['details']}>
                <AccordionItem value="details" className="border-neutral-200 dark:border-neutral-800">
                  <AccordionTrigger className="text-neutral-900 dark:text-white font-bold text-lg hover:no-underline hover:text-primary-600 transition-colors">
                    Características Técnicas
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="grid grid-cols-1 gap-y-3 pt-2">
                      {product.details.map((detail, i) => (
                        <li key={i} className="flex items-start gap-3 text-neutral-600 dark:text-neutral-400">
                          <div className="mt-1 h-1.5 w-1.5 rounded-full bg-primary-500 flex-shrink-0" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="artisan" className="border-neutral-200 dark:border-neutral-800">
                  <AccordionTrigger className="text-neutral-900 dark:text-white font-bold text-lg hover:no-underline hover:text-primary-600 transition-colors">
                    Sobre el Artesano
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="flex items-center gap-4 bg-neutral-100 dark:bg-neutral-800/50 p-4 rounded-xl mt-2">
                      <Award className="h-10 w-10 text-primary-500 bg-white dark:bg-neutral-800 p-2 rounded-full shadow-sm" />
                      <div>
                        <p className="font-bold text-neutral-900 dark:text-white">{product.artisan.name}</p>
                        <p className="text-sm text-neutral-500 dark:text-neutral-400">{product.artisan.location}</p>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            {/* Reviews Section Simplified */}
            <div className="mt-12 pt-8 border-t border-neutral-200 dark:border-neutral-800">
              <h3 className="text-2xl font-bold font-playfair text-neutral-900 dark:text-white mb-6">Opiniones ({product.reviews})</h3>
              <div className="space-y-6">
                {sampleReviews.map((review) => (
                  <div key={review.id} className="border-b border-neutral-100 dark:border-neutral-800 last:border-0 pb-6 last:pb-0">
                    <div className="flex justify-between mb-2">
                      <span className="font-bold text-neutral-900 dark:text-white">{review.author}</span>
                      <span className="text-xs text-neutral-400">{review.date}</span>
                    </div>
                    <div className="flex mb-2">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} className={cn("h-3 w-3", i < review.rating ? "text-yellow-400 fill-yellow-400" : "text-neutral-300")} />
                      ))}
                    </div>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400 italic">"{review.text}"</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}