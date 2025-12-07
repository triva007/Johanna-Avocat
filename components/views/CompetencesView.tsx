import React from 'react';
import { Users, Gavel, HeartHandshake, Baby, CheckCircle2, ArrowRight } from 'lucide-react';
import { Seo } from '../Seo';

export const CompetencesView: React.FC = () => {
  const competences = [
    {
      title: "Droit de la famille",
      icon: <Users className="h-6 w-6 md:h-8 md:w-8" />,
      description: "Gestion des crises et restructuration familiale.",
      details: [
        "Divorces (amiables, contentieux)",
        "Séparations de corps & rupture de PACS",
        "Autorité parentale & résidence",
        "Pensions alimentaires",
        "Liquidation régimes matrimoniaux",
        "Adoption & Filiation"
      ]
    },
    {
      title: "Droit pénal",
      icon: <Gavel className="h-6 w-6 md:h-8 md:w-8" />,
      description: "Défense pénale d'urgence et contentieux long.",
      details: [
        "Garde à vue & Auditions libres",
        "Comparutions immédiates",
        "Violences conjugales",
        "Défense des victimes",
        "Aménagement de peine",
        "Instruction criminelle"
      ]
    },
    {
      title: "Droit du travail",
      icon: <HeartHandshake className="h-6 w-6 md:h-8 md:w-8" />,
      description: "Relations individuelles et collectives de travail.",
      details: [
        "Licenciements (économique, personnel)",
        "Ruptures conventionnelles",
        "Harcèlement & discrimination",
        "Heures supplémentaires",
        "Transactions",
        "Conseil employeur"
      ]
    },
    {
      title: "Droit des enfants",
      icon: <Baby className="h-6 w-6 md:h-8 md:w-8" />,
      description: "L'enfant au cœur des préoccupations juridiques.",
      details: [
        "Assistance éducative (Juge des enfants)",
        "Audition de l'enfant (JAF)",
        "Droit pénal des mineurs",
        "Mesures de placement",
        "Protection de l'enfance"
      ]
    }
  ];

  return (
    <div className="animate-fade-in bg-navy-950 min-h-screen text-white font-sans selection:bg-brand-red">
      <Seo 
        title="Nos Compétences" 
        description="Expertises juridiques : Droit de la famille (Divorce, Garde), Droit pénal (Défense, Victimes), Droit du travail (Licenciement) et Droit des mineurs." 
      />

      {/* Hero Section */}
      <div className="relative py-16 md:py-24 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-brand-red font-bold uppercase tracking-[0.2em] text-xs mb-3 md:mb-4 block">Notre Expertise</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium mb-4 md:mb-6">Domaines d'intervention</h1>
            <p className="text-lg md:text-xl text-gray-400 font-light leading-relaxed">
              Une approche transversale et technique pour répondre aux problématiques juridiques les plus complexes, avec humanité et rigueur.
            </p>
          </div>
        </div>
      </div>

      {/* Grid Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {competences.map((comp, idx) => (
            <div key={idx} className="group relative bg-navy-900 border border-gray-800 hover:border-brand-red/50 transition-all duration-500 overflow-hidden">
              <div className="p-6 md:p-10 relative z-10">
                <div className="flex justify-between items-start mb-6 md:mb-8">
                  <div className="p-3 bg-navy-800 rounded-sm text-gold-400 group-hover:bg-brand-red group-hover:text-white transition-colors duration-300">
                    {comp.icon}
                  </div>
                  <span className="text-xs font-bold text-gray-600 uppercase tracking-widest group-hover:text-gold-400 transition-colors">
                    0{idx + 1}
                  </span>
                </div>

                <h3 className="text-2xl md:text-3xl font-serif font-medium mb-3 md:mb-4 group-hover:text-white transition-colors">
                  {comp.title}
                </h3>
                <p className="text-gray-400 mb-6 md:mb-8 font-light border-l-2 border-gray-700 pl-4 group-hover:border-gold-400 transition-colors text-sm md:text-base">
                  {comp.description}
                </p>

                <ul className="space-y-3">
                  {comp.details.map((detail, dIdx) => (
                    <li key={dIdx} className="flex items-start text-sm text-gray-300 group-hover:text-gray-100 transition-colors">
                      <div className="h-1.5 w-1.5 bg-brand-red mt-1.5 mr-3 rounded-full opacity-50 group-hover:opacity-100 flex-shrink-0"></div>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Background Decoration */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/5 to-transparent rounded-bl-full transform translate-x-16 -translate-y-16 group-hover:scale-150 transition-transform duration-700 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Call to Action Banner */}
        <div className="mt-12 md:mt-20 bg-white text-navy-950 p-8 md:p-16 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8 relative overflow-hidden text-center md:text-left">
           <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-serif font-medium mb-2">Un dossier complexe ?</h3>
              <p className="text-gray-600 font-light">Nous analysons votre situation lors d'un premier rendez-vous.</p>
           </div>
           <div className="relative z-10 w-full md:w-auto">
              <button className="flex items-center justify-center w-full md:w-auto px-8 py-4 bg-navy-950 text-white text-xs font-bold uppercase tracking-widest hover:bg-brand-red transition-colors">
                 Prendre contact <ArrowRight className="ml-3 h-4 w-4" />
              </button>
           </div>
           <div className="absolute top-0 right-0 h-full w-2 bg-brand-red hidden md:block"></div>
        </div>
      </div>
    </div>
  );
};