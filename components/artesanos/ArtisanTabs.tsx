'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Star } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface ArtisanTabsProps {
  artisan: {
    id: number;
    name: string;
    story: string;
    techniques: string[];
    products: Array<{
      id: number;
      name: string;
      price: number;
      image: string;
    }>;
    awards: string[];
  };
}

export default function ArtisanTabs({ artisan }: ArtisanTabsProps) {
  const [activeTab, setActiveTab] = useState('about');

  return (
    <Tabs defaultValue="about" className="mb-12">
      <TabsList className="w-full justify-start bg-neutral-800/50 border border-neutral-700">
        <TabsTrigger 
          value="about"
          className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary-600 data-[state=active]:to-primary-700 data-[state=active]:text-white text-neutral-300"
        >
          Sobre el Artesano
        </TabsTrigger>
        <TabsTrigger 
          value="products"
          className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary-600 data-[state=active]:to-primary-700 data-[state=active]:text-white text-neutral-300"
        >
          Productos
        </TabsTrigger>
        <TabsTrigger 
          value="awards"
          className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary-600 data-[state=active]:to-primary-700 data-[state=active]:text-white text-neutral-300"
        >
          Reconocimientos
        </TabsTrigger>
      </TabsList>

      <TabsContent value="about" className="mt-6">
        <div className="card-dark p-6">
          <h2 className="text-2xl font-bold text-neutral-100 mb-4 flex items-center gap-2">
            <Star className="h-6 w-6 text-primary-400" />
            Historia
          </h2>
          <p className="text-neutral-300 mb-6 leading-relaxed">{artisan.story}</p>
          
          <h3 className="text-xl font-bold text-neutral-100 mb-4 flex items-center gap-2">
            <Star className="h-5 w-5 text-secondary-400" />
            Técnicas Especializadas
          </h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {artisan.techniques.map((technique, index) => (
              <li key={index} className="flex items-center p-3 bg-neutral-800/50 rounded-lg border border-neutral-700">
                <Star className="h-5 w-5 text-primary-400 mr-3 flex-shrink-0" />
                <span className="text-neutral-200">{technique}</span>
              </li>
            ))}
          </ul>
        </div>
      </TabsContent>

      <TabsContent value="products" className="mt-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {artisan.products.map((product) => (
            <Link
              key={product.id}
              href={`/productos/item/${product.id}`}
              className="group card-dark overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative aspect-square">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-medium text-neutral-100 group-hover:text-primary-400 transition-colors">{product.name}</h3>
                <p className="mt-1 text-primary-400 font-bold text-xl neon-text">S/ {product.price.toFixed(2)}</p>
              </div>
            </Link>
          ))}
        </div>
      </TabsContent>

      <TabsContent value="awards" className="mt-6">
        <div className="card-dark p-6">
          <h2 className="text-2xl font-bold text-neutral-100 mb-6 flex items-center gap-2">
            <Star className="h-6 w-6 text-yellow-400 fill-yellow-400" />
            Reconocimientos y Premios
          </h2>
          <div className="space-y-6">
            {artisan.awards.map((award, index) => (
              <div key={index} className="flex items-start p-4 bg-gradient-to-r from-neutral-800/50 to-neutral-800/30 rounded-lg border border-neutral-700">
                <div className="flex-shrink-0">
                  <Star className="h-6 w-6 text-yellow-400 fill-yellow-400" />
                </div>
                <div className="ml-4">
                  <p className="text-lg font-medium text-neutral-100">{award}</p>
                  <p className="text-sm text-neutral-400 mt-1">Reconocimiento oficial por excelencia artesanal</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </TabsContent>
    </Tabs>
  );
}