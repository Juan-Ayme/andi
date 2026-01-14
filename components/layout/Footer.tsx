import Link from 'next/link';
import { Facebook, Instagram, Twitter, Mail, MapPin, Phone, Sparkles, ArrowRight, ShieldCheck, CreditCard } from 'lucide-react';
import { Button } from '@/components/ui/button';
import RevealOnScroll from '@/components/ui/reveal-on-scroll';

const PaymentIcons = () => (
  <div className="flex gap-2 opacity-70 grayscale hover:grayscale-0 transition-all duration-300">
    {/* Visa */}
    <div className="h-8 w-12 bg-white rounded flex items-center justify-center p-1"><svg viewBox="0 0 38 12" xmlns="http://www.w3.org/2000/svg" className="w-full h-full"><path d="M13.2 0L9.8 11.8H7.3l2.2-11.8h3.7zm11.2 11.5c.6-.3 1.1-.5 1.7-.6.6-.1 1.1-.1 1.5 0 .6.1 1 .3 1.3.6l.3.3.4-1.9h2.3v1.8c0 .2 0 .5-.1.7l-2.4 8.7h-2.5l1.6-6.1c.1-.4.1-.7 0-.9-.1-.2-.4-.3-.7-.3-.4 0-.9.2-1.3.5-.5.3-.9.7-1.3 1.1l-1.6 5.7h-2.5l3.3-10.9zm-9.3.3h2.6l-1.6 6.3c-.4 1.4-1.8 1.9-3.2 1.4-1.2-.4-1.9-1.5-1.9-1.5l.8-1.2s.5.9 1.2 1.1c.4.1.8 0 1-.3l.2-.6-4.3-10.4h2.7l2.1 6.5 2.4-7.8zM38 11.8h-2.3l-1.4-6.9c-.4-1.6-.9-2.2-2.1-2.9 1.1.4 4.5 2.1 5.8 9.8z" fill="#1A1F70" /></svg></div>
    {/* Mastercard */}
    <div className="h-8 w-12 bg-white rounded flex items-center justify-center p-1"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 20" className="w-full h-full"><path d="M11.385 19.342c-2.348 0-4.406-.91-5.94-2.38-1.559-1.47-2.52-3.41-2.52-5.632 0-2.222.96-4.162 2.52-5.631C7.004 4.229 9.037 3.32 11.385 3.32c2.348 0 4.406.91 5.94 2.38 1.56 1.47 2.52 3.41 2.52 5.631 0 2.222-.96 4.162-2.52 5.632-1.534 1.47-3.592 2.38-5.94 2.38Zm0-13.91c-1.617 0-3.078.623-4.114 1.637-1.062 1.015-1.743 2.365-1.743 3.995s.681 2.98 1.743 3.994c1.036 1.014 2.497 1.637 4.114 1.637s3.078-.623 4.114-1.637c1.062-1.015 1.743-2.365 1.743-3.994s-.68-2.98-1.743-3.995c-1.036-1.014-2.497-1.637-4.114-1.637Z" fill="#EB001B"></path><path d="M26.476 8.527a4.195 4.195 0 0 1 2.576 3.935 3.901 3.901 0 0 1-1.396 3.237c-1.01.9-2.372 1.458-3.945 1.458-2.348 0-4.406-.91-5.94-2.38-1.56-1.47-2.52-3.41-2.52-5.631 0-2.003.82-3.791 2.23-5.078 1.38-1.288 3.228-2.076 5.3-2.076 1.632 0 3.036.565 4.19 1.583Z" fill="#F79E1B"></path><path d="M20.536 11.28c0 2.222.96 4.162 2.52 5.631 1.534 1.47 3.592 2.38 5.94 2.38 1.573 0 2.935-.558 3.946-1.458a3.9 3.9 0 0 0 1.396-3.237 4.2 4.2 0 0 0-2.576-3.935 4.195 4.195 0 0 1-2.576 3.935 3.901 3.901 0 0 1-1.396 3.237c-1.01.9-2.372 1.458-3.945 1.458-2.348 0-4.406-.91-5.94-2.38-1.56-1.47-2.52-3.41-2.52-5.631Z" fill="#00A2E5"></path></svg></div>
  </div>
);

export default function Footer() {
  return (
    <footer className="bg-neutral-900 border-t border-neutral-800 pt-20 pb-8 relative z-10 overflow-hidden">
      {/* Decorative top border gradient */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary-600 via-secondary-500 to-primary-600 opacity-70"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-8">
            <RevealOnScroll delay={100}>
              <Link href="/" className="flex items-center group mb-6">
                <div className="relative h-12 w-12 mr-3 flex items-center justify-center bg-primary-500/10 rounded-full group-hover:bg-primary-500/20 transition-colors border border-primary-500/20">
                  <Sparkles className="h-7 w-7 text-primary-500" />
                </div>
                <span className="font-playfair text-3xl font-bold text-neutral-100">
                  ArteAndino<span className="text-secondary-500">.pe</span>
                </span>
              </Link>
              <p className="text-neutral-400 text-base leading-relaxed max-w-sm mb-6">
                Una plataforma dedicada a preservar y difundir el patrimonio cultural de Ayacucho, conectando la maestría de nuestros artesanos con el mundo moderno.
              </p>

              <div className="flex items-center gap-4 text-xs font-semibold text-neutral-500 uppercase tracking-widest mb-4">
                Síguenos
              </div>
              <div className="flex space-x-3">
                {[Facebook, Instagram, Twitter].map((Icon, i) => (
                  <a key={i} href="#" className="flex h-11 w-11 items-center justify-center rounded-full bg-neutral-800 text-neutral-400 hover:bg-white hover:text-neutral-900 transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-white/20">
                    <Icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </RevealOnScroll>
          </div>

          {/* Links Column 1 */}
          <div className="lg:col-span-2">
            <RevealOnScroll delay={200}>
              <h3 className="text-white font-bold text-lg mb-6 font-playfair">Explorar</h3>
              <ul className="space-y-4">
                {['Inicio', 'Productos', 'Artesanos', 'Blog', 'Nosotros'].map((item) => (
                  <li key={item}>
                    <Link href={`/${item.toLowerCase()}`} className="text-neutral-400 hover:text-white transition-colors text-sm flex items-center group">
                      <ArrowRight className="h-3 w-3 mr-2 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300 text-primary-500" />
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </RevealOnScroll>
          </div>

          {/* Links Column 2 */}
          <div className="lg:col-span-2">
            <RevealOnScroll delay={300}>
              <h3 className="text-white font-bold text-lg mb-6 font-playfair">Artesanía</h3>
              <ul className="space-y-4">
                {['Textiles', 'Cerámica', 'Retablos', 'Piedra de Huamanga', 'Joyería'].map((item) => (
                  <li key={item}>
                    <Link href="/productos" className="text-neutral-400 hover:text-secondary-400 transition-colors text-sm">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </RevealOnScroll>
          </div>

          {/* Newsletter & Trust Column */}
          <div className="lg:col-span-4">
            <RevealOnScroll delay={400}>
              <h3 className="text-white font-bold text-lg mb-6 font-playfair">Suscríbete</h3>
              <div className="bg-neutral-800/50 rounded-2xl p-6 border border-neutral-700/50 backdrop-blur-sm">
                <p className="text-neutral-300 text-sm mb-4 leading-relaxed">
                  Únete a nuestra lista exclusiva. Recibe historias de artesanos y ofertas antes que nadie.
                </p>
                <div className="space-y-3">
                  <div className="relative">
                    <input
                      type="email"
                      placeholder="Tu correo electrónico"
                      className="w-full bg-neutral-900 border border-neutral-700 text-neutral-100 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all placeholder:text-neutral-600"
                    />
                  </div>
                  <Button className="w-full bg-white text-neutral-900 hover:bg-neutral-200 font-bold rounded-xl transition-all duration-300 transform hover:scale-[1.02]">
                    Suscribirse <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>

                <div className="mt-6 pt-6 border-t border-neutral-700/50 flex flex-col gap-3">
                  <div className="flex items-center gap-2 text-xs text-neutral-400">
                    <ShieldCheck className="h-4 w-4 text-green-500" />
                    <span>Compra 100% Segura y Encriptada</span>
                  </div>
                  <PaymentIcons />
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>

        <div className="border-t border-neutral-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-neutral-500 text-sm text-center md:text-left">
            &copy; {new Date().getFullYear()} ArteAndino.pe. Hecho con ❤️ en Ayacucho.
          </p>
          <div className="flex flex-wrap justify-center gap-8">
            <Link href="/terminos" className="text-neutral-500 hover:text-white text-sm transition-colors">
              Términos
            </Link>
            <Link href="/privacidad" className="text-neutral-500 hover:text-white text-sm transition-colors">
              Privacidad
            </Link>
            <Link href="/cookies" className="text-neutral-500 hover:text-white text-sm transition-colors">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}