'use client';

import Image from 'next/image';
import Link from 'next/link';
// Importamos los íconos que usaremos
import { Star, User, ShoppingBag, Award, Palette, LucideIcon } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

// Aseguramos que la interfaz incluya todos los datos necesarios
interface ArtisanTabsProps {
  artisan: {
    id: number;
    name: string;
    story: string;
    techniques: string[];
    products: Array<{ id: number; name: string; price: number; image: string; }>;
    awards: string[];
    workshops: Array<{
      id: number;
      title: string;
      description: string;
      duration: string;
      modality: string;
      level: string;
      price: number;
      icon: LucideIcon; // Asumimos que el ícono viene con los datos
    }>;
  };
}

export default function ArtisanTabs({ artisan }: ArtisanTabsProps) {
  // Se elimina el useState, ya que el componente Tabs de Radix/ShadCN lo maneja internamente.

  return (
    <Tabs defaultValue="about" className="mb-12">
      {/* --- Estilo de Pestañas Modernizado --- */}
      <TabsList className="grid w-full grid-cols-2 sm:grid-cols-4 gap-2 bg-transparent p-0 mb-6">
        <TabsTrigger value="about" className="group">
          <User className="h-5 w-5 mr-2 transition-transform duration-300 group-data-[state=active]:-rotate-12" /> Sobre Mí
        </TabsTrigger>
        <TabsTrigger value="products" className="group">
          <ShoppingBag className="h-5 w-5 mr-2 transition-transform duration-300 group-data-[state=active]:-rotate-12" /> Productos
        </TabsTrigger>
        <TabsTrigger value="workshops" className="group">
          <Palette className="h-5 w-5 mr-2 transition-transform duration-300 group-data-[state=active]:-rotate-12" /> Cursos
        </TabsTrigger>
        <TabsTrigger value="awards" className="group">
          <Award className="h-5 w-5 mr-2 transition-transform duration-300 group-data-[state=active]:-rotate-12" /> Reconocimientos
        </TabsTrigger>
      </TabsList>
      
      {/* --- Paneles de Contenido con Estilo Unificado --- */}
      <div className="bg-neutral-900/70 backdrop-blur-xl border border-neutral-700/60 rounded-2xl shadow-xl p-6 md:p-8">
        <TabsContent value="about" className="mt-0">
          <h2 className="text-2xl font-bold text-neutral-100 mb-4">Mi Historia</h2>
          <p className="text-neutral-300 mb-8 leading-relaxed prose prose-invert max-w-none">{artisan.story}</p>
          
          <h3 className="text-xl font-bold text-neutral-100 mb-4">Técnicas Especializadas</h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {artisan.techniques.map((technique) => (
              <li key={technique} className="flex items-center p-3 bg-neutral-800/60 rounded-lg hover:bg-neutral-800 transition-colors">
                <Star className="h-5 w-5 text-emerald-400 mr-4 flex-shrink-0" />
                <span className="text-neutral-200">{technique}</span>
              </li>
            ))}
          </ul>
        </TabsContent>

        <TabsContent value="products" className="mt-0">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {artisan.products.map((product) => (
              <Link
                key={product.id}
                href={`/productos/item/${product.id}`}
                className="group bg-neutral-800/50 rounded-2xl overflow-hidden border border-neutral-700 hover:border-emerald-500/50 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl"
              >
                <div className="relative aspect-square">
                  <Image src={product.image} alt={product.name} fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold text-neutral-100 group-hover:text-emerald-400 transition-colors">{product.name}</h3>
                  <p 
                    className="mt-1 text-emerald-400 font-bold text-xl transition-all"
                    style={{ filter: 'drop-shadow(0 0 5px currentColor)' }} // Efecto neón con CSS estándar
                  >
                    S/ {product.price.toFixed(2)}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="workshops" className="mt-0">
            {/* Aquí iría el mapeo de los talleres, siguiendo el nuevo estilo del contenedor. */ }
        </TabsContent>

        <TabsContent value="awards" className="mt-0">
          <h2 className="text-2xl font-bold text-neutral-100 mb-6">Reconocimientos y Premios</h2>
          <div className="space-y-4">
            {artisan.awards.map((award) => (
              <div key={award} className="flex items-start p-4 bg-neutral-800/60 rounded-lg">
                <div className="flex-shrink-0 mt-1">
                  <Award className="h-6 w-6 text-yellow-400" />
                </div>
                <div className="ml-4">
                  <p className="text-lg font-medium text-neutral-100">{award}</p>
                  {/* Se elimina la descripción estática para depender solo de los datos */}
                </div>
              </div>
            ))}
          </div>
        </TabsContent>
      </div>
    </Tabs>
  );
}