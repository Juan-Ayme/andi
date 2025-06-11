'use client';

import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';
import RetabloModel from '@/components/3d/RetabloModel';
import CustomizationPanel from '@/components/personalizar/CustomizationPanel';
import { Sparkles, Palette, Wand2 } from 'lucide-react';

export default function PersonalizarPage() {
  return (
    <div className="min-h-screen pt-16 bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950">
      <div className="absolute inset-0 bg-[url('/patterns/inca-pattern.svg')] opacity-5"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <div className="p-3 rounded-full bg-gradient-to-r from-primary-500 to-primary-700 animate-glow">
              <Wand2 className="h-8 w-8 text-black" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-neutral-100  mb-4">
            Personaliza tu Artesanía
          </h1>
          <p className="text-lg text-neutral-300 max-w-2xl mx-auto">
            Diseña tu propia pieza artesanal única con nuestras herramientas de personalización 3D
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* 3D Viewer */}
          <div className="card-dark p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-neutral-100 flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-primary-400" />
                Vista 3D
              </h2>
              <div className="text-sm text-neutral-400">
                Arrastra para rotar • Scroll para zoom
              </div>
            </div>
            <div className="bg-neutral-800 rounded-lg overflow-hidden aspect-square">
              <Canvas
                camera={{ position: [0, 0, 7], fov: 45 }}
                className="w-full h-full"
              >
                <Suspense fallback={null}>
                  <RetabloModel />
                  <Environment preset="sunset" />
                  <OrbitControls 
                    enablePan={false}
                    minDistance={2}
                    maxDistance={10}
                  />
                </Suspense>
              </Canvas>
            </div>
          </div>

          {/* Customization Controls */}
          <div>
            <div className="flex items-center mb-6">
              <Palette className="h-6 w-6 text-secondary-400 mr-2" />
              <h2 className="text-xl font-bold text-neutral-100">Panel de Personalización</h2>
            </div>
            <CustomizationPanel />
          </div>
        </div>

        {/* Features Section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="card-dark p-6 text-center">
            <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-primary-700 rounded-full flex items-center justify-center mx-auto mb-4">
              <Palette className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-lg font-bold text-neutral-100 mb-2">Colores Personalizados</h3>
            <p className="text-neutral-300 text-sm">Elige entre una amplia gama de colores tradicionales y modernos</p>
          </div>
          <div className="card-dark p-6 text-center">
            <div className="w-12 h-12 bg-gradient-to-r from-secondary-500 to-secondary-700 rounded-full flex items-center justify-center mx-auto mb-4">
              <Wand2 className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-lg font-bold text-neutral-100 mb-2">Diseños Únicos</h3>
            <p className="text-neutral-300 text-sm">Crea patrones y diseños que reflejen tu personalidad</p>
          </div>
          <div className="card-dark p-6 text-center">
            <div className="w-12 h-12 bg-gradient-to-r from-accent-500 to-accent-700 rounded-full flex items-center justify-center mx-auto mb-4">
              <Sparkles className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-lg font-bold text-neutral-100 mb-2">Vista Previa 3D</h3>
            <p className="text-neutral-300 text-sm">Visualiza tu creación en tiempo real antes de ordenar</p>
          </div>
        </div>
      </div>
    </div>
  );
}