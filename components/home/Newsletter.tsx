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
    <section className="py-20 sm:py-32 bg-white dark:bg-neutral-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative bg-neutral-900 rounded-[3rem] overflow-hidden p-8 sm:p-12 lg:p-20 shadow-2xl">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-600/20 rounded-full blur-[100px] opacity-50 pointer-events-none -translate-y-1/2 translate-x-1/4" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary-600/20 rounded-full blur-[80px] opacity-50 pointer-events-none translate-y-1/2 -translate-x-1/4" />

          <div className="relative max-w-3xl mx-auto text-center z-10">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-white tracking-tight mb-6">
              Únete a Nuestra Comunidad
            </h2>
            <p className="text-lg text-neutral-300 leading-relaxed font-light mb-10 text-balance">
              Recibe historias inspiradoras de nuestros artesanos, acceso anticipado a nuevas colecciones y ofertas exclusivas directamente en tu bandeja de entrada.
            </p>

            <div>
              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center text-center animate-fade-in-up">
                  <div className="h-16 w-16 bg-green-500/20 rounded-full flex items-center justify-center mb-4">
                    <CheckCircle className="h-8 w-8 text-green-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white font-playfair mb-2">¡Gracias por suscribirte!</h3>
                  <p className="text-neutral-300">Revisa tu correo para confirmar tu suscripción.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
                  <div className="relative group">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        if (error) setError('');
                      }}
                      className="w-full h-14 px-6 pr-36 rounded-full bg-white/10 text-white placeholder-neutral-400 border border-white/10 focus:outline-none focus:bg-white/15 focus:border-white/20 focus:ring-1 focus:ring-white/20 transition-all duration-300 backdrop-blur-sm"
                      placeholder="Tu correo electrónico"
                      aria-label="Dirección de correo electrónico"
                    />
                    <button
                      type="submit"
                      className="absolute top-1 right-1 bottom-1 px-8 bg-primary-600 text-white rounded-full font-bold hover:bg-primary-500 transition-all duration-300 shadow-lg shadow-black/20 hover:shadow-primary-600/30 flex items-center justify-center"
                      aria-label="Suscribirse a la newsletter"
                    >
                      <span className="hidden sm:inline">Suscribirme</span>
                      <Send className="h-4 w-4 sm:hidden" />
                    </button>
                  </div>
                  {error && (
                    <p className="mt-3 text-sm text-red-400 font-medium animate-shake">{error}</p>
                  )}
                  {!error && (
                    <p className="mt-4 text-xs text-neutral-500 uppercase tracking-wider font-medium">
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