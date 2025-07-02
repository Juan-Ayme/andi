'use client';

import { Button } from '@/components/ui/button';
import { CheckCircle, ArrowRight } from 'lucide-react';
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
  },
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
    <div className="min-h-screen bg-slate-50 pt-28 pb-20">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* --- Hero Section --- */}
        <section className="text-center mb-20">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Únete a Nuestra Comunidad de <span className="text-emerald-600">Maestros Artesanos</span>
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-lg text-slate-600 leading-relaxed">
            Elige el plan que mejor se adapte a tus necesidades y comienza a vender tus creaciones únicas al mundo. Ofrecemos las herramientas y el soporte para que solo te preocupes por lo que mejor sabes hacer: crear arte.
          </p>
        </section>

        {/* --- Pricing Tiers --- */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {pricingPlans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-2xl p-8 border transition-all duration-300 ${
                plan.isFeatured ? 'bg-slate-900 text-white shadow-2xl scale-105' : 'bg-white shadow-lg'
              }`}
            >
              {plan.isFeatured && (
                <div className="text-center mb-4">
                  <span className="bg-emerald-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase">Más Popular</span>
                </div>
              )}
              <h2 className={`text-2xl font-bold ${plan.isFeatured ? 'text-white' : 'text-slate-900'}`}>{plan.name}</h2>
              <p className={`mt-2 text-sm ${plan.isFeatured ? 'text-slate-300' : 'text-slate-500'}`}>{plan.description}</p>
              
              <div className="mt-6">
                <span className={`text-5xl font-extrabold ${plan.isFeatured ? 'text-white' : 'text-slate-900'}`}>{plan.price}</span>
                <span className={`ml-2 text-base font-medium ${plan.isFeatured ? 'text-slate-400' : 'text-slate-500'}`}>{plan.priceDescription}</span>
              </div>

              <ul className="mt-8 space-y-4">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className={`h-6 w-6 mr-3 flex-shrink-0 ${plan.isFeatured ? 'text-emerald-400' : 'text-emerald-500'}`} />
                    <span className={`text-sm ${plan.isFeatured ? 'text-slate-200' : 'text-slate-700'}`}>{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-10">
                <Button asChild size="lg" className={`w-full h-12 text-base font-bold transition-all duration-300 transform hover:scale-105 active:scale-100 group ${ plan.isFeatured ? 'bg-emerald-500 text-white hover:bg-emerald-600' : 'bg-slate-900 text-white hover:bg-slate-800' }`}>
                  <Link href={plan.href}>
                    {plan.cta}
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </section>

        {/* --- FAQ Section --- */}
        <section className="mt-28 max-w-4xl mx-auto">
            <div className="text-center mb-12">
                <h2 className="text-4xl font-extrabold text-slate-900 tracking-tight">Preguntas Frecuentes</h2>
                <p className="mt-4 text-lg text-slate-600">Resolvemos tus dudas para que te unas con total confianza.</p>
            </div>
            <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index + 1}`} className="bg-white px-6 rounded-lg mb-3 shadow-sm hover:shadow-md transition-shadow">
                        <AccordionTrigger className="text-lg font-semibold text-slate-800 hover:no-underline">{faq.question}</AccordionTrigger>
                        <AccordionContent className="text-slate-600 leading-relaxed pt-2">{faq.answer}</AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </section>
      </main>
    </div>
  );
}