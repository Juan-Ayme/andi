'use client';

import { useState } from 'react';
import { Checkbox } from '@/components/ui/checkbox';
import { Slider } from '@/components/ui/slider';
import { Button } from '@/components/ui/button';
import { SlidersHorizontal, X } from 'lucide-react';

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
  const [priceRange, setPriceRange] = useState([50, 500]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>(['textiles']);
  const [selectedArtisans, setSelectedArtisans] = useState<string[]>([]);
  
  const clearFilters = () => {
    setPriceRange([0, 1000]);
    setSelectedCategories([]);
    setSelectedArtisans([]);
  };

  // Componente interno para filas de Checkbox interactivas
  const FilterCheckbox = ({ id, label, checked, onCheckedChange }: any) => (
    <div 
        className="flex items-center gap-3 p-2 rounded-lg transition-colors hover:bg-neutral-800/60 cursor-pointer"
        onClick={() => onCheckedChange(!checked)}
    >
        <Checkbox 
            id={id} 
            checked={checked}
            onCheckedChange={onCheckedChange}
            className="h-5 w-5 rounded bg-neutral-800 border-neutral-700 ring-offset-neutral-900 data-[state=checked]:bg-emerald-500 data-[state=checked]:text-white data-[state=checked]:border-emerald-500"
        />
        <label htmlFor={id} className="text-sm font-medium text-neutral-300 cursor-pointer select-none">
            {label}
        </label>
    </div>
  );

  return (
    // Contenedor principal sin bordes ni fondo, solo espaciado
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-bold text-neutral-100 flex items-center gap-3">
          <SlidersHorizontal className="h-6 w-6 text-emerald-400" />
          <span>Filtros</span>
        </h3>
        <Button 
          variant="ghost" 
          size="sm" 
          onClick={clearFilters}
          className="text-neutral-400 hover:text-white transition-colors duration-200"
        >
          <X className="h-4 w-4 mr-1" />
          Limpiar
        </Button>
      </div>

      {/* Sección de Categorías */}
      <div className="space-y-2">
        <h4 className="text-base font-semibold px-2 text-neutral-200">Categorías</h4>
        {categories.map((category) => (
          <FilterCheckbox 
            key={category.id}
            id={category.id}
            label={category.label}
            checked={selectedCategories.includes(category.id)}
            onCheckedChange={(checked) => {
                setSelectedCategories(prev => 
                    checked ? [...prev, category.id] : prev.filter(id => id !== category.id)
                );
            }}
          />
        ))}
      </div>

      {/* Sección de Rango de Precio */}
      <div className="space-y-4 pt-2">
        <h4 className="text-base font-semibold px-2 text-neutral-200">Rango de Precio</h4>
        <div className="px-2">
            {/* El Slider de shadcn/ui tomará los colores primarios de tus variables CSS */}
          <Slider
            value={priceRange}
            onValueChange={setPriceRange}
            min={0}
            max={1000}
            step={10}
            className="[&>span:first-child]:h-2 [&>span:first-child>span]:bg-emerald-500"
          />
          <div className="flex justify-between mt-4">
            <span className="text-sm text-neutral-200 bg-neutral-900/80 px-3 py-1 rounded-md ring-1 ring-neutral-700">
              S/ {priceRange[0]}
            </span>
            <span className="text-sm text-neutral-200 bg-neutral-900/80 px-3 py-1 rounded-md ring-1 ring-neutral-700">
              S/ {priceRange[1]}
            </span>
          </div>
        </div>
      </div>

      {/* Sección de Artesanos */}
      <div className="space-y-2">
        <h4 className="text-base font-semibold px-2 text-neutral-200">Artesanos</h4>
        {artisans.map((artisan) => (
          <FilterCheckbox 
            key={artisan.id}
            id={artisan.id}
            label={artisan.label}
            checked={selectedArtisans.includes(artisan.id)}
            onCheckedChange={(checked) => {
                setSelectedArtisans(prev => 
                    checked ? [...prev, artisan.id] : prev.filter(id => id !== artisan.id)
                );
            }}
          />
        ))}
      </div>

      {/* Botón de Acción Final */}
      <div className="pt-4">
        <Button size="lg" className="w-full h-12 bg-emerald-500 text-white font-bold text-base hover:bg-emerald-600 shadow-lg hover:shadow-emerald-500/20 transition-all duration-300 transform hover:scale-105 active:scale-100">
          Aplicar Filtros
        </Button>
      </div>
    </div>
  );
}