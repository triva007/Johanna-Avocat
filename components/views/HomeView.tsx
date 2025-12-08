import React, { useState } from 'react';
import { Page } from '../../types';
import { ArrowRight, ChevronRight, Star, Quote, Phone, Plus, Minus, Mic2, Tv, Newspaper, Radio, Scale, Shield, Clock } from 'lucide-react';
import { Seo } from '../Seo';

interface HomeViewProps {
  onNavigate: (page: Page) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({ onNavigate }) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "Quel est le coût d'une première consultation ?",
      answer: "La première consultation est facturée forfaitairement. Ce rendez-vous permet d'analyser votre situation, de déterminer les enjeux juridiques et d'établir une stratégie. Si une procédure est engagée, ce montant peut être déduit du forfait global selon la convention d'honoraires."
    },
    {
      question: "Comment se déroule une procédure de divorce ?",
      answer: "La procédure dépend du type de divorce (amiable ou contentieux). Pour un divorce par consentement mutuel, tout peut se régler par acte d'avocat sans passer devant le juge. Pour les divorces contentieux, une phase de conciliation ou d'orientation précède le jugement final."
    },
    {
      question: "Le cabinet accepte-t-il l'aide juridictionnelle ?",
      answer: "Le cabinet étudie l'acceptation de l'aide juridictionnelle au cas par cas, en fonction de la complexité du dossier et de la nature de la procédure envisagée."
    }
  ];

  return (
    <div className="animate-fade-in font-sans selection:bg-gold-500 selection:text-white">
      <Seo 
        title="Accueil" 
        description="Maître Johanna Ostrowka, Avocat à la Cour de Versailles. Expertise en Droit de la famille, Droit pénal et Droit du travail. Cabinet réputé pour sa défense rigoureuse." 
      />
      
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[auto] md:min-h-[85vh] w-full bg-navy-950 text-white overflow-hidden flex items-center pt-24 pb-16 md:py-0">
        {/* Background Overlay - Priority Loading */}
        <div 
          className="absolute inset-0 bg-cover bg-center z-0 opacity-20"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1589829085413-56de8ae18c73?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')" }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-900/95 to-navy-900/40 z-10"></div>
        
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col md:flex-row items-center justify-between gap-12">
          
          <div className="md:w-1/2 space-y-8 md:space-y-10 animate-slide-up">
            <div className="flex items-center space-x-4">
               <div className="h-[1px] w-8 md:w-12 bg-gold-400"></div>
               <h2 className="text-gold-400 uppercase tracking-[0.2em] text-[10px] md:text-xs font-semibold">Avocat au Barreau de Versailles</h2>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-serif font-medium leading-[1.1] tracking-tight">
              L'excellence <br />
              <span className="italic text-gold-400 font-light">juridique.</span>
            </h1>
            
            <p className="text-base md:text-xl text-gray-300 max-w-lg leading-relaxed font-light">
              Cabinet Ostrowka. Une expertise pointue en droit de la famille, pénal et du travail, alliée à une humanité constante.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 md:gap-8 pt-4 md:pt-8 items-start sm:items-center">
               <button 
                onClick={() => onNavigate(Page.CONTACT)}
                className="w-full sm:w-auto group relative px-8 py-4 bg-transparent border border-white text-white font-medium uppercase tracking-widest text-xs hover:bg-white hover:text-navy-950 transition-all duration-500 text-center"
                aria-label="Prendre rendez-vous avec le cabinet"
               >
                 Prendre rendez-vous
               </button>
               
               <div className="flex items-center space-x-4 group cursor-pointer" onClick={() => onNavigate(Page.CONTACT)}>
                  <div className="w-10 h-10 rounded-full bg-brand-red/90 flex items-center justify-center group-hover:bg-brand-red transition-colors flex-shrink-0">
                     <Phone className="h-4 w-4 text-white" />
                  </div>
                  <div>
                     <span className="block text-[10px] text-gray-400 uppercase tracking-wider">Permanence téléphonique</span>
                     <span className="block text-lg font-serif text-white">09 56 12 94 25</span>
                  </div>
               </div>
            </div>
          </div>

          {/* Image Flottante Hero - Eager Loading (Above the fold) */}
          <div className="w-full md:w-5/12 relative animate-fade-in delay-300 mt-8 md:mt-0">
             <div className="relative z-10">
                <img 
                  src="https://i.postimg.cc/63r2Svzw/unnamed.jpg" 
                  alt="Maître Johanna Ostrowka - Avocat Versailles" 
                  className="w-full h-auto object-cover shadow-2xl grayscale-[10%] contrast-[1.1] rounded-sm"
                  width="600"
                  height="800"
                  loading="eager"
                  fetchPriority="high"
                />
                {/* Cadre décoratif fin */}
                <div className="absolute top-6 -right-6 w-full h-full border border-gold-500/30 -z-10 hidden lg:block"></div>
             </div>
          </div>
        </div>
      </section>

      {/* 2. SECTION MEDIA / TRUST */}
      <div className="bg-white border-b border-gray-100 py-10 md:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <p className="text-center text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-8">Interventions & Expertise Média</p>
           <div className="flex flex-wrap justify-center items-center gap-8 md:gap-24 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
              <div className="flex items-center space-x-2 group scale-90 md:scale-100">
                 <Tv className="h-5 w-5 md:h-6 md:w-6 text-brand-red hidden group-hover:block" />
                 <span className="text-xl md:text-2xl font-black italic tracking-tighter font-sans text-navy-950">CNEWS</span>
              </div>
              <div className="flex items-center space-x-2 group scale-90 md:scale-100">
                 <Newspaper className="h-5 w-5 md:h-6 md:w-6 text-blue-800 hidden group-hover:block" />
                 <span className="text-xl md:text-2xl font-serif font-bold text-navy-950">LE FIGARO</span>
              </div>
              <div className="flex items-center space-x-2 group scale-90 md:scale-100">
                 <Radio className="h-5 w-5 md:h-6 md:w-6 text-blue-500 hidden group-hover:block" />
                 <span className="text-xl md:text-2xl font-bold font-sans text-navy-950 italic">Europe 1</span>
              </div>
              <div className="flex items-center space-x-2 group scale-90 md:scale-100">
                 <Mic2 className="h-5 w-5 md:h-6 md:w-6 text-red-600 hidden group-hover:block" />
                 <span className="text-xl md:text-2xl font-black font-sans text-navy-950 bg-clip-text">RTL</span>
              </div>
           </div>
        </div>
      </div>

      {/* 3. NOUVELLE SECTION INTERMÉDIAIRE - VALEURS */}
      <section className="py-16 md:py-24 bg-navy-50 border-b border-gray-200">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
               <span className="text-brand-red font-bold uppercase tracking-[0.2em] text-xs mb-3 block">Nos Engagements</span>
               <h2 className="text-2xl md:text-4xl font-serif font-medium text-navy-950">Une défense bâtie sur la confiance</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
               <div className="bg-white p-6 md:p-8 shadow-sm border border-gray-100 group hover:border-brand-red/30 transition-colors">
                  <div className="w-12 h-12 bg-navy-50 rounded-full flex items-center justify-center text-navy-950 mb-6 group-hover:bg-navy-950 group-hover:text-white transition-colors">
                     <Scale className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg md:text-xl font-serif font-bold text-navy-950 mb-4">Rigueur Juridique</h3>
                  <p className="text-gray-600 font-light leading-relaxed text-sm md:text-base">
                     Chaque dossier fait l'objet d'une analyse technique approfondie. Nous ne laissons rien au hasard pour garantir la solidité de votre défense.
                  </p>
               </div>

               <div className="bg-white p-6 md:p-8 shadow-sm border border-gray-100 group hover:border-brand-red/30 transition-colors">
                  <div className="w-12 h-12 bg-navy-50 rounded-full flex items-center justify-center text-navy-950 mb-6 group-hover:bg-navy-950 group-hover:text-white transition-colors">
                     <Shield className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg md:text-xl font-serif font-bold text-navy-950 mb-4">Combativité</h3>
                  <p className="text-gray-600 font-light leading-relaxed text-sm md:text-base">
                     Face à l'adversité, nous défendons vos intérêts avec ténacité. Votre cause devient la nôtre, du premier rendez-vous jusqu'au jugement.
                  </p>
               </div>

               <div className="bg-white p-6 md:p-8 shadow-sm border border-gray-100 group hover:border-brand-red/30 transition-colors">
                  <div className="w-12 h-12 bg-navy-50 rounded-full flex items-center justify-center text-navy-950 mb-6 group-hover:bg-navy-950 group-hover:text-white transition-colors">
                     <Clock className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg md:text-xl font-serif font-bold text-navy-950 mb-4">Disponibilité</h3>
                  <p className="text-gray-600 font-light leading-relaxed text-sm md:text-base">
                     Une écoute active et une réactivité constante. Nous vous tenons informés de chaque étape de la procédure en temps réel.
                  </p>
               </div>
            </div>
         </div>
      </section>

      <div className="bg-white">
        {/* 4. SECTION PORTRAIT - Lazy Load image */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-32">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24 relative">
            
            <div className="lg:w-1/2 order-2 lg:order-1 animate-slide-up">
               <h2 className="text-3xl md:text-5xl font-serif font-medium text-navy-950 mb-6 md:mb-8 leading-tight">
                 Maître <br/>
                 <span className="italic text-brand-red">Johanna Ostrowka</span>
               </h2>
               
               <div className="space-y-4 md:space-y-6 text-gray-600 leading-relaxed md:leading-loose font-light text-base md:text-lg text-justify">
                  <p>
                    <strong className="text-navy-950 font-medium">Avocate au Barreau de Versailles depuis 2008</strong>, Maître Ostrowka incarne une vision du droit où la rigueur technique sert une cause humaine.
                  </p>
                  <p>
                    Titulaire d'un DEA de Droit international privé de l'Université Panthéon-Assas, elle intervient avec précision et pugnacité dans les contentieux complexes.
                  </p>
                  <p>
                    Le cabinet privilégie toujours l'écoute et la stratégie sur-mesure. Chaque dossier est unique, chaque histoire mérite une défense d'excellence.
                  </p>
               </div>
               
               <div className="mt-8 md:mt-10 flex items-center gap-4">
                 <button 
                   onClick={() => onNavigate(Page.CABINET)}
                   className="text-navy-950 uppercase tracking-widest text-xs font-bold border-b border-navy-950 pb-2 hover:text-brand-red hover:border-brand-red transition-colors"
                 >
                   Découvrir le cabinet
                 </button>
               </div>
            </div>

            {/* Layout Image + Citation propre */}
            <div className="lg:w-1/2 relative order-1 lg:order-2 w-full">
               <div className="relative w-full max-w-md mx-auto lg:mx-0 lg:ml-auto">
                  <img 
                    src="https://i.postimg.cc/yx7BNgK4/unnamed.jpg" 
                    alt="Portrait Maître Johanna Ostrowka - Avocat en Droit de la Famille" 
                    className="w-full h-[400px] md:h-[650px] object-cover shadow-2xl z-10 relative grayscale-[10%]"
                    loading="lazy"
                    width="600"
                    height="650"
                  />
                  
                  {/* Bloc Citation "Flat Design" Épuré */}
                  <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 lg:translate-x-0 lg:-left-12 z-20 bg-brand-red text-white p-6 md:p-10 w-[90%] md:w-[85%] shadow-xl">
                     <Quote className="h-5 w-5 md:h-6 md:w-6 text-white/40 mb-3 md:mb-4" />
                     <p className="font-serif text-lg md:text-2xl leading-relaxed italic font-light">
                       "Il n'y a pas de petit ou grand dossier. Uniquement des causes à défendre."
                     </p>
                  </div>
               </div>
            </div>

          </div>
        </section>

        {/* 5. SECTION COMPÉTENCES */}
        <section className="py-16 md:py-32 bg-navy-50">
           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col md:flex-row justify-between items-end mb-10 md:mb-16 border-b border-gray-200 pb-8">
                 <div className="max-w-2xl w-full">
                    <span className="text-brand-red font-bold uppercase tracking-widest text-xs mb-3 md:mb-4 block">Expertises</span>
                    <h2 className="text-3xl md:text-4xl font-serif font-medium text-navy-950">Domaines d'intervention</h2>
                 </div>
                 <button onClick={() => onNavigate(Page.COMPETENCES)} className="hidden md:flex items-center text-navy-950 hover:text-brand-red transition-colors text-sm font-bold uppercase tracking-widest mt-6 md:mt-0 whitespace-nowrap">
                    Tout voir <ChevronRight className="ml-2 h-4 w-4" />
                 </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                 {[
                    { title: "Droit de la famille", img: "https://www.charlesullman.com/wp-content/uploads/2022/01/couples-use-same-lawyer-divorce.jpg", subtitle: "Divorce, Séparation" },
                    { title: "Droit pénal", img: "https://images.unsplash.com/photo-1505664194779-8beaceb93744?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", subtitle: "Défense, Victimes" },
                    { title: "Droit du travail", img: "https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", subtitle: "Contentieux salarié" },
                    { title: "Droit des enfants", img: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", subtitle: "Protection mineurs" },
                 ].map((item, idx) => (
                    <div key={idx} onClick={() => onNavigate(Page.COMPETENCES)} className="group relative h-[300px] md:h-[450px] overflow-hidden cursor-pointer bg-navy-950">
                       <img 
                        src={item.img} 
                        alt={item.title} 
                        className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-700 scale-100 group-hover:scale-105"
                        loading="lazy" 
                        width="300"
                        height="450"
                       />
                       {/* Overlay Content */}
                       <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-between">
                          <div className="flex justify-end">
                             <div className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                                <ArrowRight className="text-white h-4 w-4" />
                             </div>
                          </div>
                          <div>
                             <div className="h-[1px] w-0 bg-brand-red mb-4 group-hover:w-12 transition-all duration-500"></div>
                             <h3 className="text-white font-serif text-2xl md:text-3xl font-light mb-2">{item.title}</h3>
                             <p className="text-gray-300 text-sm font-light tracking-wide transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                                {item.subtitle}
                             </p>
                          </div>
                       </div>
                    </div>
                 ))}
              </div>
              
              <div className="mt-8 md:hidden text-center">
                 <button onClick={() => onNavigate(Page.COMPETENCES)} className="w-full py-3 bg-navy-950 text-white text-sm font-bold uppercase tracking-widest hover:bg-brand-red transition-colors">
                    Toutes nos compétences
                 </button>
              </div>
           </div>
        </section>

        {/* 6. SECTION AVIS */}
        <section className="relative py-16 md:py-32 bg-navy-950 text-white overflow-hidden">
           <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
              <div className="mb-8 md:mb-10 flex justify-center">
                 <Quote className="h-8 w-8 md:h-10 md:w-10 text-gold-400 opacity-50" />
              </div>
              
              <p className="text-xl md:text-3xl font-serif font-light leading-relaxed mb-8 md:mb-10 text-gray-100 italic">
                 "Une avocate brillante et humaine. Le cabinet traite les affaires avec un sérieux remarquable et une efficacité redoutable."
              </p>

              <div className="flex items-center justify-center space-x-2 mb-4">
                 {[1,2,3,4,5].map((s) => (
                    <Star key={s} className="w-4 h-4 text-brand-red fill-current" />
                 ))}
              </div>
              
              <div className="w-12 h-[1px] bg-gray-700 mx-auto mb-4"></div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400">Alexandre C. - Client vérifié</p>
           </div>
        </section>

        {/* 7. SPLIT SECTION FAQ */}
        <section className="grid grid-cols-1 lg:grid-cols-2">
           <div className="bg-white p-8 md:p-16 lg:p-24 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-gray-100 order-2 lg:order-1">
              <span className="text-brand-red font-bold uppercase tracking-widest text-xs mb-4 md:mb-6">Foire aux questions</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-medium text-navy-950 mb-8 md:mb-10">
                 Vos interrogations légitimes.
              </h2>
              <div className="space-y-2">
                 {faqData.map((item, i) => (
                    <div key={i} className="border-b border-gray-100">
                       <button 
                        onClick={() => toggleFaq(i)}
                        className="w-full py-4 md:py-6 flex justify-between items-center text-left group hover:bg-gray-50 transition-colors px-2"
                       >
                          <h3 className={`text-base md:text-lg font-serif transition-colors pr-4 ${openFaqIndex === i ? 'text-brand-red' : 'text-gray-600 group-hover:text-navy-950'}`}>
                            {item.question}
                          </h3>
                          <div className={`w-6 h-6 md:w-8 md:h-8 rounded-full border flex-shrink-0 flex items-center justify-center transition-all ${openFaqIndex === i ? 'bg-navy-950 border-navy-950 text-white' : 'border-gray-200 text-gray-400 group-hover:border-navy-950 group-hover:text-navy-950'}`}>
                             {openFaqIndex === i ? <Minus className="h-3 w-3" /> : <Plus className="h-3 w-3" />}
                          </div>
                       </button>
                       
                       <div className={`overflow-hidden transition-all duration-300 ease-in-out ${openFaqIndex === i ? 'max-h-64 opacity-100 mb-6' : 'max-h-0 opacity-0'}`}>
                          <p className="text-gray-500 font-light leading-relaxed px-2 text-sm md:text-base">
                             {item.answer}
                          </p>
                       </div>
                    </div>
                 ))}
              </div>
           </div>

           <div className="bg-gray-50 p-8 md:p-16 lg:p-24 flex flex-col justify-center items-start order-1 lg:order-2">
               <h2 className="text-2xl md:text-3xl font-serif font-medium text-navy-950 mb-4 md:mb-6">Besoin d'un accompagnement immédiat ?</h2>
               <p className="text-gray-600 text-base md:text-lg mb-8 md:mb-10 font-light leading-relaxed">
                  Notre secrétariat est disponible pour planifier un premier rendez-vous et analyser votre situation en toute confidentialité.
               </p>
               
               <div className="w-full bg-white p-6 md:p-8 shadow-sm border border-gray-100">
                  <div className="flex items-center gap-4 md:gap-6 mb-6">
                     <div className="w-10 h-10 md:w-12 md:h-12 bg-navy-50 flex items-center justify-center rounded-full text-brand-red flex-shrink-0">
                        <Phone className="h-5 w-5" />
                     </div>
                     <div>
                        <span className="block text-xs uppercase tracking-wider text-gray-400 mb-1">Appelez-nous</span>
                        <a href="tel:0956129425" className="block text-xl md:text-2xl font-serif font-medium text-navy-950 hover:text-brand-red transition-colors">09 56 12 94 25</a>
                     </div>
                  </div>
                  <button onClick={() => onNavigate(Page.CONTACT)} className="w-full py-4 bg-navy-950 text-white font-bold uppercase tracking-widest text-xs hover:bg-brand-red transition-colors">
                     Contacter le cabinet
                  </button>
               </div>
           </div>
        </section>

      </div>
    </div>
  );
};