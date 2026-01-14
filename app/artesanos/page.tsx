import ArtisanGrid from '@/components/artesanos/ArtisanGrid';

export default function ArtesanosPage() {
  return (
    <div className="min-h-screen pt-24 bg-neutral-50 dark:bg-neutral-950 transition-colors duration-300">
      <div className="absolute inset-0 bg-[url('/patterns/inca-pattern.svg')] opacity-[0.03] dark:opacity-5 pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16 animate-fade-in-up">
          <h1 className="text-5xl font-playfair font-bold text-neutral-900 dark:text-neutral-100 mb-6">
            Nuestros Maestros Artesanos
          </h1>
          <p className="text-xl text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto leading-relaxed">
            Conoce a los guardianes de la tradición ayacuchana, quienes con sus manos dan vida a siglos de historia y cultura.
          </p>
        </div>

        <ArtisanGrid />
      </div>
    </div>
  );
}