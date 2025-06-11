import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowRight, Users, Award, Heart, Globe } from 'lucide-react';
import Link from 'next/link'; // Agregar esta línea

export default function NosotrosPage() {
  return (
    <div className="min-h-screen pt-16 bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950">
      <div className="absolute inset-0 bg-[url('/patterns/inca-pattern.svg')] opacity-5"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h1 className="text-4xl font-bold text-neutral-100  mb-6">Nuestra Historia</h1>
            <p className="text-lg text-neutral-300 mb-6 leading-relaxed">
              ArteAndino.pe nace con la misión de preservar el patrimonio cultural ayacuchano mientras creamos oportunidades económicas sostenibles para nuestros artesanos.
            </p>
            <p className="text-lg text-neutral-300 mb-8 leading-relaxed">
              Combinamos técnicas ancestrales con tecnología moderna para llevar piezas únicas personalizadas a hogares de todo el mundo.
            </p>
<Link href="/artesanos">
  <Button
    className="
      group
      inline-flex items-center justify-center
      px-6 py-3
      font-bold text-white
      bg-gradient-to-r from-amber-500 to-red-600
      rounded-full
      transition-all duration-300 ease-in-out
      hover:shadow-xl hover:brightness-110
    "
  >
    Conoce a nuestros artesanos
    <ArrowRight 
      className="
        ml-2 h-5 w-5 
        transition-transform duration-300 ease-in-out
        group-hover:translate-x-1
      " 
    />
  </Button>
</Link>
          </div>
          
          <div className="relative h-[500px] rounded-lg overflow-hidden shadow-2xl">
            <Image
              src="https://images.pexels.com/photos/6045240/pexels-photo-6045240.jpeg"
              alt="Artesano trabajando"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
          {[
            { icon: Users, number: '150+', label: 'Artesanos Activos' },
            { icon: Award, number: '500+', label: 'Productos Únicos' },
            { icon: Heart, number: '2000+', label: 'Clientes Satisfechos' },
            { icon: Globe, number: '25+', label: 'Países Alcanzados' }
          ].map((stat, index) => (
            <div key={index} className="card-dark p-6 text-center">
              <stat.icon className="h-12 w-12 text-primary-400 mx-auto mb-4" />
              <div className="text-3xl font-bold text-primary-400  mb-2">{stat.number}</div>
              <div className="text-neutral-300">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Mission Section */}
        <div className="card-dark p-8 mb-16">
          <h2 className="text-3xl font-bold text-neutral-100 text-center mb-8">Nuestra Misión</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-primary-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-black" />
              </div>
              <h3 className="text-xl font-bold text-neutral-100 mb-3">Preservar Tradiciones</h3>
              <p className="text-neutral-300">Mantenemos vivas las técnicas ancestrales ayacuchanas para las futuras generaciones.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-secondary-500 to-secondary-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-black" />
              </div>
              <h3 className="text-xl font-bold text-neutral-100 mb-3">Empoderar Artesanos</h3>
              <p className="text-neutral-300">Creamos oportunidades económicas justas y sostenibles para nuestros artesanos.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-accent-500 to-accent-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="h-8 w-8 text-black" />
              </div>
              <h3 className="text-xl font-bold text-neutral-100 mb-3">Conectar Culturas</h3>
              <p className="text-neutral-300">Llevamos la riqueza cultural ayacuchana a hogares de todo el mundo.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}