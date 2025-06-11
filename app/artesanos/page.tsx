import ArtisanGrid from '@/components/artesanos/ArtisanGrid';

export default function ArtesanosPage() {
  return (
    <div className="min-h-screen pt-16 bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950">
      <div className="absolute inset-0 bg-[url('/patterns/inca-pattern.svg')] opacity-5"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-neutral-100 mb-4">Nuestros Artesanos</h1>
          <p className="text-lg text-neutral-300 max-w-2xl mx-auto">
            Conoce a los maestros artesanos que mantienen viva la tradición ayacuchana
          </p>
        </div>
        
        <ArtisanGrid />
      </div>
    </div>
  );
}