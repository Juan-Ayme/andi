'use client';

import { Suspense, useState, useMemo } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, Stage, useGLTF } from '@react-three/drei';
import { Wand2, ArrowLeft } from 'lucide-react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import CustomizationPanel from '@/components/personalizar/CustomizationPanel';

// --- NUEVO (Buenas prácticas con TypeScript) ---
// 1. Definimos un tipo para la estructura de nuestros objetos de categoría.
//    Esto nos da autocompletado y seguridad de tipos.
type Category = {
  id: string;
  name: string;
  image: string;
  modelPath: string;
};

// --- ModelViewer se mantiene igual ---
const ModelViewer = ({ modelPath }: { modelPath: string }) => {
  const { scene } = useGLTF(modelPath);
  return <primitive object={scene.clone()} />;
};


// --- APLICAMOS EL TIPO AL ARRAY ---
// 2. Le decimos a TypeScript que `validCategories` es un array de objetos `Category`.
const validCategories: Category[] = [
  { id: 'retablos', name: 'Retablos', image: 'https://i0.wp.com/perusumaq.com/wp-content/uploads/2018/03/reta-sumaq.jpg?fit=1200%2C800&ssl=1', modelPath: '/models/retablo.glb' },
  { id: 'textiles', name: 'Textiles', image: 'https://scontent-lim1-1.xx.fbcdn.net/v/t1.6435-9/60168890_365816247379014_1582626239472992256_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHlYoxQaRRFkjFl57vbU_dsqK6waQJtGq2orrBpAm0arSBznEe4oTAS4PuWfrI3NnqXI_NU1Qr90rh-_0F2JxhC&_nc_ohc=v32LHzeDzPoQ7kNvwHCzeRu&_nc_oc=Adnkn1R-nmOaoIwquSWtLCgmkxibEC248zULaEltzsjs3a7Rf1dePolSwiM82XR-9IV6pKAU0qonol2Wwf2QHdSl&_nc_zt=23&_nc_ht=scontent-lim1-1.xx&_nc_gid=ooVh7Yy5q8FK8n3_lZiUyg&oh=00_AfOXniLGQCFSQMp60gqpUWJ4AjWjGZru0ITZiLMK3FqFdA&oe=6883E6EC', modelPath: '/models/textil.glb' },
  { id: 'ceramica', name: 'Cerámica', image: 'https://images.pexels.com/photos/716107/pexels-photo-716107.jpeg', modelPath: '/models/ceramica.glb' },
  { id: 'tallados', name: 'Tallados', image: 'https://arc-anglerfish-arc2-prod-elcomercio.s3.amazonaws.com/public/ZNYJC63G5JA75PZQZCX2HDI3HQ.jpg', modelPath: '/models/piedra.glb' },
  { id: 'joyeria', name: 'Joyería', image: 'https://p16-common-sign-va.tiktokcdn-us.com/tos-maliva-p-0068/ockZpWDrEFAeIACVdCESskIJCeRrfjCqP1Wigp~tplv-tiktokx-origin.image?dr=9636&x-expires=1750993200&x-signature=sePGWnmEbeyaubIXNkPOzASCUAQ%3D&t=4d5b0474&ps=13740610&shp=81f88b70&shcp=55bbe6a9&idc=useast5', modelPath: '/models/joyeria.glb' },
];

// Precargamos los modelos
validCategories.forEach(cat => useGLTF.preload(cat.modelPath));


export default function PersonalizarPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // --- CORRECCIÓN PRINCIPAL ---
  // 3. Definimos `categoryData` usando `useMemo`.
  //    TypeScript inferirá automáticamente que el tipo de `categoryData` es `Category | undefined`
  //    porque `.find()` puede no encontrar nada y devolver `undefined`.
  const categoryData = useMemo(() => {
    return validCategories.find((cat) => cat.id === selectedCategory);
  }, [selectedCategory]);

  return (
    <div className="min-h-screen pt-28 bg-black text-white">
      <div className="absolute inset-0 bg-[url('/patterns/inca-pattern.svg')] opacity-[0.02]"></div>
      
      <main className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-12">
          <Wand2 className="h-12 w-12 mx-auto text-emerald-400 mb-4" style={{ filter: 'drop-shadow(0 0 15px currentColor)' }}/>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-neutral-100">
            Tu Taller de Artesanía Digital
          </h1>
          <p className="mt-4 text-lg text-neutral-400 max-w-2xl mx-auto">
             {/* Ahora esta línea funcionará porque `categoryData` está definido */}
            {categoryData ? `Estás personalizando: ${categoryData.name}` : 'Selecciona una categoría para comenzar a diseñar tu pieza única.'}
          </p>
        </header>

        {/* El resto del componente ya estaba correcto y usaba esta lógica */}
        {!selectedCategory ? (
          <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 animate-fade-in">
            {validCategories.map(category => (
              <button key={category.id} onClick={() => setSelectedCategory(category.id)} className="group relative aspect-[4/5] text-left bg-neutral-900 rounded-2xl overflow-hidden transition-all duration-300 hover:bg-neutral-800 hover:shadow-2xl hover:shadow-emerald-900/50 hover:-translate-y-2">
                <Image src={category.image} alt={category.name} fill sizes="(max-width: 768px) 50vw, 20vw" className="object-cover opacity-50 group-hover:opacity-70 transition-opacity"/>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"/>
                <h3 className="absolute bottom-4 left-4 text-xl font-bold text-white">{category.name}</h3>
              </button>
            ))}
          </section>
        ) : (
          <section className="grid grid-cols-1 lg:grid-cols-3 gap-8 animate-fade-in">
            <div className="lg:col-span-2 bg-neutral-900/50 backdrop-blur-sm border border-neutral-800/80 rounded-2xl p-4 shadow-xl">
              <div className="relative h-[600px] w-full bg-black rounded-lg overflow-hidden">
                <Canvas camera={{ position: [0, 1, 5], fov: 50 }}>
                  <Suspense fallback={null}>
                    <Stage environment="sunset" intensity={0.7} shadows={false}>
                       {/* Esta comprobación es robusta porque categoryData puede ser undefined */}
                       {categoryData?.modelPath && (
                         <ModelViewer modelPath={categoryData.modelPath} />
                       )}
                    </Stage>
                    <OrbitControls makeDefault autoRotate autoRotateSpeed={0.5} enablePan={false} minDistance={2} maxDistance={15} />
                  </Suspense>
                </Canvas>
                <div className="absolute bottom-2 right-2 text-xs text-neutral-500">Arrastra para rotar • Scroll para zoom</div>
              </div>
            </div>

            <aside className="lg:col-span-1">
              <Button onClick={() => setSelectedCategory(null)} variant="ghost" className="mb-4 w-full text-neutral-300 hover:text-white hover:bg-neutral-800">
                <ArrowLeft className="h-4 w-4 mr-2"/>
                Cambiar Categoría
              </Button>
              <div className="bg-neutral-900/50 backdrop-blur-sm border border-neutral-800/80 rounded-2xl p-1 shadow-xl">
                <CustomizationPanel categoryId={selectedCategory} />
              </div>
            </aside>
          </section>
        )}
      </main>
    </div>
  );
}