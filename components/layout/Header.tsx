'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronDown, Menu, ShoppingCart, Search, User, X, Globe, Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';
import Image from 'next/image';

const navigation = [
  { name: 'Inicio', href: '/' },
  { 
    name: 'Productos', 
    href: '/productos',
    submenu: [
      { name: 'Textiles', href: '/productos/textiles' },
      { name: 'Cerámica', href: '/productos/ceramica' },
      { name: 'Retablos', href: '/productos/retablos' },
      { name: 'Tallados en Piedra', href: '/productos/tallados' },
      { name: 'Joyería', href: '/productos/joyeria' },
      { name: 'Todos los Productos', href: '/productos' },
    ] 
  },
  { name: 'Artesanos', href: '/artesanos' },
  { name: 'Precios', href: '/precios' },
  { name: 'Personalizar', href: '/personalizar' },
  { name: 'Sobre Nosotros', href: '/nosotros' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
  const pathname = usePathname();

  // Effect for scroll detection
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Effect to close mobile menu on route change
  useEffect(() => {
    if (mobileMenuOpen) setMobileMenuOpen(false);
  }, [pathname]);

  const toggleSubmenu = (name: string) => {
    setOpenSubmenu(openSubmenu === name ? null : name);
  };

  return (
    <>
      {/* ESTILO: Header con efecto "glassmorphism" mejorado */}
      <header 
        className={cn(
          "fixed w-full top-0 left-0 z-50 transition-all duration-300 ease-in-out",
          isScrolled 
            ? "bg-white/80 backdrop-blur-lg shadow-md py-2" 
            : "bg-white/90 backdrop-blur-sm py-4"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link href="/" className="flex items-center group flex-shrink-0">
              <Sparkles className="h-9 w-9 text-emerald-600 group-hover:text-emerald-500 transition-colors duration-300" />
              <span className="font-playfair text-xl font-bold text-slate-800 ml-2">
                ArteAndino<span className="text-emerald-600">.</span>
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-2">
              {navigation.map((item) => (
                <div key={item.name} className="relative group">
                  {item.submenu ? (
                    <span className={cn("flex items-center text-sm font-medium px-3 py-2 rounded-md cursor-default", pathname.startsWith(item.href) ? "text-emerald-700 bg-emerald-50" : "text-slate-700")}>
                      {item.name}
                      <ChevronDown className="ml-1 h-4 w-4 transition-transform duration-200 group-hover:rotate-180" />
                    </span>
                  ) : (
                    <Link href={item.href} className={cn("text-sm font-medium px-3 py-2 rounded-md transition-colors duration-200", pathname === item.href ? "bg-slate-100 text-slate-900" : "text-slate-700 hover:bg-slate-100")}>
                      {item.name}
                    </Link>
                  )}
                  {/* ESTILO: Dropdown de escritorio mejorado */}
                  {item.submenu && (
                    <div className="absolute left-0 mt-2 w-56 rounded-xl bg-white shadow-2xl ring-1 ring-black/5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 -translate-y-2 p-2">
                      {item.submenu.map((subitem) => (
                        <Link key={subitem.name} href={subitem.href} className="block px-4 py-2 text-sm text-slate-700 hover:bg-emerald-50 hover:text-emerald-600 rounded-lg transition-all duration-200">
                          {subitem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Action buttons */}
            <div className="flex items-center space-x-1">
              <button className="p-2 text-slate-600 hover:text-emerald-600 transition-colors rounded-full hover:bg-slate-100">
                <Search className="h-5 w-5" />
              </button>
              <Link href="/carrito" className="p-2 text-slate-600 hover:text-emerald-600 transition-colors rounded-full hover:bg-slate-100 relative">
                <ShoppingCart className="h-5 w-5" />
                <span className="absolute -top-0.5 -right-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-emerald-600 text-[10px] font-bold text-white">2</span>
              </Link>
              <Link href="/cuenta" className="hidden sm:inline-flex p-2 text-slate-600 hover:text-emerald-600 transition-colors rounded-full hover:bg-slate-100">
                <User className="h-5 w-5" />
              </Link>
              <button className="lg:hidden p-2 text-slate-800" onClick={() => setMobileMenuOpen(true)}>
                <Menu className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* RESPONSIVIDAD: Menú móvil de tipo "Drawer" */}
      {/* Backdrop */}
      <div onClick={() => setMobileMenuOpen(false)} className={cn("fixed inset-0 bg-black/60 z-50 transition-opacity duration-300", mobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none")} />
      
      {/* Drawer Panel */}
      <div className={cn("fixed inset-y-0 right-0 z-50 w-full max-w-sm bg-white shadow-xl transform transition-transform ease-in-out duration-300", mobileMenuOpen ? "translate-x-0" : "translate-x-full")}>
        <div className="flex items-center justify-between p-4 border-b border-slate-200">
          <Link href="/" className="flex items-center group">
            <Sparkles className="h-9 w-9 text-emerald-600" />
            <span className="font-playfair text-xl font-bold text-slate-800 ml-2">ArteAndino<span className="text-emerald-600">.</span></span>
          </Link>
          <button className="p-2 text-slate-600 hover:bg-slate-100 rounded-full" onClick={() => setMobileMenuOpen(false)}>
            <X className="h-6 w-6" />
          </button>
        </div>
        <nav className="p-4 flow-root">
          <ul className="space-y-1">
            {navigation.map((item) => (
              <li key={item.name}>
                {item.submenu ? (
                  <div>
                    <button onClick={() => toggleSubmenu(item.name)} className="flex items-center justify-between w-full py-3 px-3 text-base font-semibold text-slate-800 rounded-lg hover:bg-slate-100">
                      {item.name}
                      <ChevronDown className={cn("h-5 w-5 transition-transform", openSubmenu === item.name && "rotate-180")} />
                    </button>
                    {/* ESTILO: Acordeón con animación suave */}
                    <div className={cn("overflow-hidden transition-[max-height] duration-500 ease-in-out", openSubmenu === item.name ? "max-h-96" : "max-h-0")}>
                      <ul className="ml-4 mt-2 space-y-1 border-l-2 border-slate-200">
                        {item.submenu.map((subitem) => (
                          <li key={subitem.name}>
                            <Link href={subitem.href} className="block py-2 pl-4 text-sm text-slate-600 hover:text-emerald-600 hover:border-emerald-500 border-l-2 border-transparent -ml-px">
                              {subitem.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ) : (
                  <Link href={item.href} className="block py-3 px-3 text-base font-semibold text-slate-800 rounded-lg hover:bg-slate-100">
                    {item.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>
        {/* Footer del Drawer */}
        <div className="absolute bottom-0 left-0 w-full p-4 border-t border-slate-200 bg-slate-50">
          <div className="flex flex-col space-y-2">
              <Link href="/cuenta" className="flex items-center p-3 text-base font-semibold text-slate-700 rounded-lg hover:bg-slate-200">
                <User className="h-5 w-5 mr-3" /> Mi Cuenta
              </Link>
              <button className="flex items-center p-3 text-base font-semibold text-slate-700 rounded-lg hover:bg-slate-200 text-left">
                <Globe className="h-5 w-5 mr-3" /> Español
              </button>
            </div>
        </div>
      </div>
    </>
  );
}