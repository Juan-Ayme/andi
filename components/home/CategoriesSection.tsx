'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

const categories = [
  {
    id: 1,
    name: 'Textiles Ayacuchanos',
    description: 'Mantas, tapices y prendas con diseños tradicionales',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4DByARMPau5xjuQHyMcNwzVvRwMOBM62GmQ&s',
    count: 24,
    slug: 'textiles'
  },
  {
    id: 2,
    name: 'Retablos',
    description: 'Cajas escénicas tridimensionales con historias andinas',
    image: 'https://trexperienceperu.com/sites/default/files/retablo_ayacuchano_semana_santa.jpg',
    count: 18,
    slug: 'retablos'
  },
  {
    id: 3,
    name: 'Tallados en Piedra',
    description: 'Esculturas en piedra de Huamanga con detalles precisos',
    image: 'https://3.bp.blogspot.com/-2qOaDMx0xo8/Ua_cGduIXcI/AAAAAAAAAF4/DBGhfKOoyII/s1600/Aya_feb08-628.jpg',
    count: 15,
    slug: 'tallados'
  },
  {
    id: 4,
    name: 'Cerámica',
    description: 'Piezas de cerámica con técnicas ancestrales',
    image: 'https://portal.andina.pe/EDPfotografia3/Thumbnail/2019/03/19/000571914W.jpg',
    count: 21,
    slug: 'ceramica'
  }
];

export default function CategoriesSection() {
  return (
    <section className="bg-slate-50 py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* --- Encabezado de la Sección --- */}
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-4xl font-extrabold text-slate-900 tracking-tight">Explora por Categorías</h2>
            <p className="mt-2 text-lg text-slate-600">Descubre la riqueza y diversidad de la artesanía de Ayacucho.</p>
          </div>
          <Link 
            href="/productos" 
            className="hidden md:inline-flex items-center text-emerald-600 hover:text-emerald-700 font-semibold transition-colors group"
          >
            <span>Ver todos los productos</span>
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
        
        {/* --- Cuadrícula de Categorías con Diseño "Split" --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category) => (
            <Link 
              key={category.id} 
              href={`/productos?category=${category.slug}`}
              className="group flex flex-col bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
            >
              {/* --- Parte Superior: Imagen --- */}
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                />
              </div>

              {/* --- Parte Inferior: Información --- */}
              <div className="p-6 flex-grow flex flex-col">
                <h3 className="text-xl font-serif font-bold text-slate-900">{category.name}</h3>
                <p className="mt-2 text-sm text-slate-600 flex-grow">{category.description}</p>
                <div className="mt-6 flex justify-between items-center">
                  <span className="px-3 py-1 text-xs font-semibold bg-slate-100 text-slate-700 rounded-full">
                    {category.count} productos
                  </span>
                  <div className="flex items-center text-sm font-bold text-emerald-600 group-hover:text-emerald-700 transition-colors">
                    <span>Explorar</span>
                    <ArrowRight className="ml-1.5 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        {/* --- Botón para Móvil --- */}
        <div className="mt-12 text-center md:hidden">
          <Link 
            href="/productos" 
            className="inline-flex items-center text-emerald-600 hover:text-emerald-700 font-semibold transition-colors group"
          >
            <span>Ver toda la colección</span>
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}