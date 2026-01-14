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
    <section className="bg-white dark:bg-neutral-900 py-20 sm:py-28 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* --- Encabezado de la Sección --- */}
        <div className="flex justify-between items-end mb-12">
          <div>
            <span className="text-primary-600 dark:text-primary-400 font-bold tracking-widest uppercase text-xs mb-2 block">
              Nuestras Especialidades
            </span>
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-neutral-900 dark:text-white tracking-tight">Explora por Categorías</h2>
            <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-300 max-w-2xl">Descubre la riqueza y diversidad de la artesanía de Ayacucho, creada con pasión.</p>
          </div>
          <Link
            href="/productos"
            className="hidden md:inline-flex items-center text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-semibold transition-colors group"
          >
            <span>Ver todos los productos</span>
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* --- Cuadrícula de Categorías --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={`/productos?category=${category.slug}`}
              className="group flex flex-col bg-neutral-50 dark:bg-neutral-800 rounded-3xl shadow-sm border border-neutral-100 dark:border-neutral-700/50 overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-primary-900/10 hover:-translate-y-2"
            >
              {/* --- Parte Superior: Imagen --- */}
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
              </div>

              {/* --- Parte Inferior: Información --- */}
              <div className="p-6 flex-grow flex flex-col">
                <h3 className="text-xl font-playfair font-bold text-neutral-900 dark:text-white">{category.name}</h3>
                <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400 flex-grow leading-relaxed">{category.description}</p>
                <div className="mt-6 flex justify-between items-center">
                  <span className="px-3 py-1 text-xs font-bold uppercase tracking-wider bg-white dark:bg-neutral-700 text-neutral-600 dark:text-neutral-300 rounded-full shadow-sm">
                    {category.count} productos
                  </span>
                  <div className="flex items-center text-sm font-bold text-primary-600 dark:text-primary-400 group-hover:text-primary-700 dark:group-hover:text-primary-300 transition-colors">
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
            className="inline-flex items-center text-primary-600 dark:text-primary-400 font-bold transition-colors group"
          >
            <span>Ver toda la colección</span>
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}