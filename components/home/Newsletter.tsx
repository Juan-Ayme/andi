'use client';

import { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!email) {
      setError('Por favor, ingresa tu correo electrónico.');
      return;
    }
    
    // Simple regex for email validation
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError('Por favor, ingresa un correo electrónico válido.');
      return;
    }
    
    // Simulate API call success
    console.log('Submitting email:', email);
    setTimeout(() => {
      setIsSubmitted(true);
      setError('');
    }, 500);
  };

  // Reset form to allow new subscriptions
  if (isSubmitted) {
    setTimeout(() => {
      setIsSubmitted(false);
      setEmail('');
    }, 5000); // Reset after 5 seconds
  }

  return (
    // ESTILO: Sección con más padding
    <section className="py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ESTILO: Tarjeta oscura con efecto de fondo tipo "aurora" */}
        <div className="relative bg-slate-900 rounded-3xl overflow-hidden p-8 sm:p-12 lg:p-16">
          <div className="absolute -top-24 -right-24 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl" aria-hidden="true" />
          <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl" aria-hidden="true" />

          <div className="relative max-w-3xl mx-auto text-center">
            {/* ESTILO: Tipografía mejorada y más jerarquía */}
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-white tracking-tight">
              Únete a Nuestra Comunidad
            </h2>
            <p className="mt-4 text-lg text-slate-300 leading-relaxed">
              Recibe historias, acceso anticipado a colecciones y ofertas exclusivas que solo compartimos con nuestra familia de suscriptores.
            </p>
            
            <div className="mt-10">
              {isSubmitted ? (
                // ESTILO: Mensaje de éxito más limpio y centrado
                <div className="flex flex-col items-center justify-center text-center transition-opacity duration-300">
                  <CheckCircle className="h-12 w-12 text-green-400 mb-4" />
                  <h3 className="text-xl font-semibold text-white">¡Gracias por suscribirte!</h3>
                  <p className="text-slate-300 mt-1">Revisa tu correo para confirmar tu suscripción.</p>
                </div>
              ) : (
                // ESTILO: Formulario rediseñado en forma de píldora
                <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
                  <div className="relative">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        if (error) setError('');
                      }}
                      className="w-full px-6 py-4 pr-32 sm:pr-40 rounded-full bg-white/10 text-white placeholder-slate-400 border border-slate-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300"
                      placeholder="Tu mejor correo electrónico"
                      aria-label="Dirección de correo electrónico"
                    />
                    <button
                      type="submit"
                      className="absolute top-1/2 right-2 -translate-y-1/2 h-12 px-4 sm:px-6 flex items-center justify-center bg-emerald-600 text-white rounded-full font-semibold hover:bg-emerald-700 focus:ring-4 focus:ring-emerald-500/50 transition-all duration-300 transform hover:scale-105 active:scale-100"
                      aria-label="Suscribirse a la newsletter"
                    >
                      <span className="hidden sm:inline">Suscribirme</span>
                      <Send className="h-5 w-5 sm:hidden" />
                    </button>
                  </div>
                  {error && (
                    <p className="mt-3 text-sm text-red-400">{error}</p>
                  )}
                  {!error && (
                    <p className="mt-4 text-xs text-slate-500">
                      Respetamos tu privacidad. No spam, solo arte.
                    </p>
                  )}
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}