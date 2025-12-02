import React, { Suspense, lazy } from 'react';
import { Section } from './components/Section';
import { Button } from './components/Button';
import { 
  CheckCircle2, 
  MapPin, 
  Phone,
  MessageCircle
} from 'lucide-react';

// Lazy load non-critical components to reduce initial JS bundle size
const MainContent = lazy(() => import('./components/MainContent'));

// Optimized Skeleton for MainContent
const StatsSkeleton = () => (
  <div className="bg-slate-900 py-16 px-4 md:py-24 border-b border-slate-800 w-full" aria-hidden="true">
    <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12">
       <div className="space-y-8">
          <div className="h-12 bg-slate-800 rounded w-3/4 animate-pulse"></div>
          <div className="space-y-6">
             {[1, 2, 3].map(i => (
                <div key={i} className="flex gap-4 p-4 bg-slate-800 rounded-xl border-l-4 border-slate-700">
                   <div className="w-10 h-10 rounded-full bg-slate-700"></div>
                   <div className="w-full space-y-2">
                      <div className="h-3 w-24 bg-slate-700 rounded"></div>
                      <div className="h-4 w-full bg-slate-700 rounded"></div>
                   </div>
                </div>
             ))}
          </div>
       </div>
    </div>
  </div>
);

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col font-sans text-slate-800 overflow-x-hidden bg-brand-900">
      
      {/* Header - Critical */}
      <div className="bg-brand-900 text-white py-3 px-4 fixed top-0 w-full z-50 shadow-md h-[60px] flex items-center justify-center">
        <div className="max-w-7xl w-full mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2 text-sm md:text-base font-semibold truncate">
            <MapPin size={18} className="text-brand-500 shrink-0" />
            <span className="truncate">Atendimento Domiciliar em SJC e Jacareí</span>
          </div>
          <a 
            href="https://wa.me/5512992186161?text=Vim%20da%20página%20e%20quero%20saber%20mais%20sobre%20o%20seu%20atendimento%20para%20AVC."
            target="_blank"
            rel="noreferrer"
            className="hidden md:flex items-center gap-2 bg-brand-600 hover:bg-brand-500 px-4 py-1.5 rounded-full text-sm font-bold transition-colors shrink-0"
          >
            <Phone size={16} /> Fale com a Izabel
          </a>
        </div>
      </div>

      {/* Hero Section - Optimized LCP */}
      <Section bg="brand" className="pt-20 pb-16 md:pt-32 md:pb-24 hero-critical">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          
          {/* Text Content */}
          <div className="space-y-6 order-2 md:order-1">
            <span className="inline-block bg-brand-700 text-brand-100 px-4 py-2 rounded-full text-sm font-bold tracking-wide uppercase">
              Especialista em AVC
            </span>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight text-white">
              Recupere a Autonomia do Seu Familiar Sem Precisar Sair de Casa
            </h1>
            
            <div className="space-y-6 max-w-xl">
              <p className="text-lg md:text-xl text-brand-100 font-medium">
                Fisioterapia domiciliar especializada para quem precisa de resultados reais, com carinho, conforto e profissionalismo.
              </p>
              <ul className="space-y-3">
                {[
                  "Entenda como funciona a reabilitação neurológica em casa",
                  "Descubra por que o atendimento domiciliar traz resultados mais rápidos e seguros",
                  "Veja casos reais e comece o tratamento com mais confiança"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-brand-50 font-medium">
                    <CheckCircle2 className="w-6 h-6 text-brand-400 shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button icon="calendar" variant="secondary">Agendar atendimento</Button>
              <Button icon="whatsapp" variant="whatsapp">Tirar dúvidas</Button>
            </div>
          </div>

          {/* Hero Image - LCP OPTIMIZED */}
          <div className="relative mt-4 md:mt-0 order-1 md:order-2 w-full flex justify-center md:justify-end">
             {/* Aspect Ratio Container EXACTLY matching HTML Shell */}
            <div className="relative w-[280px] md:w-[400px] aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl border-4 border-brand-700/50 bg-brand-800">
              <img 
                src="/perfil-3.webp"
                srcset="/perfil-3.webp 400w, 
                        /perfil-3.webp 800w"
                sizes="(max-width: 768px) 280px, 400px"
                alt="Fisioterapeuta Izabel Macedo Especialista em AVC em São José dos Campos e Jacareí" 
                className="w-full h-full object-cover"
                width="400"
                height="533"
                loading="eager"
                decoding="sync"
                // @ts-ignore
                fetchPriority="high"
              />
            </div>
          </div>
        </div>
      </Section>

      {/* Lazy Loaded Content */}
      <Suspense fallback={<StatsSkeleton />}>
        <MainContent />
      </Suspense>

      {/* Floating CTA Mobile */}
      <div className="fixed bottom-6 right-6 z-40 md:hidden">
        <a 
          href="https://wa.me/5512992186161?text=Vim%20da%20página%20e%20quero%20saber%20mais%20sobre%20o%20seu%20atendimento%20para%20AVC."
          target="_blank"
          rel="noreferrer"
          className="bg-[#25D366] text-white p-4 rounded-full shadow-2xl flex items-center justify-center hover:bg-[#128C7E] transition-colors"
          aria-label="Falar no WhatsApp"
        >
          <MessageCircle size={28} />
        </a>
      </div>
    </div>
  );
};

export default App;