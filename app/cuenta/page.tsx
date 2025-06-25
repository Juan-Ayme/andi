'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Eye, EyeOff, Mail, Lock, User, UserPlus, Shield, Loader2, Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';

// --- Sub-componente: Campo de Contraseña con Toggle (Estilo para Tema Claro) ---
interface PasswordInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label: string;
}

const PasswordInput = ({ id, label, ...props }: PasswordInputProps) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="space-y-2">
      <Label htmlFor={id} className="text-slate-700 flex items-center gap-2 font-semibold">
        <Lock className="h-4 w-4 text-slate-400" />
        {label}
      </Label>
      <div className="relative">
        <Input
          id={id}
          type={showPassword ? "text" : "password"}
          className="bg-slate-100 border-slate-300 text-slate-900 placeholder:text-slate-400 focus:ring-emerald-500 focus:border-emerald-500 pr-10 h-12"
          required
          {...props}
        />
        <button
          type="button"
          aria-label={showPassword ? "Ocultar contraseña" : "Mostrar contraseña"}
          className="absolute inset-y-0 right-0 pr-4 flex items-center text-slate-500 hover:text-slate-800 transition-colors"
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
        </button>
      </div>
    </div>
  );
};

// --- Sub-componente: Botones de Redes Sociales (Estilo para Tema Claro) ---
const SocialButtons = () => (
  <>
    <div className="relative my-6">
      <div className="absolute inset-0 flex items-center">
        <div className="w-full border-t border-slate-300"></div>
      </div>
      <div className="relative flex justify-center text-sm">
        <span className="px-3 bg-white text-slate-500">O continúa con</span>
      </div>
    </div>
    <div className="grid grid-cols-2 gap-3">
      <Button variant="outline" className="h-12 bg-white border-slate-300 text-slate-700 hover:bg-slate-100 hover:border-slate-400">
        <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24"><path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/><path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>
        Google
      </Button>
      <Button variant="outline" className="h-12 bg-white border-slate-300 text-slate-700 hover:bg-slate-100 hover:border-slate-400">
        <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
        Facebook
      </Button>
    </div>
  </>
);

// --- Componente Principal ---
export default function AccountPage() {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent, type: 'login' | 'register') => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen pt-28 pb-12 bg-slate-50">
      <main className="relative max-w-lg mx-auto px-4">
        <header className="text-center mb-8">
          <div className="inline-block p-4 bg-white rounded-2xl border border-slate-200 shadow-sm mb-4">
             <Sparkles className="h-8 w-8 text-emerald-500" />
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight text-slate-900">
            Bienvenido de Vuelta
          </h1>
          <p className="text-slate-600 mt-2">Accede a tu cuenta o crea una para empezar a personalizar.</p>
        </header>

        <div className="bg-white border border-slate-200 rounded-2xl p-2 shadow-xl">
          <Tabs defaultValue="login" className="w-full">
            <TabsList className="grid w-full grid-cols-2 bg-slate-100 p-1.5 rounded-lg">
              <TabsTrigger value="login" className="data-[state=active]:bg-white data-[state=active]:text-emerald-600 data-[state=active]:shadow-md text-slate-600 rounded-md h-11 font-semibold">
                <User className="h-4 w-4 mr-2" /> Iniciar Sesión
              </TabsTrigger>
              <TabsTrigger value="register" className="data-[state=active]:bg-white data-[state=active]:text-emerald-600 data-[state=active]:shadow-md text-slate-600 rounded-md h-11 font-semibold">
                <UserPlus className="h-4 w-4 mr-2" /> Registrarse
              </TabsTrigger>
            </TabsList>
            
            <div className="p-6">
              <TabsContent value="login">
                <form onSubmit={(e) => handleSubmit(e, 'login')} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="email-login" className="text-slate-700 flex items-center gap-2 font-semibold"><Mail className="h-4 w-4 text-slate-400"/>Correo Electrónico</Label>
                    <Input id="email-login" type="email" placeholder="tu@email.com" className="bg-slate-100 border-slate-300 text-slate-900 placeholder:text-slate-400 focus:ring-emerald-500 focus:border-emerald-500 h-12" required/>
                  </div>
                  <PasswordInput id="password-login" label="Contraseña" placeholder="Tu contraseña" />
                  <div className="flex items-center justify-between text-sm">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" className="h-4 w-4 rounded bg-slate-200 border-slate-300 text-emerald-600 focus:ring-emerald-500" />
                      <span className="text-slate-600">Recordarme</span>
                    </label>
                    <a href="#" className="font-semibold text-emerald-600 hover:text-emerald-700 transition-colors">¿Olvidaste tu contraseña?</a>
                  </div>
                  <Button type="submit" className="w-full h-12 text-base font-bold text-white bg-emerald-600 hover:bg-emerald-700 transition-all duration-300" disabled={isLoading}>
                    {isLoading ? <Loader2 className="h-5 w-5 animate-spin"/> : 'Iniciar Sesión'}
                  </Button>
                  <SocialButtons />
                </form>
              </TabsContent>
              
              <TabsContent value="register">
                <form onSubmit={(e) => handleSubmit(e, 'register')} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="name-register" className="text-slate-700 flex items-center gap-2 font-semibold"><User className="h-4 w-4 text-slate-400"/>Nombre Completo</Label>
                      <Input id="name-register" type="text" placeholder="Tu nombre y apellido" className="bg-slate-100 border-slate-300 text-slate-900 placeholder:text-slate-400 focus:ring-emerald-500 focus:border-emerald-500 h-12" required/>
                    </div>
                  <div className="space-y-2">
                    <Label htmlFor="email-register" className="text-slate-700 flex items-center gap-2 font-semibold"><Mail className="h-4 w-4 text-slate-400"/>Correo Electrónico</Label>
                    <Input id="email-register" type="email" placeholder="tu@email.com" className="bg-slate-100 border-slate-300 text-slate-900 placeholder:text-slate-400 focus:ring-emerald-500 focus:border-emerald-500 h-12" required/>
                  </div>
                   <PasswordInput id="password-register" label="Crear Contraseña" placeholder="Mínimo 8 caracteres" />
                   <PasswordInput id="confirm-password-register" label="Confirmar Contraseña" placeholder="Repite tu contraseña" />
                  <div className="pt-2">
                    <Button type="submit" className="w-full h-12 text-base font-bold text-white bg-emerald-600 hover:bg-emerald-700 transition-all duration-300" disabled={isLoading}>
                      {isLoading ? <Loader2 className="h-5 w-5 animate-spin"/> : 'Crear mi Cuenta'}
                    </Button>
                  </div>
                </form>
              </TabsContent>
            </div>
          </Tabs>
        </div>
      </main>
    </div>
  );
}
