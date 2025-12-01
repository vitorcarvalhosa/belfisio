import React, { Suspense, lazy } from 'react';
import { Section } from './components/Section';
import { Button } from './components/Button';
import { 
  CheckCircle2, 
  MapPin, 
  Phone,
  MessageCircle
} from 'lucide-react';

// Lazy load non-critical components to boost Initial Load Time
const MainContent = lazy(() => import('./components/MainContent'));

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col font-sans text-slate-800 overflow-x-hidden bg-brand-900">
      
      {/* Header - Critical CSS Inline in Index.html handles background color */}
      <div className="bg-brand-900 text-white py-3 px-4 fixed top-0 w-full z-50 shadow-md">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2 text-sm md:text-base font-semibold truncate">
            <MapPin size={18} className="text-brand-500 shrink-0" />
            <span className="truncate">Atendimento Domiciliar em São José dos Campos</span>
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

      {/* Hero Section - Above the Fold - Must load instantly */}
      <Section bg="brand" className="pt-20 pb-20 md:pt-40 md:pb-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in-up order-2 md:order-1">
            <span className="inline-block bg-brand-700 text-brand-100 px-4 py-2 rounded-full text-sm font-bold tracking-wide uppercase">
              Especialista em AVC
            </span>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Recupere a Autonomia do Seu Familiar Sem Precisar Sair de Casa
            </h1>
            
            <div className="space-y-6 max-w-xl">
              <p className="text-lg md:text-xl text-brand-100 font-medium">
                Fisioterapia domiciliar especializada para quem precisa de resultados reais, com carinho, conforto e profissionalismo.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-brand-50 font-medium">
                  <CheckCircle2 className="w-6 h-6 text-brand-400 shrink-0 mt-0.5" />
                  <span className="leading-relaxed">Entenda como funciona a reabilitação neurológica em casa</span>
                </li>
                <li className="flex items-start gap-3 text-brand-50 font-medium">
                  <CheckCircle2 className="w-6 h-6 text-brand-400 shrink-0 mt-0.5" />
                  <span className="leading-relaxed">Descubra por que o atendimento domiciliar traz resultados mais rápidos e seguros</span>
                </li>
                <li className="flex items-start gap-3 text-brand-50 font-medium">
                  <CheckCircle2 className="w-6 h-6 text-brand-400 shrink-0 mt-0.5" />
                  <span className="leading-relaxed">Veja casos reais e comece o tratamento com mais confiança</span>
                </li>
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button icon="calendar" variant="secondary">
                Agendar atendimento
              </Button>
              <Button icon="whatsapp" variant="whatsapp">
                Tirar dúvidas
              </Button>
            </div>
          </div>
          <div className="relative mt-4 md:mt-0 order-1 md:order-2">
             {/* Profile Image Hero - LCP ELEMENT OPTIMIZED */}
            <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-brand-700/50 md:transform md:rotate-2 md:hover:rotate-0 transition-transform duration-500 max-w-[80%] mx-auto md:max-w-full">
              <img 
                src="https://autovmd-wordpress.7uu36r.easypanel.host/wp-content/uploads/2025/12/Perfil-6.webp" 
                alt="Fisioterapeuta Izabel Macedo Especialista em AVC em São José dos Campos" 
                className="w-full h-auto object-cover"
                width="600"
                height="800"
                loading="eager"
                decoding="sync"
                // @ts-ignore
                fetchPriority="high"
              />
            </div>
          </div>
        </div>
      </Section>

      {/* Lazy Load the rest of the app */}
      <Suspense fallback={<div className="h-screen bg-brand-900"></div>}>
        <MainContent />
      </Suspense>

      {/* Floating CTA for Mobile - Lazy loaded by browser, visually sticky */}
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