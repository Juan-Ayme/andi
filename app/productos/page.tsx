import ProductGrid from '@/components/productos/ProductGrid';
import ProductFilters from '@/components/productos/ProductFilters';
import { Button } from '@/components/ui/button';
import { Grid2X2, LayoutList, Filter } from 'lucide-react';

export default function ProductosPage() {
  return (
    <div className="min-h-screen pt-28 bg-neutral-50 dark:bg-neutral-950 transition-colors duration-300">
      <div className="absolute inset-0 bg-[url('/patterns/inca-pattern.svg')] opacity-[0.03] dark:opacity-5 pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 animate-fade-in">
        <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-12 gap-6">
          <div>
            <div className="inline-block px-3 py-1 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-xs font-bold uppercase tracking-wider mb-3">
              Catálogo Completo
            </div>
            <h1 className="text-4xl md:text-5xl font-playfair font-bold text-neutral-900 dark:text-white tracking-tight mb-2">
              Nuestros Productos
            </h1>
            <p className="text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed border-l-4 border-primary-500 pl-4 py-1">
              Descubre nuestra colección completa de artesanías ayacuchanas.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="bg-white dark:bg-neutral-800 p-1 rounded-xl border border-neutral-200 dark:border-neutral-700 shadow-sm flex items-center">
              <Button variant="ghost" size="icon" className="hover:bg-neutral-100 dark:hover:bg-neutral-700 rounded-lg text-neutral-600 dark:text-neutral-300">
                <Grid2X2 className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-neutral-100 dark:hover:bg-neutral-700 rounded-lg text-neutral-400 dark:text-neutral-500">
                <LayoutList className="h-5 w-5" />
              </Button>
            </div>
            <Button variant="outline" className="h-10 bg-white dark:bg-neutral-800 border-neutral-200 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-50 dark:hover:bg-neutral-700 rounded-xl px-4">
              <Filter className="h-4 w-4 mr-2" />
              Filtros
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
          <div className="lg:col-span-1 hidden lg:block">
            <div className="sticky top-32">
              <ProductFilters />
            </div>
          </div>
          <div className="lg:col-span-3">
            <ProductGrid />
          </div>
        </div>
      </div>
    </div>
  );
}