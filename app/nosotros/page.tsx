'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Users, Award, Heart, Globe } from 'lucide-react';

// Datos para la sección de estadísticas
const stats = [
  { icon: Users, number: '150+', label: 'Artesanos Activos' },
  { icon: Award, number: '500+', label: 'Productos Únicos' },
  { icon: Heart, number: '2000+', label: 'Clientes Satisfechos' },
  { icon: Globe, number: '25+', label: 'Países Alcanzados' }
];

// Datos para la sección de misión
const missionPoints = [
  { 
    icon: Heart, 
    title: 'Preservar Tradiciones', 
    description: 'Mantenemos vivas las técnicas ancestrales ayacuchanas para las futuras generaciones.'
  },
  { 
    icon: Users, 
    title: 'Empoderar Artesanos', 
    description: 'Creamos oportunidades económicas justas y sostenibles para nuestros artesanos y sus familias.'
  },
  { 
    icon: Globe, 
    title: 'Conectar Culturas', 
    description: 'Llevamos la riqueza y la historia de la cultura ayacuchana a hogares de todo el mundo.'
  }
];

export default function NosotrosPage() {
  return (
    <div className="min-h-screen pt-28 pb-12 bg-slate-50 text-slate-900">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* --- Sección de Héroe --- */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-10 items-center mb-28">
          <div className="lg:pr-8">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
              Nuestra Historia: <span className="text-emerald-600">Tejiendo Futuro, Honrando el Pasado.</span>
            </h1>
            <p className="mt-6 text-lg text-slate-600 leading-relaxed">
              ArteAndino.pe nace de una profunda admiración por el patrimonio cultural ayacuchano. Nuestra misión es crear un puente digital que conecte la maestría de nuestros artesanos con un público global, asegurando que cada pieza única encuentre un hogar donde será valorada.
            </p>
            <p className="mt-4 text-lg text-slate-600 leading-relaxed">
              Combinamos técnicas ancestrales con tecnología moderna para llevar creaciones personalizadas a todo el mundo, generando un impacto económico justo y sostenible para las comunidades artesanas.
            </p>
            <div className="mt-10">
                <Button asChild size="lg" className="h-14 text-base font-bold text-white bg-gradient-to-br from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 shadow-lg transition-all duration-300 transform hover:scale-105 active:scale-100 group">
                  <Link href="/artesanos">
                    Conoce a nuestros artesanos
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
            </div>
          </div>
          
          <div className="relative h-[550px] rounded-3xl overflow-hidden shadow-2xl transform rotate-3">
            <Image
              src="https://scontent-lim1-1.xx.fbcdn.net/v/t1.6435-9/104309985_3276728082379787_3240357897148681908_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=2285d6&_nc_eui2=AeHxCb7GcJ3EJlqvFiyzH-Rgz_tJeFwb9HvP-0l4XBv0e2dT9upXaEAqeOzWZaOjFbr6HOm0aEHGppmGCwst_9ay&_nc_ohc=d0SStGY7sWcQ7kNvwHGgB1N&_nc_oc=Adlao3dlsorhQGf5fXFLwlrASBURjM-eCwZtp1bLOT0Y9pvjYvMoZRjnE3-kUbSihXi76sHRvfnXDJypavhpyDp0&_nc_zt=23&_nc_ht=scontent-lim1-1.xx&_nc_gid=x-2msLRe-WfwABAJUefSuQ&oh=00_AfMfbRFbdU43sbdBoznQQabubrcMwYeJ3wKdDRp_wsMXYw&oe=6883ED15"
              alt="Artesano sonriendo en su taller"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
          </div>
        </section>

        {/* --- Sección de Estadísticas --- */}
        <section className="bg-emerald-50 rounded-3xl p-12 mb-28">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {stats.map((stat, index) => (
                <div key={index}>
                  <p className="text-4xl sm:text-5xl font-extrabold text-emerald-600">{stat.number}</p>
                  <p className="mt-2 text-base font-medium text-emerald-800">{stat.label}</p>
                </div>
              ))}
            </div>
        </section>

        {/* --- Sección de Misión --- */}
        <section className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-slate-900 tracking-tight">Nuestros Pilares</h2>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-slate-600">
            Cada acción que tomamos se basa en tres compromisos fundamentales que guían nuestro proyecto.
          </p>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {missionPoints.map((point) => (
              <div key={point.title} className="bg-white p-8 rounded-2xl shadow-lg text-left">
                <div className="inline-block p-4 bg-emerald-100 rounded-xl mb-4">
                  <point.icon className="h-8 w-8 text-emerald-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{point.title}</h3>
                <p className="text-slate-600">{point.description}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
