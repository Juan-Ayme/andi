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
    <div className="min-h-screen pt-28 pb-12 bg-neutral-50 dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100 transition-colors duration-300">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* --- Sección de Héroe --- */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-10 items-center mb-28 animate-fade-in-up">
          <div className="lg:pr-8">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-playfair font-bold text-neutral-900 dark:text-white tracking-tight leading-tight">
              Nuestra Historia: <span className="text-primary-600 dark:text-primary-500">Tejiendo Futuro, Honrando el Pasado.</span>
            </h1>
            <p className="mt-6 text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed font-light">
              ArteAndino.pe nace de una profunda admiración por el patrimonio cultural ayacuchano. Nuestra misión es crear un puente digital que conecte la maestría de nuestros artesanos con un público global, asegurando que cada pieza única encuentre un hogar donde será valorada.
            </p>
            <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed font-light">
              Combinamos técnicas ancestrales con tecnología moderna para llevar creaciones personalizadas a todo el mundo, generando un impacto económico justo y sostenible para las comunidades artesanas.
            </p>
            <div className="mt-10">
              <Button asChild size="lg" className="h-14 px-8 text-base font-bold text-white bg-primary-600 hover:bg-primary-700 shadow-lg shadow-primary-600/20 transition-all duration-300 transform hover:scale-[1.02] group rounded-full">
                <Link href="/artesanos">
                  Conoce a nuestros artesanos
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>

          <div className="relative h-[550px] rounded-[2rem] overflow-hidden shadow-2xl transform rotate-1 hover:rotate-0 transition-all duration-700 ease-out border border-white/20 dark:border-neutral-800">
            <Image
              src="https://scontent-lim1-1.xx.fbcdn.net/v/t1.6435-9/104309985_3276728082379787_3240357897148681908_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=2285d6&_nc_eui2=AeHxCb7GcJ3EJlqvFiyzH-Rgz_tJeFwb9HvP-0l4XBv0e2dT9upXaEAqeOzWZaOjFbr6HOm0aEHGppmGCwst_9ay&_nc_ohc=d0SStGY7sWcQ7kNvwHGgB1N&_nc_oc=Adlao3dlsorhQGf5fXFLwlrASBURjM-eCwZtp1bLOT0Y9pvjYvMoZRjnE3-kUbSihXi76sHRvfnXDJypavhpyDp0&_nc_zt=23&_nc_ht=scontent-lim1-1.xx&_nc_gid=x-2msLRe-WfwABAJUefSuQ&oh=00_AfMfbRFbdU43sbdBoznQQabubrcMwYeJ3wKdDRp_wsMXYw&oe=6883ED15"
              alt="Artesano sonriendo en su taller"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/60 to-transparent" />
          </div>
        </section>

        {/* --- Sección de Estadísticas --- */}
        <section className="bg-white dark:bg-neutral-900 rounded-[2.5rem] p-12 mb-28 shadow-xl shadow-neutral-200/50 dark:shadow-none border border-neutral-100 dark:border-neutral-800">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-neutral-100 dark:divide-neutral-800">
            {stats.map((stat, index) => (
              <div key={index} className="px-4">
                <stat.icon className="h-8 w-8 mx-auto text-primary-500 mb-4 opacity-80" />
                <p className="text-4xl sm:text-5xl font-playfair font-bold text-neutral-900 dark:text-white">{stat.number}</p>
                <p className="mt-2 text-sm font-bold uppercase tracking-wider text-neutral-500 dark:text-neutral-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* --- Sección de Misión --- */}
        <section className="text-center mb-16">
          <h2 className="text-4xl font-playfair font-bold text-neutral-900 dark:text-white tracking-tight mb-4">Nuestros Pilares</h2>
          <p className="max-w-3xl mx-auto text-lg text-neutral-600 dark:text-neutral-300 font-light">
            Cada acción que tomamos se basa en tres compromisos fundamentales que guían nuestro proyecto.
          </p>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {missionPoints.map((point) => (
              <div key={point.title} className="bg-white dark:bg-neutral-900 p-8 rounded-[2rem] shadow-lg dark:shadow-none border border-neutral-100 dark:border-neutral-800 text-left transition-transform hover:-translate-y-1 duration-300">
                <div className="inline-block p-4 bg-primary-100 dark:bg-primary-900/30 rounded-2xl mb-6">
                  <point.icon className="h-8 w-8 text-primary-600 dark:text-primary-400" />
                </div>
                <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-3 font-playfair">{point.title}</h3>
                <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed text-sm">{point.description}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
