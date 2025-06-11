'use client';

import { useState } from 'react';
import { Checkbox } from '@/components/ui/checkbox';
import { Slider } from '@/components/ui/slider';
import { Button } from '@/components/ui/button';
import { Filter, X } from 'lucide-react';

const categories = [
  { id: 'textiles', label: 'Textiles' },
  { id: 'ceramica', label: 'Cerámica' },
  { id: 'retablos', label: 'Retablos' },
  { id: 'tallados', label: 'Tallados en Piedra' },
];

const artisans = [
  { id: 'maria-quispe', label: 'María Quispe' },
  { id: 'jose-cardenas', label: 'José Cárdenas' },
  { id: 'manuel-huaman', label: 'Manuel Huamán' },
  { id: 'ana-lopez', label: 'Ana López' },
];

export default function ProductFilters() {
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedArtisans, setSelectedArtisans] = useState<string[]>([]);
  
  const clearFilters = () => {
    setPriceRange([0, 1000]);
    setSelectedCategories([]);
    setSelectedArtisans([]);
  };

  return (
    <div className="card-dark p-6 space-y-8">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-medium text-neutral-100 flex items-center gap-2">
          <Filter className="h-5 w-5 text-primary-400" />
          Filtros
        </h3>
        <Button 
          variant="ghost" 
          size="sm" 
          onClick={clearFilters}
          className="text-neutral-400 hover:text-neutral-200 hover:bg-neutral-800"
        >
          <X className="h-4 w-4 mr-1" />
          Limpiar
        </Button>
      </div>

      <div>
        <h4 className="text-md font-medium mb-4 text-neutral-200">Categorías</h4>
        <div className="space-y-3">
          {categories.map((category) => (
            <div key={category.id} className="flex items-center space-x-3">
              <Checkbox 
                id={category.id} 
                className="border-neutral-600 data-[state=checked]:bg-primary-600 data-[state=checked]:border-primary-600"
              />
              <label 
                htmlFor={category.id} 
                className="text-sm text-neutral-300 hover:text-neutral-100 cursor-pointer transition-colors"
              >
                {category.label}
              </label>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h4 className="text-md font-medium mb-4 text-neutral-200">Rango de Precio</h4>
        <div className="px-2">
          <Slider
            value={priceRange}
            onValueChange={setPriceRange}
            min={0}
            max={1000}
            step={10}
            className="mt-2"
          />
          <div className="flex justify-between mt-3">
            <span className="text-sm text-neutral-400 bg-neutral-800 px-2 py-1 rounded">
              S/ {priceRange[0]}
            </span>
            <span className="text-sm text-neutral-400 bg-neutral-800 px-2 py-1 rounded">
              S/ {priceRange[1]}
            </span>
          </div>
        </div>
      </div>

      <div>
        <h4 className="text-md font-medium mb-4 text-neutral-200">Artesanos</h4>
        <div className="space-y-3">
          {artisans.map((artisan) => (
            <div key={artisan.id} className="flex items-center space-x-3">
              <Checkbox 
                id={artisan.id} 
                className="border-neutral-600 data-[state=checked]:bg-primary-600 data-[state=checked]:border-primary-600"
              />
              <label 
                htmlFor={artisan.id} 
                className="text-sm text-neutral-300 hover:text-neutral-100 cursor-pointer transition-colors"
              >
                {artisan.label}
              </label>
            </div>
          ))}
        </div>
      </div>

      <div className="pt-4 border-t border-neutral-700">
        <Button className="w-full bg-green-600 text-white hover:bg-green-700 transition-colors duration-300">
          Aplicar Filtros
        </Button>
      </div>
    </div>
  );
}