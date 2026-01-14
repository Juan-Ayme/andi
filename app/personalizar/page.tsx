'use client';

import { Suspense, useState, useMemo } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stage, useGLTF } from '@react-three/drei';
import { Wand2, ArrowLeft, Loader2 } from 'lucide-react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import CustomizationPanel from '@/components/personalizar/CustomizationPanel';
import { cn } from '@/lib/utils';

type Category = {
  id: string;
  name: string;
  image: string;
  modelPath: string;
};

const ModelViewer = ({ modelPath }: { modelPath: string }) => {
  const { scene } = useGLTF(modelPath);
  return <primitive object={scene.clone()} />;
};

const validCategories: Category[] = [
  { id: 'retablos', name: 'Retablos', image: 'https://i0.wp.com/perusumaq.com/wp-content/uploads/2018/03/reta-sumaq.jpg?fit=1200%2C800&ssl=1', modelPath: '/models/retablo.glb' },
  { id: 'textiles', name: 'Textiles', image: 'https://scontent-lim1-1.xx.fbcdn.net/v/t1.6435-9/60168890_365816247379014_1582626239472992256_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHlYoxQaRRFkjFl57vbU_dsqK6waQJtGq2orrBpAm0arSBznEe4oTAS4PuWfrI3NnqXI_NU1Qr90rh-_0F2JxhC&_nc_ohc=v32LHzeDzPoQ7kNvwHCzeRu&_nc_oc=Adnkn1R-nmOaoIwquSWtLCgmkxibEC248zULaEltzsjs3a7Rf1dePolSwiM82XR-9IV6pKAU0qonol2Wwf2QHdSl&_nc_zt=23&_nc_ht=scontent-lim1-1.xx&_nc_gid=ooVh7Yy5q8FK8n3_lZiUyg&oh=00_AfOXniLGQCFSQMp60gqpUWJ4AjWjGZru0ITZiLMK3FqFdA&oe=6883E6EC', modelPath: '/models/textil.glb' },
  { id: 'ceramica', name: 'Cerámica', image: 'https://images.pexels.com/photos/716107/pexels-photo-716107.jpeg', modelPath: '/models/ceramica.glb' },
  { id: 'tallados', name: 'Tallados', image: 'https://arc-anglerfish-arc2-prod-elcomercio.s3.amazonaws.com/public/ZNYJC63G5JA75PZQZCX2HDI3HQ.jpg', modelPath: '/models/piedra.glb' },
  { id: 'joyeria', name: 'Joyería', image: 'https://thumbs.dreamstime.com/b/anillos-de-perlas-cadenas-doradas-fondo-joyer%C3%ADa-lujo-muchos-elementos-antiguos-y-objetos-joyas-233467452.jpg', modelPath: '/models/joyeria.glb' },
];

// Preload models
validCategories.forEach(cat => useGLTF.preload(cat.modelPath));

export default function PersonalizarPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categoryData = useMemo(() => {
    return validCategories.find((cat) => cat.id === selectedCategory);
  }, [selectedCategory]);

  return (
    <div className="min-h-screen pt-28 pb-12 bg-neutral-50 dark:bg-neutral-950 font-sans transition-colors duration-500">
      {/* Background Pattern */}
      <div className="fixed inset-0 z-0 opacity-[0.03] pointer-events-none bg-[url('/patterns/inca-pattern.svg')] bg-repeat bg-[length:100px_100px]"></div>

      <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {!selectedCategory ? (
          // Selection View
          <div className="animate-fade-in-up">
            <header className="text-center mb-16">
              <div className="inline-flex items-center justify-center p-3 bg-primary-100 dark:bg-primary-900/30 text-primary-600 rounded-full mb-6">
                <Wand2 className="h-8 w-8" />
              </div>
              <h1 className="text-5xl md:text-6xl font-bold font-playfair tracking-tight text-neutral-900 dark:text-neutral-50 mb-6">
                Diseña Tu Legado
              </h1>
              <p className="text-xl text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto leading-relaxed">
                Selecciona una categoría y colabora con nuestros maestros artesanos para crear una pieza única, hecha exclusivamente para ti.
              </p>
            </header>

            <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
              {validCategories.map((category, index) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className="group relative aspect-[3/5] text-left bg-neutral-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 cursor-pointer"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 20vw"
                    className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 p-6 w-full">
                    <span className="block text-primary-400 text-xs font-bold uppercase tracking-wider mb-2 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">Personalizar</span>
                    <h3 className="text-2xl font-playfair font-bold text-white group-hover:text-primary-200 transition-colors">{category.name}</h3>
                  </div>
                </button>
              ))}
            </section>
          </div>
        ) : (
          // Customization View
          <div className="animate-in fade-in slide-in-from-bottom-8 duration-700">
            <header className="mb-8 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <Button
                  onClick={() => setSelectedCategory(null)}
                  variant="ghost"
                  className="group text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-100"
                >
                  <ArrowLeft className="h-5 w-5 mr-2 group-hover:-translate-x-1 transition-transform" />
                  Volver
                </Button>
                <div className="h-6 w-px bg-neutral-300 dark:bg-neutral-700 mx-2"></div>
                <span className="text-xl font-playfair font-bold text-neutral-900 dark:text-white">
                  {categoryData?.name} app
                </span>
              </div>

              <div className="hidden md:flex items-center gap-2 text-sm text-neutral-500">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                Conectado con Taller {categoryData?.name}
              </div>
            </header>

            <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 h-[calc(100vh-10rem)] min-h-[500px]">
              {/* 3D Viewer Area */}
              <div className="lg:col-span-8 bg-neutral-100 dark:bg-neutral-900/50 rounded-3xl overflow-hidden shadow-inner relative border border-white/50 dark:border-neutral-800">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-neutral-200/50 via-neutral-100/50 to-neutral-200/50 dark:from-neutral-800/30 dark:via-neutral-900/30 dark:to-black/30 pointer-events-none"></div>

                <Canvas camera={{ position: [0, 1, 5], fov: 45 }} className="w-full h-full cursor-grab active:cursor-grabbing">
                  <Suspense fallback={null}>
                    <Stage environment="city" intensity={0.6} adjustCamera={1.2}>
                      {categoryData?.modelPath && (
                        <ModelViewer modelPath={categoryData.modelPath} />
                      )}
                    </Stage>
                    <OrbitControls makeDefault autoRotate autoRotateSpeed={0.5} enablePan={false} minDistance={2} maxDistance={10} />
                  </Suspense>
                </Canvas>

                {/* Overlay Controls */}
                <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end pointer-events-none">
                  <div className="bg-white/80 dark:bg-black/60 backdrop-blur-md p-4 rounded-xl border border-white/20 shadow-lg">
                    <p className="text-xs font-semibold uppercase tracking-wider text-neutral-500 mb-1">Vista 3D Interactiva</p>
                    <p className="text-sm text-neutral-800 dark:text-neutral-200">Gira y acerca para ver detalles</p>
                  </div>
                </div>

                {/* Fallback loading state if needed, though Suspense handles it */}
              </div>

              {/* Controls Sidebar */}
              <aside className="lg:col-span-4 flex flex-col h-full overflow-hidden">
                <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar">
                  <CustomizationPanel categoryId={selectedCategory} />
                </div>
              </aside>
            </section>
          </div>
        )}
      </main>
    </div>
  );
}