'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Slider } from '@/components/ui/slider';
import { optionsData } from '@/lib/personalizar-data';
import { Heart, Share2, ShoppingCart, Check, Upload, Palette, Layers, Box } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Switch } from '@/components/ui/switch';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';


interface Props {
  categoryId: string;
}

export default function CustomizationPanel({ categoryId }: Props) {
  const [selections, setSelections] = useState<Record<string, any>>({});

  const handleSelection = (optionId: string, value: any) => {
    setSelections(prev => ({ ...prev, [optionId]: value }));
  };

  const categoryOptions = optionsData[categoryId] || [];
  if (categoryOptions.length === 0) {
    return (
      <div className="p-8 text-center bg-white dark:bg-neutral-900 rounded-3xl border border-neutral-200 dark:border-neutral-800">
        <Box className="h-10 w-10 text-neutral-300 mx-auto mb-3" />
        <p className="text-neutral-500">Opciones no disponibles para esta categoría aún.</p>
      </div>
    );
  }

  // Función para renderizar el control correcto según el tipo de opción
  const renderOptionControl = (option: any) => {
    switch (option.type) {
      case 'color':
        return (
          <div className="flex flex-wrap gap-3">
            {option.values.map((color: any) => (
              <button
                key={color.value}
                onClick={() => handleSelection(option.id, color.value)}
                title={color.label}
                className={cn(
                  "h-10 w-10 rounded-full transition-all duration-300 shadow-sm hover:scale-110",
                  selections[option.id] === color.value
                    ? "ring-2 ring-offset-2 ring-primary-500 ring-offset-neutral-100 dark:ring-offset-neutral-900 scale-110"
                    : "hover:ring-2 hover:ring-neutral-200 dark:hover:ring-neutral-700"
                )}
                style={{ backgroundColor: color.value }}
              />
            ))}
          </div>
        );

      case 'swatch':
        return (
          <div className="grid grid-cols-2 gap-3">
            {option.values.map((swatch: any) => (
              <button
                key={swatch.value}
                onClick={() => handleSelection(option.id, swatch.value)}
                className={cn(
                  "relative rounded-xl aspect-video overflow-hidden group transition-all duration-300 border-2",
                  selections[option.id] === swatch.value
                    ? "border-primary-500 shadow-md scale-[1.02]"
                    : "border-transparent hover:border-neutral-300 dark:hover:border-neutral-600"
                )}
              >
                {swatch.image && (
                  <Image
                    src={swatch.image}
                    alt={swatch.label!}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                )}
                <div className={cn(
                  "absolute inset-0 flex items-end p-3 transition-colors duration-300",
                  selections[option.id] === swatch.value ? "bg-black/50" : "bg-black/40 group-hover:bg-black/50"
                )}>
                  <div className="flex items-center justify-between w-full">
                    <span className="text-xs font-bold text-white shadow-black drop-shadow-md">{swatch.label}</span>
                    {selections[option.id] === swatch.value && <div className="bg-primary-500 rounded-full p-0.5"><Check className="h-3 w-3 text-white" /></div>}
                  </div>
                </div>
              </button>
            ))}
          </div>
        );

      case 'select':
        return (
          <Select
            onValueChange={(value) => handleSelection(option.id, value)}
            value={selections[option.id]}
          >
            <SelectTrigger className="w-full bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white p-3 h-12 rounded-xl border-neutral-200 dark:border-neutral-700 focus:ring-2 focus:ring-primary-500">
              <SelectValue placeholder="Seleccionar opción..." />
            </SelectTrigger>
            <SelectContent className="bg-white dark:bg-neutral-900 border-neutral-200 dark:border-neutral-800">
              {option.values.map((choice: any) => (
                <SelectItem
                  key={choice.value}
                  value={choice.value}
                  className="focus:bg-neutral-100 dark:focus:bg-neutral-800"
                >
                  {choice.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        );

      case 'slider':
        return (
          <div className="py-4 px-1">
            <div className="flex justify-between mb-2">
              <span className="text-xs text-neutral-500">Sutil</span>
              <span className="text-xs text-neutral-500">Intenso</span>
            </div>
            <Slider
              defaultValue={[50]}
              max={100}
              step={1}
              onValueChange={(value) => handleSelection(option.id, value[0])}
              className="[&>span:first-child>span]:bg-primary-500 [&>span:first-child]:bg-neutral-200 dark:[&>span:first-child]:bg-neutral-700"
            />
          </div>
        );

      case 'textarea':
        return (
          <Textarea
            placeholder={option.values[0].label || "Escribe tus instrucciones aquí..."}
            onChange={(e) => handleSelection(option.id, e.target.value)}
            className="bg-white dark:bg-neutral-800 border-neutral-200 dark:border-neutral-700 focus:ring-primary-500 rounded-xl min-h-[100px]"
          />
        );

      case 'file':
        return (
          <Button variant="outline" className="w-full h-12 border-dashed border-2 rounded-xl border-neutral-300 dark:border-neutral-700 hover:bg-neutral-50 dark:hover:bg-neutral-800 text-neutral-500 hover:text-primary-600 transition-colors">
            <Upload className="h-4 w-4 mr-2" />
            {option.label || "Subir archivo de referencia"}
          </Button>
        );

      default: return null;
    }
  };

  return (
    <div className="p-1 h-full flex flex-col">
      <div className="bg-white dark:bg-neutral-900 rounded-[1.5rem] shadow-xl border border-neutral-200 dark:border-neutral-800 h-full flex flex-col overflow-hidden relative">

        {/* Artisan Tip - Dynamic based on selection (Mocked) */}
        <div className="absolute top-4 right-4 z-20 pointer-events-none">
          <div className="bg-primary-100 dark:bg-primary-900/50 text-primary-700 dark:text-primary-200 text-xs px-3 py-1.5 rounded-full font-medium shadow-sm border border-primary-200 dark:border-primary-800 animate-slide-in-right">
            Consejo del Artesano: "Los tonos tierra resaltan la textura."
          </div>
        </div>

        {/* Tabs Header */}
        <div className="pt-6 px-6 pb-2 border-b border-neutral-100 dark:border-neutral-800 bg-white/50 dark:bg-neutral-900/50 backdrop-blur-sm z-10">
          <h2 className="text-2xl font-playfair font-bold text-neutral-900 dark:text-white mb-4">Personalización</h2>
          <Tabs defaultValue={categoryOptions[0].id} className="w-full">
            <TabsList className="w-full bg-neutral-100 dark:bg-neutral-800 p-1.5 rounded-xl h-auto" style={{ display: 'flex' }}>
              {categoryOptions.map((tab: any) => (
                <TabsTrigger
                  key={tab.id}
                  value={tab.id}
                  className="flex-1 py-2.5 data-[state=active]:bg-white dark:data-[state=active]:bg-neutral-700 data-[state=active]:shadow-md rounded-lg transition-all duration-300 transform data-[state=active]:scale-105"
                >
                  <span className="flex flex-col md:flex-row items-center gap-2 text-sm font-medium">
                    {tab.id === 'base' ? <Box className="h-4 w-4" /> : tab.id === 'colors' ? <Palette className="h-4 w-4" /> : <Layers className="h-4 w-4" />}
                    {tab.label}
                  </span>
                </TabsTrigger>
              ))}
            </TabsList>

            <div className="mt-4 flex-1 overflow-y-auto pr-1 h-[calc(100vh-25rem)] custom-scrollbar">
              {categoryOptions.map((tab: any) => (
                <TabsContent key={tab.id} value={tab.id} className="mt-0 focus-visible:outline-none space-y-8 pb-4">
                  {tab.options.map((option: any) => (
                    <div key={option.id} className="animate-fade-in-up">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-sm font-bold text-neutral-900 dark:text-gray-100 uppercase tracking-wider flex items-center">
                          {option.label}
                        </h3>
                        {selections[option.id] && (
                          <span className="text-xs text-primary-600 dark:text-primary-400 font-medium bg-primary-50 dark:bg-primary-900/20 px-2 py-0.5 rounded-md">
                            Seleccionado
                          </span>
                        )}
                      </div>

                      <div className="bg-neutral-50 dark:bg-neutral-800/30 rounded-2xl p-4 border border-neutral-100 dark:border-neutral-800">
                        {renderOptionControl(option)}
                      </div>
                    </div>
                  ))}
                </TabsContent>
              ))}
            </div>
          </Tabs>
        </div>

        {/* Footer Actions - Sticky */}
        <div className="mt-auto p-6 bg-white dark:bg-neutral-900 border-t border-neutral-200 dark:border-neutral-800 shadow-[0_-10px_40px_rgba(0,0,0,0.05)] z-20">
          <div className="flex justify-between items-end mb-4">
            <div>
              <p className="text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-1">Precio Final Estimado</p>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-playfair font-bold text-neutral-900 dark:text-white">S/ 350.00</span>
                <span className="text-sm text-neutral-400 line-through">S/ 300.00</span>
              </div>
            </div>
            <div className="text-right">
              <span className="text-xs bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 px-3 py-1 rounded-full font-bold inline-flex items-center">
                <Check className="w-3 h-3 mr-1" /> Disponible
              </span>
            </div>
          </div>

          <div className="space-y-3">
            <Button size="lg" className="w-full h-14 text-lg font-bold rounded-xl shadow-xl shadow-primary-500/20 hover:shadow-primary-500/40 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 hover:scale-[1.02] transition-all">
              <ShoppingCart className="h-5 w-5 mr-3" />
              Solicitar Pedido Personalizado
            </Button>
            <div className="flex gap-3">
              <Button variant="outline" className="flex-1 h-12 rounded-xl border-neutral-200 dark:border-neutral-700 hover:bg-neutral-50 dark:hover:bg-neutral-800 text-neutral-600 dark:text-neutral-300">
                <Heart className="h-4 w-4 mr-2" /> Guardar
              </Button>
              <Button variant="outline" className="flex-1 h-12 rounded-xl border-neutral-200 dark:border-neutral-700 hover:bg-neutral-50 dark:hover:bg-neutral-800 text-neutral-600 dark:text-neutral-300">
                <Share2 className="h-4 w-4 mr-2" /> Compartir
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
