'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronDown, Menu, ShoppingCart, Search, User, X, Globe, Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

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

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) setMobileMenuOpen(false);
  }, [pathname]);

  const toggleSubmenu = (name: string) => {
    setOpenSubmenu(openSubmenu === name ? null : name);
  };

  const isHome = pathname === '/';
  const showSolidHeader = isScrolled || !isHome;

  return (
    <>
      <header
        className={cn(
          "fixed w-full top-0 left-0 z-50 transition-all duration-500 ease-in-out border-b",
          showSolidHeader
            ? "bg-background/90 backdrop-blur-md shadow-lg py-3 border-border/40"
            : "bg-transparent py-5 border-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link href="/" className="flex items-center group relative z-10">
              <div className="relative">
                <div className="absolute inset-0 bg-primary-500 blur-lg opacity-20 group-hover:opacity-40 transition-opacity rounded-full"></div>
                <Sparkles className="h-8 w-8 text-primary-500 relative z-10 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <span className={cn(
                "font-playfair text-2xl font-bold ml-2 transition-colors",
                showSolidHeader ? "text-foreground" : "text-white"
              )}>
                ArteAndino<span className="text-secondary-500">.</span>
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              {navigation.map((item) => (
                <div key={item.name} className="relative group">
                  {item.submenu ? (
                    <button
                      className={cn(
                        "flex items-center text-sm font-medium px-4 py-2 rounded-full transition-all duration-300",
                        pathname.startsWith(item.href)
                          ? "bg-primary-500/10 text-primary-500"
                          : showSolidHeader ? "text-foreground/80 hover:bg-neutral-100 dark:hover:bg-neutral-800" : "text-white/90 hover:bg-white/10"
                      )}
                    >
                      {item.name}
                      <ChevronDown className="ml-1 h-3 w-3 transition-transform duration-300 group-hover:rotate-180" />
                    </button>
                  ) : (
                    <Link
                      href={item.href}
                      className={cn(
                        "text-sm font-medium px-4 py-2 rounded-full transition-all duration-300",
                        pathname === item.href
                          ? "bg-primary-500/10 text-primary-500 shadow-sm"
                          : showSolidHeader ? "text-foreground/80 hover:bg-neutral-100 dark:hover:bg-neutral-800" : "text-white/90 hover:bg-white/10"
                      )}
                    >
                      {item.name}
                    </Link>
                  )}

                  {/* Dropdown Menu */}
                  {item.submenu && (
                    <div className="absolute top-full left-0 mt-2 w-64 p-2 opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 ease-out">
                      <div className="bg-card/90 backdrop-blur-xl border border-border/50 rounded-2xl shadow-xl overflow-hidden ring-1 ring-black/5">
                        <div className="p-2 space-y-1">
                          {item.submenu.map((subitem) => (
                            <Link
                              key={subitem.name}
                              href={subitem.href}
                              className="block px-4 py-2.5 text-sm text-foreground/80 hover:text-primary-500 hover:bg-primary-500/5 rounded-xl transition-all duration-200"
                            >
                              {subitem.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Action buttons */}
            <div className="flex items-center space-x-2">
              <Button
                variant="ghost"
                size="icon"
                className={cn(
                  "rounded-full transition-colors",
                  showSolidHeader ? "text-foreground/70 hover:text-primary-500 hover:bg-neutral-100 dark:hover:bg-neutral-800" : "text-white/80 hover:bg-white/10 hover:text-white"
                )}
              >
                <Search className="h-5 w-5" />
              </Button>

              <Link href="/carrito">
                <Button
                  variant="ghost"
                  size="icon"
                  className={cn(
                    "rounded-full relative transition-colors",
                    showSolidHeader ? "text-foreground/70 hover:text-primary-500 hover:bg-neutral-100 dark:hover:bg-neutral-800" : "text-white/80 hover:bg-white/10 hover:text-white"
                  )}
                >
                  <ShoppingCart className="h-5 w-5" />
                  <span className="absolute top-1 right-1 flex h-4 w-4 items-center justify-center rounded-full bg-secondary-500 text-[10px] font-bold text-white shadow-sm ring-2 ring-background">2</span>
                </Button>
              </Link>

              <Link href="/cuenta" className="hidden sm:inline-block">
                <Button
                  variant="ghost"
                  size="icon"
                  className={cn(
                    "rounded-full transition-colors",
                    showSolidHeader ? "text-foreground/70 hover:text-primary-500 hover:bg-neutral-100 dark:hover:bg-neutral-800" : "text-white/80 hover:bg-white/10 hover:text-white"
                  )}
                >
                  <User className="h-5 w-5" />
                </Button>
              </Link>

              <Button
                variant="ghost"
                size="icon"
                className={cn(
                  "lg:hidden rounded-full",
                  showSolidHeader ? "text-foreground" : "text-white"
                )}
                onClick={() => setMobileMenuOpen(true)}
              >
                <Menu className="h-6 w-6" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      <div
        className={cn(
          "fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm transition-opacity duration-300",
          mobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        onClick={() => setMobileMenuOpen(false)}
      />

      <div
        className={cn(
          "fixed inset-y-0 right-0 z-[60] w-full max-w-xs bg-background shadow-2xl transform transition-transform cubic-bezier(0.16, 1, 0.3, 1) duration-500 border-l border-border/50",
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-5 border-b border-border/40">
            <span className="font-playfair text-xl font-bold flex items-center">
              <Sparkles className="h-5 w-5 text-primary-500 mr-2" />
              Menu
            </span>
            <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(false)} className="rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800">
              <X className="h-5 w-5" />
            </Button>
          </div>

          <nav className="flex-1 overflow-y-auto p-5">
            <ul className="space-y-2">
              {navigation.map((item) => (
                <li key={item.name}>
                  {item.submenu ? (
                    <div className="space-y-2">
                      <button
                        onClick={() => toggleSubmenu(item.name)}
                        className={cn(
                          "flex items-center justify-between w-full py-3 px-4 text-base font-medium rounded-xl transition-colors",
                          openSubmenu === item.name ? "bg-primary-500/5 text-primary-600" : "text-foreground hover:bg-neutral-100 dark:hover:bg-neutral-800"
                        )}
                      >
                        {item.name}
                        <ChevronDown className={cn("h-4 w-4 transition-transform duration-300", openSubmenu === item.name && "rotate-180")} />
                      </button>
                      <div className={cn("overflow-hidden transition-all duration-300 ease-in-out pl-4", openSubmenu === item.name ? "max-h-96 opacity-100" : "max-h-0 opacity-0")}>
                        <ul className="space-y-1 mt-1 border-l-2 border-primary-100 dark:border-primary-900/30 pl-3 ml-2">
                          {item.submenu.map((subitem) => (
                            <li key={subitem.name}>
                              <Link
                                href={subitem.href}
                                className="block py-2 px-3 text-sm text-foreground/70 hover:text-primary-500 hover:translate-x-1 transition-all duration-200"
                                onClick={() => setMobileMenuOpen(false)}
                              >
                                {subitem.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className={cn(
                        "block py-3 px-4 text-base font-medium rounded-xl transition-colors",
                        pathname === item.href ? "bg-primary-500/10 text-primary-600" : "text-foreground hover:bg-neutral-100 dark:hover:bg-neutral-800"
                      )}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          <div className="p-5 border-t border-border/40 bg-neutral-50/50 dark:bg-neutral-900/50">
            <div className="flex flex-col space-y-3">
              <Link href="/cuenta" className="w-full" onClick={() => setMobileMenuOpen(false)}>
                <Button variant="outline" className="w-full justify-start rounded-xl border-border/60">
                  <User className="h-4 w-4 mr-2" /> Mi Cuenta
                </Button>
              </Link>
              <Button variant="ghost" className="w-full justify-start rounded-xl text-foreground/70">
                <Globe className="h-4 w-4 mr-2" /> Español (PE)
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}