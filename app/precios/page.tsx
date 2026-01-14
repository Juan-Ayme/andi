'use client';

import { Button } from '@/components/ui/button';
import { CheckCircle, ArrowRight, ShieldCheck, Zap, Globe } from 'lucide-react';
import Link from 'next/link';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const pricingPlans = [
  {
    name: 'Plan Básico',
    price: 'Gratis',
    priceDescription: 'Para siempre',
    description: 'Ideal para artesanos que quieren dar sus primeros pasos en el mundo digital.',
    features: [
      'Perfil de artesano público',
      'Hasta 5 productos en la tienda',
      'Procesamiento de pagos seguro',
      'Soporte por correo electrónico',
    ],
    cta: 'Comienza Gratis',
    href: '/registro/basico',
    isFeatured: false,
    icon: ShieldCheck
  },
  {
    name: 'Plan Profesional',
    price: 'S/ 29',
    priceDescription: 'por mes',
    description: 'La solución completa para hacer crecer tu negocio y llegar a más clientes.',
    features: [
      'Todo lo del Plan Básico',
      'Hasta 50 productos en la tienda',
      'Herramientas de personalización avanzadas',
      'Aparición destacada en la web',
      'Estadísticas de visitas y ventas',
      'Soporte prioritario por WhatsApp',
    ],
    cta: 'Elige Profesional',
    href: '/registro/profesional',
    isFeatured: true,
    icon: Zap
  },
  {
    name: 'Plan Maestro',
    price: 'Personalizado',
    priceDescription: 'para asociaciones',
    description: 'Soluciones a medida para cooperativas, asociaciones o talleres grandes.',
    features: [
      'Todo lo del Plan Profesional',
      'Productos ilimitados',
      'Gestión de múltiples artesanos',
      'Capacitaciones y talleres exclusivos',
      'Soporte dedicado y consultoría',
    ],
    cta: 'Contáctanos',
    href: '/contacto',
    isFeatured: false,
    icon: Globe
  },
  {
    name: 'Plan Anual Profesional',
    price: 'S/ 290',
    priceDescription: 'por año (ahorra 2 meses)',
    description: 'El mismo poder del Plan Profesional, con un descuento especial por compromiso anual.',
    features: [
      'Todo lo del Plan Profesional',
      '2 meses gratis',
      'Insignia de "Artesano Verificado" anual',
      'Acceso anticipado a nuevas funciones',
    ],
    cta: 'Elige Anual',
    href: '/registro/profesional-anual',
    isFeatured: false,
    icon: Zap
  }
];

const faqs = [
  {
    question: '¿Hay algún costo de comisión por venta?',
    answer: 'En el Plan Básico, aplicamos una pequeña comisión del 10% sobre cada venta para cubrir los costos de la plataforma y procesamiento de pagos. En el Plan Profesional, la comisión se reduce al 5%. El Plan Maestro puede tener comisiones personalizadas.'
  },
  {
    question: '¿Puedo cambiar de plan en cualquier momento?',
    answer: '¡Por supuesto! Puedes mejorar tu plan de Básico a Profesional en cualquier momento desde tu panel de artesano. Si deseas cambiar a un plan inferior o cancelar, puedes hacerlo al final de tu ciclo de facturación.'
  },
  {
    question: '¿Qué necesito para registrarme?',
    answer: 'Para registrarte, necesitarás tu información de contacto, fotos de tus productos y tu taller, y una breve historia sobre ti y tu arte. Para los planes de pago, requerirás un método de pago válido.'
  },
  {
    question: '¿Cómo recibo mis pagos?',
    answer: 'Los pagos de tus ventas se procesan de forma segura y se depositan directamente en la cuenta bancaria que registres en nuestra plataforma. Los depósitos se realizan de forma semanal.'
  }
]

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-950 pt-28 pb-20 transition-colors duration-300">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* --- Hero Section --- */}
        <section className="text-center mb-20 animate-fade-in-up">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-playfair font-bold text-neutral-900 dark:text-white tracking-tight leadin-tight">
            Únete a Nuestra Comunidad de <span className="text-primary-600 dark:text-primary-500">Maestros Artesanos</span>
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed font-light">
            Elige el plan que mejor se adapte a tus necesidades y comienza a vender tus creaciones únicas al mundo. Ofrecemos las herramientas y el soporte para que solo te preocupes por lo que mejor sabes hacer: crear arte.
          </p>
        </section>

        {/* --- Pricing Tiers --- */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-start">
          {pricingPlans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-[2rem] p-8 border transition-all duration-300 relative flex flex-col h-full ${plan.isFeatured
                  ? 'bg-neutral-900 dark:bg-neutral-800 text-white shadow-2xl scale-105 z-10 border-neutral-800 dark:border-neutral-700'
                  : 'bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white shadow-lg hover:shadow-xl border-neutral-100 dark:border-neutral-800 hover:-translate-y-1'
                }`}
            >
              {plan.isFeatured && (
                <div className="absolute top-0 right-0 left-0 -mt-4 text-center">
                  <span className="bg-gradient-to-r from-primary-500 to-primary-600 text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider shadow-lg">Más Popular</span>
                </div>
              )}

              <div className={`h-12 w-12 rounded-2xl flex items-center justify-center mb-6 ${plan.isFeatured ? 'bg-white/10' : 'bg-primary-50 dark:bg-neutral-800'}`}>
                <plan.icon className={`h-6 w-6 ${plan.isFeatured ? 'text-primary-400' : 'text-primary-600 dark:text-primary-400'}`} />
              </div>

              <h2 className="text-2xl font-bold font-playfair">{plan.name}</h2>
              <p className={`mt-2 text-sm leading-relaxed ${plan.isFeatured ? 'text-neutral-400' : 'text-neutral-500 dark:text-neutral-400'}`}>{plan.description}</p>

              <div className="mt-8 mb-8">
                <div className="flex items-baseline">
                  <span className="text-4xl font-extrabold">{plan.price}</span>
                </div>
                <span className={`text-sm font-medium ${plan.isFeatured ? 'text-neutral-400' : 'text-neutral-500'}`}>{plan.priceDescription}</span>
              </div>

              <ul className="space-y-4 mb-8 flex-1">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className={`h-5 w-5 mr-3 flex-shrink-0 ${plan.isFeatured ? 'text-primary-500' : 'text-primary-600 dark:text-primary-500'}`} />
                    <span className={`text-sm ${plan.isFeatured ? 'text-neutral-300' : 'text-neutral-600 dark:text-neutral-400'}`}>{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto">
                <Button asChild size="lg" className={`w-full h-12 text-base font-bold rounded-xl transition-all duration-300 transform active:scale-95 group ${plan.isFeatured
                    ? 'bg-primary-600 text-white hover:bg-primary-700 shadow-lg shadow-primary-600/30'
                    : 'bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 hover:bg-neutral-800 dark:hover:bg-neutral-200'
                  }`}>
                  <Link href={plan.href}>
                    {plan.cta}
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </section>

        {/* --- FAQ Section --- */}
        <section className="mt-32 max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-neutral-900 dark:text-white tracking-tight">Preguntas Frecuentes</h2>
            <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-400">Resolvemos tus dudas para que te unas con total confianza.</p>
          </div>
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index + 1}`} className="bg-white dark:bg-neutral-900 px-6 py-2 rounded-2xl shadow-sm border border-neutral-100 dark:border-neutral-800 data-[state=open]:border-primary-200 dark:data-[state=open]:border-primary-900/50 transition-all">
                <AccordionTrigger className="text-lg font-semibold text-neutral-900 dark:text-white hover:no-underline hover:text-primary-600 dark:hover:text-primary-400 text-left">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-neutral-600 dark:text-neutral-400 leading-relaxed pt-2 text-base">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>
      </main>
    </div>
  );
}