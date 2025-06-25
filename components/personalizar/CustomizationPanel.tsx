'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Slider } from '@/components/ui/slider';
import { optionsData } from '@/lib/personalizar-data';
import { Heart, Share2, ShoppingCart, Check, Upload } from 'lucide-react';
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
    return <div className="p-6 text-center text-neutral-400">No hay opciones de personalización para esta categoría.</div>;
  }

  // Función para renderizar el control correcto según el tipo de opción
  const renderOptionControl = (option: any) => {
    switch (option.type) {
      case 'color':
        return <div className="flex flex-wrap gap-3">{option.values.map((color: any) => (<button key={color.value} onClick={() => handleSelection(option.id, color.value)} title={color.label} className="h-9 w-9 rounded-full transition-all duration-200" style={{ backgroundColor: color.value, outline: selections[option.id] === color.value ? `3px solid #10B981` : 'none', outlineOffset: '2px' }}/>))}</div>;
      case 'swatch':
        return <div className="grid grid-cols-2 gap-3">{option.values.map((swatch: any) => (<button key={swatch.value} onClick={() => handleSelection(option.id, swatch.value)} className={cn("relative rounded-lg aspect-video overflow-hidden group transition-all duration-200 ring-offset-2 ring-offset-neutral-800", selections[option.id] === swatch.value && 'ring-2 ring-emerald-500')}>{swatch.image && <Image src={swatch.image} alt={swatch.label!} fill className="object-cover group-hover:scale-110 transition-transform duration-300"/>}<div className="absolute inset-0 bg-black/40 flex items-end p-2"><span className="text-xs font-bold text-white">{swatch.label}</span></div></button>))}</div>;
      
      case 'select':
        return (
          <Select
            onValueChange={(value) => handleSelection(option.id, value)}
            value={selections[option.id]}
          >
            <SelectTrigger className="w-full mt-1 bg-neutral-800 text-white p-3 h-12 rounded-lg border-neutral-700 border focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-neutral-900">
              <SelectValue placeholder="Seleccionar una opción..." />
            </SelectTrigger>
            {/* CORRECCIÓN DEFINITIVA: Usando un fondo sólido y opaco para el menú */}
            <SelectContent className="bg-slate-900 border-slate-700 text-white">
              {option.values.map((choice: any) => (
                <SelectItem 
                  key={choice.value} 
                  value={choice.value}
                  className="focus:bg-emerald-600 focus:text-white"
                >
                  {choice.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        );

      case 'slider':
        return <div className="py-3"><Slider defaultValue={[50]} max={100} step={1} onValueChange={(value) => handleSelection(option.id, value[0])} className="[&>span:first-child>span]:bg-emerald-500"/></div>;
      case 'textarea':
        return <Textarea placeholder={option.values[0].label} onChange={(e) => handleSelection(option.id, e.target.value)} className="bg-neutral-700 border-neutral-600 text-white focus:ring-emerald-500"/>;
      case 'file':
        return <Button variant="outline" className="w-full bg-neutral-700 border-neutral-600 hover:bg-neutral-600"><Upload className="h-4 w-4 mr-2" />{option.label}</Button>;
      default: return null;
    }
  };

  return (
    <div className="p-6 bg-neutral-900/50 backdrop-blur-sm border border-neutral-800/80 rounded-2xl">
      <Tabs defaultValue={categoryOptions[0].id} className="w-full">
        <TabsList className="grid w-full gap-2 bg-neutral-800/80 p-1.5 rounded-lg" style={{ gridTemplateColumns: `repeat(${categoryOptions.length}, minmax(0, 1fr))` }}>
          {categoryOptions.map(tab => (<TabsTrigger key={tab.id} value={tab.id} className="group data-[state=active]:bg-emerald-600 data-[state=active]:text-white data-[state=active]:shadow-md text-neutral-300 rounded-md flex items-center gap-2 h-11 transition-colors"><tab.icon className="h-5 w-5" /><span className="text-sm font-semibold">{tab.label}</span></TabsTrigger>))}
        </TabsList>
        <div className="mt-6">
          {categoryOptions.map(tab => (<TabsContent key={tab.id} value={tab.id} className="mt-0"><Accordion type="multiple" defaultValue={tab.options.map(opt => opt.id)} className="w-full space-y-3">{tab.options.map(option => (<AccordionItem key={option.id} value={option.id} className="bg-neutral-800/50 rounded-xl border-none"><AccordionTrigger className="px-5 hover:no-underline font-semibold text-neutral-100">{option.label}</AccordionTrigger><AccordionContent className="px-5 pt-2 pb-5">{renderOptionControl(option)}</AccordionContent></AccordionItem>))}</Accordion></TabsContent>))}
        </div>
      </Tabs>
      <div className="mt-8 pt-6 border-t border-neutral-700 space-y-4">
        <div className="text-right"><span className="text-3xl font-bold text-emerald-400">S/ 350.00</span><p className="text-xs text-neutral-400">Precio estimado</p></div>
        <div className="space-y-3 pt-2">
          <Button size="lg" className="w-full h-12 text-base font-bold text-white bg-gradient-to-br from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 shadow-lg transition-all duration-300 transform hover:scale-105 active:scale-100"><ShoppingCart className="h-5 w-5 mr-3"/>Añadir al Carrito</Button>
          <div className="flex gap-3"><Button variant="outline" className="flex-1 bg-transparent border-neutral-700 text-neutral-300 hover:bg-neutral-800 hover:text-white hover:border-neutral-600"><Heart className="h-4 w-4 mr-2" /> Guardar</Button><Button variant="outline" className="flex-1 bg-transparent border-neutral-700 text-neutral-300 hover:bg-neutral-800 hover:text-white hover:border-neutral-600"><Share2 className="h-4 w-4 mr-2" /> Compartir</Button></div>
        </div>
      </div>
    </div>
  );
}
