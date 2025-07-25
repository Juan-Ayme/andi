import ProductGrid from '@/components/productos/ProductGrid';
import ProductFilters from '@/components/productos/ProductFilters';
import { Button } from '@/components/ui/button';
import { Grid2X2, LayoutList, Filter } from 'lucide-react';

export default function ProductosPage() {
  return (
    <div className="min-h-screen pt-16 bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950">
      <div className="absolute inset-0 bg-[url('/patterns/inca-pattern.svg')] opacity-5"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-neutral-100 neon-text">Nuestros Productos</h1>
            <p className="mt-2 text-neutral-300">Descubre nuestra colección de artesanías ayacuchanas</p>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="flex bg-neutral-800/50 rounded-lg p-1 border border-neutral-700">
              <Button variant="ghost" size="sm" className="px-3 text-neutral-300 hover:text-primary-400 hover:bg-primary-500/20">
                <Grid2X2 className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" className="px-3 text-neutral-300 hover:text-primary-400 hover:bg-primary-500/20">
                <LayoutList className="h-4 w-4" />
              </Button>
            </div>
            <Button variant="outline" className="bg-neutral-800/50 border-neutral-700 text-neutral-300 hover:bg-neutral-700/50">
              <Filter className="h-4 w-4 mr-2" />
              Filtros
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <ProductFilters />
          </div>
          <div className="lg:col-span-3">
            <ProductGrid />
          </div>
        </div>
      </div>
    </div>
  );
}