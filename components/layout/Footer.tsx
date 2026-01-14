import Link from 'next/link';
import { Facebook, Instagram, Twitter, Mail, MapPin, Phone, Sparkles, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Footer() {
  return (
    <footer className="bg-neutral-900 border-t border-neutral-800 pt-16 pb-8 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-6">
            <Link href="/" className="flex items-center group">
              <div className="relative h-10 w-10 mr-3 flex items-center justify-center bg-primary-500/10 rounded-full group-hover:bg-primary-500/20 transition-colors">
                <Sparkles className="h-6 w-6 text-primary-500" />
              </div>
              <span className="font-playfair text-2xl font-bold text-neutral-100">
                ArteAndino<span className="text-secondary-500">.pe</span>
              </span>
            </Link>
            <p className="text-neutral-400 text-sm leading-relaxed max-w-sm">
              Una plataforma dedicada a preservar y difundir el patrimonio cultural de Ayacucho, conectando la maestría de nuestros artesanos con el mundo moderno.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-800 text-neutral-400 hover:bg-primary-500 hover:text-white transition-all duration-300">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-800 text-neutral-400 hover:bg-secondary-500 hover:text-white transition-all duration-300">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-800 text-neutral-400 hover:bg-neutral-700 hover:text-white transition-all duration-300">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Links Column 1 */}
          <div className="lg:col-span-2">
            <h3 className="text-white font-semibold mb-6">Explorar</h3>
            <ul className="space-y-4">
              {['Inicio', 'Productos', 'Artesanos', 'Blog', 'Nosotros'].map((item) => (
                <li key={item}>
                  <Link href={`/${item.toLowerCase()}`} className="text-neutral-400 hover:text-primary-400 transition-colors text-sm flex items-center group">
                    <span className="w-0 group-hover:w-2 h-0.5 bg-primary-500 mr-0 group-hover:mr-2 transition-all duration-300"></span>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Links Column 2 */}
          <div className="lg:col-span-2">
            <h3 className="text-white font-semibold mb-6">Artesanía</h3>
            <ul className="space-y-4">
              {['Textiles', 'Cerámica', 'Retablos', 'Piedra de Huamanga', 'Joyería'].map((item) => (
                <li key={item}>
                  <Link href="/productos" className="text-neutral-400 hover:text-secondary-400 transition-colors text-sm">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Column */}
          <div className="lg:col-span-4">
            <h3 className="text-white font-semibold mb-6">Suscríbete</h3>
            <p className="text-neutral-400 text-sm mb-4">
              Recibe las últimas novedades, historias de artesanos y ofertas exclusivas directamente en tu correo.
            </p>
            <div className="space-y-3">
              <div className="relative">
                <input
                  type="email"
                  placeholder="Tu correo electrónico"
                  className="w-full bg-neutral-800 border border-neutral-700 text-neutral-100 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all placeholder:text-neutral-500"
                />
              </div>
              <Button className="w-full bg-primary-600 hover:bg-primary-500 text-white">
                Suscribirse <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-neutral-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-neutral-500 text-sm text-center md:text-left">
            &copy; {new Date().getFullYear()} ArteAndino.pe. Hecho con ❤️ en Ayacucho.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link href="/terminos" className="text-neutral-500 hover:text-primary-400 text-sm transition-colors">
              Términos
            </Link>
            <Link href="/privacidad" className="text-neutral-500 hover:text-primary-400 text-sm transition-colors">
              Privacidad
            </Link>
            <Link href="/cookies" className="text-neutral-500 hover:text-primary-400 text-sm transition-colors">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}