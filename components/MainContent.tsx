import React, { useState } from 'react';
import { Section } from './Section';
import { Button } from './Button';
import { VideoCard } from './VideoCard';
import { 
  CheckCircle2, 
  UserCheck, 
  Brain, 
  Activity, 
  HeartHandshake, 
  Star,
  Clock,
  ChevronDown,
  ChevronUp,
  Instagram,
  AlertTriangle,
  Timer,
  TrendingUp,
  PlayCircle,
  Footprints,
  Users,
  Palette,
  FileText
} from 'lucide-react';
import { FAQItem, ComparisonRow } from '../types';

const MainContent: React.FC = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const features = [
    { icon: <UserCheck className="w-8 h-8 text-brand-600" />, title: "Avaliação Humanizada", desc: "Olhar integral para as necessidades do paciente e da família." },
    { icon: <Activity className="w-8 h-8 text-brand-600" />, title: "Exercícios Estratégicos", desc: "Foco total na recuperação da mobilidade e força." },
    { icon: <Brain className="w-8 h-8 text-brand-600" />, title: "Motricidade Fina", desc: "Reaprender a segurar, escrever e comer sozinho." },
    { icon: <CheckCircle2 className="w-8 h-8 text-brand-600" />, title: "Plano de Evolução", desc: "Metas claras e acompanhamento prático do progresso." },
  ];

  const targetAudience = [
    "Familiares que acabaram de passar pelo susto de um AVC",
    "Responsáveis que querem trocar a clínica por um atendimento mais eficaz",
    "Quem já tentou outras abordagens e não viu resultados",
    "Quem quer mais conforto, dignidade e segurança no tratamento"
  ];

  const comparisonData: ComparisonRow[] = [
    { feature: "Especialidade", izabel: "Pós-graduada em fisioterapia neurofuncional (Foco em AVC)", clinic: "Clínica Geral / Rotativa" },
    { feature: "Atendimento", izabel: "Totalmente personalizado (atividades de vida, gostos e hobbies)", clinic: "Genérico e impessoal" },
    { feature: "Humanização", izabel: "Acolhimento familiar e cuidado de mãe", clinic: "Foco apenas na técnica" },
    { feature: "Atenção à Família", izabel: "Suporte e orientação prática constante", clinic: "Sem suporte familiar estruturado" },
    { feature: "Resultados", izabel: "Foco em autonomia real e segurança", clinic: "Foco apenas em repetição de movimento" },
    { feature: "Tempo de atendimento", izabel: "1h de dedicação exclusiva", clinic: "20 a 40 minutos" },
    { feature: "Local", izabel: "No conforto do seu lar (SJC e Jacareí)", clinic: "Deslocamento necessário" },
  ];

  const faqs: FAQItem[] = [
    { question: "Meu familiar vai voltar a trabalhar, andar, viver normalmente?", answer: "A recuperação é individual. Com o Programa Reconquista AVC, o paciente tende a reaprender funções importantes e ganhar independência. Alguns voltam a andar e retomar a vida social, dependendo da resposta do corpo e constância." },
    { question: "Quanto tempo leva para ver resultados?", answer: "Muitos pacientes apresentam mudanças nas primeiras semanas (equilíbrio, confiança). O Programa tem 16 semanas para garantir evoluções consistentes, mas cada ritmo é único." },
    { question: "O tratamento dói?", answer: "Não. A fisioterapia neurofuncional não deve causar dor. Pode haver esforço ou fadiga, o que é esperado, mas trabalhamos sempre dentro do limite seguro." },
    { question: "A família precisa participar?", answer: "Sim, é fundamental. No Reconquista AVC, a família aprende a incentivar sem superproteger, recebe orientações práticas e ajuda a acelerar a recuperação." },
    { question: "Como funciona a teleconsulta?", answer: "Usada para revisar exercícios, tirar dúvidas da família e orientar adaptações. É um recurso complementar para momentos específicos ou quando não há visita presencial." },
    { question: "Quais adaptações são necessárias em casa?", answer: "Na primeira semana, avalio o ambiente. Geralmente são ajustes simples: retirar tapetes, melhorar iluminação ou reorganizar móveis para garantir segurança e autonomia." },
    { question: "O que o paciente precisa fazer nos dias sem atendimento?", answer: "O paciente recebe um protocolo domiciliar personalizado (texto/vídeo) com exercícios seguros para praticar e consolidar os avanços da semana." },
    { question: "E se o paciente tiver medo de cair ou não quiser tentar?", answer: "Usamos técnicas de reaprendizagem motora e desafios realistas baseados no que ele gosta (música, jogos). A confiança aumenta progressivamente." },
    { question: "Já tentamos fisioterapia antes e não funcionou. Por que agora seria diferente?", answer: "O Reconquista AVC é um programa completo com método próprio (5P), personalização baseada em hobbies, adaptação da casa e envolvimento familiar, não apenas exercícios soltos." },
    { question: "Em quanto tempo meu familiar vai recuperar a autonomia?", answer: "Varia, mas com constância, muitos reaprendem a caminhar, vestir-se e ir ao banheiro em poucas semanas ou meses. O foco é avanço real e seguro." }
  ];

  const methodPillars = [
    { icon: <Footprints className="w-10 h-10 text-brand-100" />, title: "1. Prática Real", desc: "Simulação de situações do dia a dia: levantar, caminhar, alcançar objetos. O paciente reaprende a viver com independência na sua própria rotina." },
    { icon: <Brain className="w-10 h-10 text-brand-100" />, title: "2. Participação Ativa", desc: "Estimulamos o cérebro a planejar movimentos e tomar decisões. A recuperação se torna consciente, não apenas repetição mecânica." },
    { icon: <Palette className="w-10 h-10 text-brand-100" />, title: "3. Personalização Total", desc: "Se gosta de dançar, usamos música. Se gosta de jogos, usamos desafios. O protocolo é adaptado aos interesses e hobbies do paciente." },
    { icon: <Users className="w-10 h-10 text-brand-100" />, title: "4. Presença Familiar", desc: "Dedico tempo para orientar a família: como estimular sem superproteger e como dar segurança no dia a dia." },
    { icon: <FileText className="w-10 h-10 text-brand-100" />, title: "5. Protocolo Domiciliar", desc: "Exercícios simples e seguros para praticar nos dias sem atendimento, garantindo evolução contínua." }
  ];

  return (
    <>
      {/* Stats / Urgency */}
      <Section bg="dark" className="border-b border-slate-800 content-visibility-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 order-2 lg:order-1">
            <h2 className="text-2xl md:text-3xl font-bold text-white leading-tight">
              O tempo é o fator mais crítico na recuperação de um AVC
            </h2>
            <div className="space-y-6">
              {[
                { icon: <AlertTriangle className="text-red-500 w-6 h-6" />, color: "red", title: "Dado Alarmante", text: "O AVC mata um brasileiro a cada poucos minutos. A reabilitação imediata não é luxo, é necessidade vital." },
                { icon: <Timer className="text-blue-500 w-6 h-6" />, color: "blue", title: "Janela de Oportunidade", text: "Quanto antes iniciar a fisioterapia especializada, maiores as chances de retomar a autonomia." },
                { icon: <TrendingUp className="text-green-500 w-6 h-6" />, color: "green", title: "Esperança", text: "90% dos casos têm evolução positiva com intervenção rápida e correta." }
              ].map((item, i) => (
                <div key={i} className={`flex gap-4 p-4 bg-slate-800/50 rounded-xl border-l-4 border-${item.color}-500`}>
                  <div className={`bg-${item.color}-500/10 p-2 rounded-full h-fit shrink-0`}>{item.icon}</div>
                  <div>
                    <p className={`text-${item.color}-400 font-bold uppercase text-xs mb-1`}>{item.title}</p>
                    <p className="text-slate-200 font-medium leading-relaxed text-sm md:text-base">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="pt-2">
              <Button icon="calendar" variant="primary" fullWidth className="md:w-auto">Agendar atendimento agora</Button>
            </div>
          </div>
          
          <div className="relative order-1 lg:order-2 w-full max-w-full">
            <div className="bg-white rounded-xl overflow-hidden shadow-2xl border border-slate-700 w-full max-w-full">
              <div className="bg-slate-100 border-b border-slate-200 px-4 py-2 flex items-center gap-2">
                <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-red-400"></div>
                <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-yellow-400"></div>
                <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-green-400"></div>
                <div className="ml-2 md:ml-4 flex-1 bg-white h-5 md:h-6 rounded border border-slate-200 text-[9px] md:text-[10px] text-slate-400 flex items-center px-2 font-mono truncate">portal-noticias.saude.br/posts/avc-brasil-2025</div>
              </div>
              <div className="p-4 md:p-8 font-sans w-full box-border">
                <div className="text-[9px] md:text-xs text-blue-600 font-bold mb-2 md:mb-3 uppercase tracking-wide flex flex-wrap gap-1"><span>Home</span> <span>&gt;</span> <span>Notícias</span> <span>&gt;</span> <span>Saúde</span></div>
                <h3 className="text-lg md:text-3xl font-extrabold text-slate-900 leading-tight mb-3 md:mb-4 break-words">AVC mata um brasileiro a cada sete minutos em 2025</h3>
                <div className="flex flex-wrap items-center gap-2 md:gap-3 text-slate-400 text-[10px] md:text-xs mb-4 md:mb-6 font-medium border-b border-slate-100 pb-3 md:pb-4">
                  <span className="text-slate-500">14 de maio de 2025</span>
                  <div className="hidden md:block w-1 h-1 bg-slate-300 rounded-full"></div>
                  <span className="flex items-center gap-1 text-green-600 bg-green-50 px-2 py-0.5 rounded-full"><Clock size={10} className="md:w-3 md:h-3" /> 4 mins. de leitura</span>
                </div>
                <p className="text-slate-700 text-xs md:text-base leading-relaxed mb-4 md:mb-6 font-medium text-justify md:text-left"><strong className="text-slate-900">Nova Coalizão Mundial de Ação</strong> defende as bases para enfrentar o quadro, que poderá causar quase 10 milhões de mortes...</p>
                <div className="bg-slate-50 rounded-lg p-2 md:p-3 flex items-center gap-2 md:gap-3 border border-slate-100">
                   <PlayCircle className="text-slate-800 w-6 h-6 md:w-8 md:h-8 fill-slate-200 shrink-0" strokeWidth={1.5} />
                   <div className="flex-1 h-6 md:h-8 flex items-center gap-0.5 md:gap-1 opacity-40 overflow-hidden">
                      {[...Array(15)].map((_, i) => (<div key={i} className="w-1 bg-slate-800 rounded-full" style={{ height: `${Math.random() * 10 + 5}px`}}></div>))}
                   </div>
                   <span className="text-[10px] md:text-xs font-bold text-slate-500 bg-slate-200 px-1.5 py-0.5 rounded">1.0x</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* How it Works */}
      <Section id="como-funciona" bg="white" className="content-visibility-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-2xl md:text-4xl font-bold text-brand-900 mb-4">Como Funciona o Atendimento</h2>
          <p className="text-base md:text-lg text-slate-600 px-2">A Izabel leva a clínica até você. Cada consulta tem <span className="font-bold text-brand-700">1h de duração</span> e inclui todos os equipamentos necessários.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((item, idx) => (
            <div key={idx} className="bg-brand-50 p-8 rounded-2xl hover:shadow-lg transition-shadow border border-brand-100 flex flex-col items-center text-center">
              <div className="bg-white p-4 rounded-full shadow-sm mb-6">{item.icon}</div>
              <h3 className="text-xl font-bold text-brand-900 mb-3">{item.title}</h3>
              <p className="text-slate-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* 5P Method Section - NEW */}
      <Section bg="brand" className="content-visibility-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block bg-brand-800 text-brand-100 px-4 py-2 rounded-full text-sm font-bold tracking-wide uppercase mb-4">
              Metodologia Exclusiva
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-6">Método Reconexão Funcional 5P</h2>
          <p className="text-brand-100 text-lg">
            Um sistema estruturado para devolver a autonomia, baseado em cinco pilares aplicados em todas as sessões.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {methodPillars.map((item, idx) => (
            <div key={idx} className={`bg-brand-800 border border-brand-700 p-8 rounded-2xl hover:bg-brand-700 transition-colors ${idx >= 3 ? 'lg:col-span-1 lg:last:col-start-auto' : ''}`}>
              <div className="bg-brand-900/50 w-16 h-16 rounded-xl flex items-center justify-center mb-6 shadow-inner border border-brand-700/50">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
              <p className="text-brand-100 leading-relaxed text-sm md:text-base">{item.desc}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button icon="whatsapp" variant="secondary">Quero conhecer o método na prática</Button>
        </div>
      </Section>

      {/* Target Audience */}
      <Section bg="light" className="content-visibility-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <img 
              src="/atendimento-paciente.webp" 
              alt="Atendimento de Fisioterapia Domiciliar para Pacientes com AVC" 
              className="rounded-2xl shadow-xl w-full"
              loading="lazy"
              width="600"
              height="400"
              decoding="async"
            />
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-900 mb-8">Este tratamento é ideal para:</h2>
            <ul className="space-y-6">
              {targetAudience.map((text, idx) => (
                <li key={idx} className="flex items-start gap-4">
                  <div className="mt-1 bg-brand-600 text-white rounded-full p-1 flex-shrink-0"><CheckCircle2 size={16} /></div>
                  <span className="text-base md:text-lg font-medium text-slate-700">{text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* Comparison Table */}
      <Section bg="white" className="content-visibility-auto">
        <div className="text-center mb-12">
           <h2 className="text-2xl md:text-3xl font-bold text-brand-900 mb-4">Por que escolher a Izabel?</h2>
           <p className="text-slate-600">Entenda a diferença de um tratamento especializado e focado na sua família.</p>
        </div>
        
        <div className="hidden md:block overflow-x-auto rounded-xl shadow-xl border border-slate-200">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200">
                <th className="p-6 text-sm font-bold text-slate-500 uppercase tracking-wider">Critério</th>
                <th className="p-6 text-brand-800 font-bold text-xl bg-brand-50 w-2/5 border-l border-r border-brand-100">
                  <div className="flex items-center gap-2"><Star className="text-yellow-500 fill-current" size={20} /> Com Izabel Macedo</div>
                </th>
                <th className="p-6 text-slate-400 font-bold text-lg w-2/5">Clínica / Convênio</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {comparisonData.map((row, idx) => (
                <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-slate-50/50'}>
                  <td className="p-6 font-semibold text-slate-700">{row.feature}</td>
                  <td className="p-6 text-brand-900 font-bold bg-brand-50/30 border-l border-r border-brand-100">{row.izabel}</td>
                  <td className="p-6 text-slate-500">{row.clinic}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="md:hidden space-y-4">
          {comparisonData.map((row, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow-md overflow-hidden border border-slate-200">
              <div className="bg-slate-100 p-3 text-center font-bold text-slate-700 text-sm border-b border-slate-200">{row.feature}</div>
              <div className="flex text-sm">
                <div className="w-1/2 p-3 bg-brand-50 border-r border-slate-200 flex flex-col justify-center text-center">
                  <span className="text-[10px] font-bold text-brand-600 mb-1 uppercase tracking-wider">Com Izabel</span>
                  <span className="font-bold text-brand-900 leading-snug">{row.izabel}</span>
                </div>
                <div className="w-1/2 p-3 flex flex-col justify-center text-center bg-white">
                  <span className="text-[10px] font-bold text-slate-400 mb-1 uppercase tracking-wider">Clínica</span>
                  <span className="text-slate-500 leading-snug">{row.clinic}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center"><Button variant="primary" icon="calendar" className="w-full md:w-auto">Agende agora a consulta</Button></div>
      </Section>

      {/* Social Proof */}
      <Section bg="brand" className="content-visibility-auto">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">Provas de Que Funciona</h2>
          <p className="text-brand-100 text-base md:text-lg">Veja o que as famílias estão dizendo sobre a recuperação.</p>
        </div>
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <VideoCard videoId="J5gYAHgFtoI" title="Terapia com Dança e Afeto" description="A reabilitação vai muito além dos exercícios tradicionais! Incluímos a dança (forró) com o filho para trazer memórias afetivas e alegria ao tratamento." />
          <VideoCard videoId="_BYMV8tNgcc" title="Superação pós-AVC" description="De desafios a conquistas: veja como a fisioterapia ajudou nossa paciente a reescrever sua história e reencontrar a independência." />
        </div>
        <div className="pt-16 text-center">
            <Button variant="secondary" icon="whatsapp" className="w-full md:w-auto shadow-lg">Recuperar autonomia do meu Familiar</Button>
        </div>
      </Section>

      {/* About */}
      <Section bg="light" className="content-visibility-auto">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="w-full md:w-1/2 lg:w-1/3">
            <div className="relative max-w-sm mx-auto">
              <img 
                src="/perfil-10.webp" 
                alt="Fisioterapeuta Izabel Macedo Pós Graduada em Neurologia" 
                className="w-full h-auto rounded-2xl shadow-2xl border-4 border-white object-cover object-top"
                loading="lazy"
                width="400"
                height="400"
                decoding="async"
              />
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-2/3 space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-900">Sobre a Izabel</h2>
            <p className="text-base md:text-lg leading-relaxed text-slate-700">
                Izabel Macedo é fisioterapeuta e <strong>Pós-graduada em Fisioterapia Neurológica</strong>. Professora de pilates e massoterapeuta, ela une técnica e cuidado humano.
            </p>
            <p className="text-base md:text-lg leading-relaxed text-slate-700">
                Mãe do Matteo e da Laura, casada com Vitor, ela entende na prática a importância do acolhimento familiar no processo de reabilitação. 
            </p>
            <p className="text-base md:text-lg leading-relaxed text-slate-700">Apaixonada por devolver autonomia, ela acredita que cada progresso — por menor que seja — é uma grande vitória a ser celebrada.</p>
            <div className="bg-white p-6 rounded-xl border-l-4 border-brand-500 shadow-sm italic text-slate-600">"Eu não entrego 'só mais uma consulta'. Eu entrego esperança, movimento e dignidade, com tratamento humano, técnico e personalizado."</div>
          </div>
        </div>
      </Section>

      {/* Pricing */}
      <Section id="investimento" bg="white" className="content-visibility-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-900">Investimento na Recuperação</h2>
          <p className="text-slate-600 mt-2">Valores transparentes para um serviço premium.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 max-w-7xl mx-auto items-start">
          
          {/* Single Session */}
          <div className="bg-white p-6 rounded-2xl shadow-lg border border-slate-200 hover:border-brand-300 transition-colors flex flex-col h-full">
            <h3 className="text-lg font-bold text-slate-700 mb-2">Consulta Avulsa</h3>
            <div className="text-3xl font-extrabold text-brand-900 mb-6">R$ 200 <span className="text-sm font-normal text-slate-500">/consulta</span></div>
            <ul className="space-y-3 mb-6 flex-grow text-sm">
              <li className="flex gap-2 items-center text-slate-600"><CheckCircle2 size={16} className="text-brand-500"/> Avaliação completa</li>
              <li className="flex gap-2 items-center text-slate-600"><CheckCircle2 size={16} className="text-brand-500"/> Atendimento no domicílio</li>
              <li className="flex gap-2 items-center text-slate-600"><CheckCircle2 size={16} className="text-brand-500"/> <span className="font-bold text-brand-700">1h de duração</span></li>
            </ul>
            <Button variant="outlineBrand" fullWidth className="w-full mt-auto">Agendar Avulso</Button>
          </div>

          {/* 8 Pack */}
          <div className="bg-brand-800 p-6 rounded-2xl shadow-xl text-white flex flex-col h-full border border-brand-700">
            <div className="bg-brand-700 text-brand-100 text-xs font-bold px-3 py-1 rounded-full w-fit mb-3">PACOTE INICIAL</div>
            <h3 className="text-lg font-bold text-white mb-1">Pacote 8 Atendimentos</h3>
            <div className="text-3xl font-extrabold text-white mb-1">R$ 1.280</div>
             <p className="text-brand-200 text-xs mb-4 font-medium">Economia de R$ 320 (20% OFF)</p>
            <div className="mb-6 flex-grow">
              <p className="font-bold text-white mb-3 uppercase text-xs tracking-wider">Incluso no pacote:</p>
              <ul className="space-y-2 text-sm">
                <li className="flex gap-2 items-start text-brand-50"><Star size={16} className="text-yellow-400 shrink-0 mt-0.5"/> Relatório de evolução</li>
                <li className="flex gap-2 items-start text-brand-50"><Star size={16} className="text-yellow-400 shrink-0 mt-0.5"/> Exercícios domiciliares</li>
                <li className="flex gap-2 items-start text-brand-50"><Star size={16} className="text-yellow-400 shrink-0 mt-0.5"/> Suporte WhatsApp</li>
              </ul>
            </div>
            <Button variant="whatsapp" fullWidth icon="whatsapp" className="shadow-lg mt-auto text-sm">Garantir Pacote 8</Button>
          </div>

          {/* 16 Pack */}
          <div className="bg-brand-900 p-6 rounded-2xl shadow-2xl text-white transform md:-translate-y-4 flex flex-col h-full relative overflow-hidden border border-brand-700">
            <div className="absolute top-0 right-0 bg-yellow-400 text-black text-xs font-bold px-3 py-1 rounded-bl-lg">MAIS COMPLETO</div>
            <h3 className="text-lg font-bold text-white mb-1">Programa 16 Atendimentos</h3>
            <div className="text-3xl font-extrabold text-white mb-1">R$ 2.560</div>
            <p className="text-brand-300 text-xs mb-4 font-semibold">Economia de R$ 640 (20% OFF)</p>
            <div className="mb-6 flex-grow">
              <p className="font-bold text-white mb-3 uppercase text-xs tracking-wider">Bônus Exclusivos:</p>
              <ul className="space-y-2 text-sm">
                <li className="flex gap-2 items-start text-brand-50"><Star size={16} className="text-yellow-400 shrink-0 mt-0.5"/> Programa Reconquista Completo</li>
                <li className="flex gap-2 items-start text-brand-50"><Star size={16} className="text-yellow-400 shrink-0 mt-0.5"/> Acompanhamento intensivo</li>
                <li className="flex gap-2 items-start text-brand-50"><Star size={16} className="text-yellow-400 shrink-0 mt-0.5"/> Prioridade na agenda</li>
                <li className="flex gap-2 items-start text-brand-50"><Star size={16} className="text-yellow-400 shrink-0 mt-0.5"/> Todos os bônus anteriores</li>
              </ul>
            </div>
            <Button variant="whatsapp" fullWidth icon="whatsapp" className="shadow-lg mt-auto text-sm bg-green-600 hover:bg-green-500">Garantir Programa Completo</Button>
          </div>

        </div>
      </Section>

      {/* FAQ */}
      <Section bg="light" className="content-visibility-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-brand-900 text-center mb-12">Dúvidas Frequentes - Programa Reconquista AVC</h2>
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm overflow-hidden">
              <button className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none hover:bg-slate-50 transition-colors" onClick={() => toggleFaq(index)}>
                <span className="font-bold text-slate-800 text-sm md:text-base pr-4">{faq.question}</span>
                {openFaqIndex === index ? <ChevronUp className="text-brand-600 shrink-0" /> : <ChevronDown className="text-slate-400 shrink-0" />}
              </button>
              <div className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${openFaqIndex === index ? 'max-h-96 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}>
                <p className="text-slate-600 text-sm md:text-base leading-relaxed border-t border-slate-100 pt-4">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Footer */}
      <Section bg="white" className="border-t border-slate-100 content-visibility-auto">
        <div className="text-center max-w-2xl mx-auto">
          <HeartHandshake className="w-16 h-16 text-brand-600 mx-auto mb-6" />
          <h2 className="text-2xl md:text-3xl font-bold text-brand-900 mb-4">Ainda tem dúvidas?</h2>
          <p className="text-base md:text-lg text-slate-600 mb-8">O suporte é direto via WhatsApp, com atendimento humanizado para entender a sua necessidade antes de agendar.</p>
          <Button variant="primary" icon="whatsapp" className="w-full md:w-auto">Fale com a gente agora</Button>
        </div>
      </Section>

      <footer className="bg-brand-900 text-brand-100 py-12 content-visibility-auto">
        <div className="max-w-7xl mx-auto px-4 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <h3 className="text-2xl font-bold text-white mb-2">Izabel Macedo</h3>
            <p className="opacity-80">Fisioterapia Domiciliar & Reabilitação Neurológica</p>
            <p className="text-sm mt-2 opacity-60">São José dos Campos e Jacareí - SP</p>
          </div>
          <div className="flex flex-col items-center md:items-end gap-2">
            <a href="https://www.instagram.com/bel.fisio/" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-white hover:text-brand-300 transition-colors">
              <Instagram size={20} /> @bel.fisio
            </a>
            <div className="text-sm opacity-60">&copy; {new Date().getFullYear()} Todos os direitos reservados.</div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default MainContent;