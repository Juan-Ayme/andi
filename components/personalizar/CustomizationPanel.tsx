'use client';

import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Slider } from '@/components/ui/slider';
import { Button } from '@/components/ui/button';
import { 
  Palette, 
  Shapes, 
  Image as ImageIcon, 
  Share2,
  ShoppingCart,
  Sparkles,
  Heart
} from 'lucide-react';

export default function CustomizationPanel() {
  const [color, setColor] = useState('#8B4513');
  const [size, setSize] = useState([1]);
  const [selectedTexture, setSelectedTexture] = useState('Madera');

  const colors = [
    { name: 'Marrón Tradicional', value: '#8B4513' },
    { name: 'Caoba', value: '#A0522D' },
    { name: 'Nogal', value: '#6B4423' },
    { name: 'Roble', value: '#8B7355' },
    { name: 'Dorado', value: '#CD853F' },
    { name: 'Arena', value: '#DEB887' },
    { name: 'Rojo Ayacuchano', value: '#B22222' },
    { name: 'Azul Andino', value: '#4682B4' }
  ];

  const textures = ['Madera', 'Piedra', 'Metal', 'Cerámica'];

  return (
    <div className="card-dark p-6">
      <Tabs defaultValue="color" className="w-full">
        <TabsList className="grid grid-cols-3 gap-2 mb-6 bg-neutral-800/50 border border-neutral-700">
          <TabsTrigger 
            value="color" 
            className="flex items-center gap-2 data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary-600 data-[state=active]:to-primary-700 data-[state=active]:text-white text-neutral-300"
          >
            <Palette className="h-4 w-4" />
            Color
          </TabsTrigger>
          <TabsTrigger 
            value="size" 
            className="flex items-center gap-2 data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary-600 data-[state=active]:to-primary-700 data-[state=active]:text-white text-neutral-300"
          >
            <Shapes className="h-4 w-4" />
            Tamaño
          </TabsTrigger>
          <TabsTrigger 
            value="texture" 
            className="flex items-center gap-2 data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary-600 data-[state=active]:to-primary-700 data-[state=active]:text-white text-neutral-300"
          >
            <ImageIcon className="h-4 w-4" />
            Textura
          </TabsTrigger>
        </TabsList>

        <TabsContent value="color" className="space-y-6">
          <div>
            <h3 className="text-lg font-medium text-neutral-100 mb-4 flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-primary-400" />
              Paleta de Colores
            </h3>
            <div className="grid grid-cols-4 gap-3">
              {colors.map((c) => (
                <button
                  key={c.value}
                  className="group relative w-full aspect-square rounded-lg border-2 transition-all hover:scale-105"
                  style={{ 
                    backgroundColor: c.value,
                    borderColor: color === c.value ? '#0ea5e9' : 'transparent'
                  }}
                  onClick={() => setColor(c.value)}
                  title={c.name}
                >
                  {color === c.value && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-4 h-4 bg-white rounded-full shadow-lg"></div>
                    </div>
                  )}
                </button>
              ))}
            </div>
            <div className="mt-4 p-3 bg-neutral-800/50 rounded-lg border border-neutral-700">
              <p className="text-sm text-neutral-300">
                Color seleccionado: <span className="font-medium text-neutral-100">{colors.find(c => c.value === color)?.name}</span>
              </p>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="size" className="space-y-6">
          <div>
            <h3 className="text-lg font-medium text-neutral-100 mb-4 flex items-center gap-2">
              <Shapes className="h-5 w-5 text-secondary-400" />
              Dimensiones
            </h3>
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium text-neutral-200 mb-2 block">
                  Altura: {(size[0] * 40).toFixed(0)}cm
                </label>
                <Slider
                  value={size}
                  onValueChange={setSize}
                  min={0.5}
                  max={2}
                  step={0.1}
                  className="w-full"
                />
              </div>
              <div className="grid grid-cols-3 gap-3 mt-4">
                {[
                  { label: 'Pequeño', value: 0.7, size: '28cm' },
                  { label: 'Mediano', value: 1.0, size: '40cm' },
                  { label: 'Grande', value: 1.5, size: '60cm' }
                ].map((preset) => (
                  <button
                    key={preset.label}
                    onClick={() => setSize([preset.value])}
                    className={`p-3 rounded-lg border transition-all ${
                      Math.abs(size[0] - preset.value) < 0.1
                        ? 'border-primary-500 bg-primary-500/20 text-primary-300'
                        : 'border-neutral-700 bg-neutral-800/50 text-neutral-300 hover:border-neutral-600'
                    }`}
                  >
                    <div className="text-sm font-medium">{preset.label}</div>
                    <div className="text-xs text-neutral-400">{preset.size}</div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="texture" className="space-y-6">
          <div>
            <h3 className="text-lg font-medium text-neutral-100 mb-4 flex items-center gap-2">
              <ImageIcon className="h-5 w-5 text-accent-400" />
              Material y Acabado
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {textures.map((texture) => (
                <button
                  key={texture}
                  onClick={() => setSelectedTexture(texture)}
                  className={`p-4 rounded-lg border transition-all ${
                    selectedTexture === texture
                      ? 'border-primary-500 bg-primary-500/20 text-primary-300'
                      : 'border-neutral-700 bg-neutral-800/50 text-neutral-300 hover:border-neutral-600 hover:bg-neutral-700/50'
                  }`}
                >
                  <div className="text-center">
                    <div className="text-lg font-medium">{texture}</div>
                    <div className="text-xs text-neutral-400 mt-1">
                      {texture === 'Madera' && 'Tradicional'}
                      {texture === 'Piedra' && 'Huamanga'}
                      {texture === 'Metal' && 'Bronce'}
                      {texture === 'Cerámica' && 'Artesanal'}
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </TabsContent>
      </Tabs>

      <div className="mt-8 space-y-4">
        <div className="p-4 bg-gradient-to-r from-neutral-800/50 to-neutral-800/30 rounded-lg border border-neutral-700">
          <h4 className="text-lg font-bold text-neutral-100 mb-2">Resumen de Personalización</h4>
          <div className="space-y-1 text-sm text-neutral-300">
            <p>• Color: {colors.find(c => c.value === color)?.name}</p>
            <p>• Tamaño: {(size[0] * 40).toFixed(0)}cm de altura</p>
            <p>• Material: {selectedTexture}</p>
          </div>
          <div className="mt-3 text-right">
            <span className="text-2xl font-bold text-primary-400">S/ 280.00</span>
            <p className="text-xs text-neutral-400">Precio estimado</p>
          </div>
        </div>
{/* --- Grupo de Botones Secundarios --- */}
<div className="flex gap-3">
  {/* Botón Guardar: Outline que se rellena en hover */}
  <Button 
    variant="outline"
    className="
      flex-1 border-2 border-red-700 text-red-700 
      hover:bg-red-700 hover:text-white
      focus:ring-red-300 transition-colors duration-300
    "
  >
    <Heart className="h-4 w-4 mr-2" />
    Guardar
  </Button>
  
  {/* Botón Compartir: Mismo estilo que Guardar para consistencia */}
  <Button 
    variant="outline" 
    className="
      flex-1 border-2 border-red-700 text-red-700 
      hover:bg-red-700 hover:text-white
      focus:ring-red-300 transition-colors duration-300
    "
  >
    <Share2 className="h-4 w-4 mr-2" />
    Compartir
  </Button>
</div>

{/* --- Botón de Acción Principal --- */}
<Button className="
  w-full bg-red-700 text-white text-lg font-bold
  hover:bg-red-800 
  focus:ring-4 focus:ring-red-300
  transition-all duration-300 ease-in-out
  shadow-md hover:shadow-lg transform hover:-translate-y-0.5
  py-4
">
  <ShoppingCart className="h-5 w-5 mr-2" />
  Añadir al Carrito
</Button>


        <p className="text-xs text-neutral-400 text-center">
          * El precio final puede variar según las personalizaciones seleccionadas
        </p>
      </div>
    </div>
  );
}