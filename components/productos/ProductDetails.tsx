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
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-x-16 gap-y-10">

        {/* --- Columna Izquierda: Galería (sin cambios) --- */}
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

        {/* --- Columna Derecha: Flujo de Información --- */}
        <div className="lg:col-span-2">
          <div className="flex flex-col gap-8">

            {/* Bloque 1: Título, Rating y Acciones Sociales (sin cambios) */}
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

            {/* Bloque 2: Descripción y Detalles en Acordeón (sin cambios) */}
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
            
            {/* Bloque 3: Tarjeta del Artesano (sin cambios) */}
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

            {/* ================================================================================= */}
            {/* INICIO DE LA NUEVA SECCIÓN DE COMENTARIOS                                         */}
            {/* ================================================================================= */}
            <div className="space-y-6 pt-6 border-t border-neutral-800">
              {/* Encabezado de la sección con título y botón para escribir reseña */}
              <div className="flex justify-between items-center">
                <h3 className="text-2xl font-bold text-neutral-100">Opiniones de Clientes</h3>
                <Button variant="outline" className="hidden sm:inline-flex">Escribe una reseña</Button>
              </div>

              {/* Lista de comentarios/reseñas */}
              <div className="space-y-8">
                {sampleReviews.map((review) => (
                  <article key={review.id} className="flex items-start gap-4">
                    {/* Avatar del autor del comentario */}
                    <Image
                      src={review.avatarUrl}
                      alt={`Avatar de ${review.author}`}
                      width={40}
                      height={40}
                      className="rounded-full mt-1"
                    />
                    <div className="flex-1">
                      {/* Nombre del autor y fecha del comentario */}
                      <div className="flex justify-between items-center">
                        <p className="font-semibold text-neutral-200">{review.author}</p>
                        <p className="text-xs text-neutral-500">{review.date}</p>
                      </div>

                      {/* Estrellas de la calificación específica de esta reseña */}
                      <div className="flex items-center mt-1 mb-2">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star
                            key={i}
                            className={cn(
                              'h-4 w-4',
                              i < review.rating ? 'text-yellow-400 fill-yellow-400' : 'text-neutral-600'
                            )}
                          />
                        ))}
                      </div>

                      {/* Texto del comentario */}
                      <div className="prose prose-sm prose-invert text-neutral-300 max-w-none">
                        <p>{review.text}</p>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
            {/* ================================================================================= */}
            {/* FIN DE LA NUEVA SECCIÓN DE COMENTARIOS                                           */}
            {/* ================================================================================= */}


            {/* Bloque 4: Barra de Acciones Flotante y Sin Bordes (sin cambios) */}
            <div className="sticky bottom-4 z-10">
              <div className="bg-neutral-900/60 backdrop-blur-lg rounded-2xl p-5 space-y-4 shadow-2xl shadow-black/30">
                <Button size="lg" className="w-full h-14 text-lg font-bold text-white bg-gradient-to-br from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 shadow-lg transition-all duration-300 transform hover:scale-105 active:scale-100 animate-pulse-shadow">
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