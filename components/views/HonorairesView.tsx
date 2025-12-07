import React from 'react';
import { FileText, Clock, PieChart, Coins, Check, AlertCircle } from 'lucide-react';

export const HonorairesView: React.FC = () => {
  return (
    <div className="animate-fade-in font-sans text-navy-950 bg-white">
      
      {/* Header Minimaliste */}
      <div className="bg-navy-50 py-24 border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="text-brand-red font-bold uppercase tracking-[0.2em] text-xs mb-4 block">Transparence & Confiance</span>
          <h1 className="text-5xl font-serif font-medium mb-6 text-navy-950">Honoraires</h1>
          <p className="text-xl text-gray-500 font-light leading-relaxed max-w-2xl mx-auto">
            La relation de confiance entre l'avocat et son client repose sur une transparence totale des conditions d'intervention.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 lg:px-8 -mt-12 relative z-10">
        
        {/* Intro Card */}
        <div className="bg-white p-8 md:p-12 shadow-xl border-t-4 border-brand-red mb-20">
           <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="md:w-1/3">
                 <h2 className="text-2xl font-serif font-bold mb-2">La Convention</h2>
                 <p className="text-sm text-gray-400 uppercase tracking-wider">Engagement écrit</p>
              </div>
              <div className="md:w-2/3 prose text-gray-600 font-light leading-loose text-justify">
                 <p>
                   Dès le premier rendez-vous, la question des honoraires est abordée sans tabou. Conformément à nos règles déontologiques, 
                   <strong> une convention d'honoraires est systématiquement établie</strong>. Elle détaille la mission, le mode de rémunération et les frais prévisibles, vous offrant une visibilité financière complète.
                 </p>
              </div>
           </div>
        </div>

        {/* 3 Modes de Facturation */}
        <div className="mb-24">
           <div className="text-center mb-16">
              <h2 className="text-3xl font-serif font-medium mb-4">Modes de facturation</h2>
              <div className="w-16 h-[1px] bg-gold-400 mx-auto"></div>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Card 1 */}
              <div className="bg-white border border-gray-200 p-8 hover:shadow-lg transition-shadow duration-300 group">
                 <div className="w-12 h-12 bg-navy-50 rounded-full flex items-center justify-center text-navy-950 mb-6 group-hover:bg-navy-950 group-hover:text-white transition-colors">
                    <Clock className="h-6 w-6" />
                 </div>
                 <h3 className="text-xl font-bold mb-4 font-serif">Au temps passé</h3>
                 <p className="text-gray-500 text-sm leading-relaxed mb-6">
                    Facturation au taux horaire pour les dossiers complexes dont la durée est difficilement prévisible.
                 </p>
                 <div className="border-t border-gray-100 pt-6">
                    <p className="flex items-center text-navy-950 font-bold">
                       <span className="text-2xl mr-2">200 €</span>
                       <span className="text-xs text-gray-400 font-normal uppercase">HT / Heure</span>
                    </p>
                    <p className="text-xs text-gray-400 mt-2">Détail précis des diligences joint à la facture.</p>
                 </div>
              </div>

              {/* Card 2 - Featured */}
              <div className="bg-navy-950 text-white p-8 shadow-2xl transform md:-translate-y-4 relative overflow-hidden">
                 <div className="absolute top-0 right-0 bg-gold-500 text-navy-950 text-[10px] font-bold px-3 py-1 uppercase tracking-widest">Recommandé</div>
                 <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-gold-400 mb-6">
                    <FileText className="h-6 w-6" />
                 </div>
                 <h3 className="text-xl font-bold mb-4 font-serif text-white">Au forfait</h3>
                 <p className="text-gray-300 text-sm leading-relaxed mb-6">
                    Un montant global et définitif fixé dès l'ouverture du dossier pour l'ensemble de la procédure.
                 </p>
                 <div className="border-t border-white/10 pt-6">
                    <p className="text-sm font-medium text-gold-400 mb-2">Idéal pour :</p>
                    <ul className="space-y-2 text-sm text-gray-300">
                       <li className="flex items-center"><Check className="h-3 w-3 mr-2 text-brand-red" /> Divorces amiables</li>
                       <li className="flex items-center"><Check className="h-3 w-3 mr-2 text-brand-red" /> Procédures correctionnelles</li>
                       <li className="flex items-center"><Check className="h-3 w-3 mr-2 text-brand-red" /> Rédaction de contrats</li>
                    </ul>
                 </div>
              </div>

              {/* Card 3 */}
              <div className="bg-white border border-gray-200 p-8 hover:shadow-lg transition-shadow duration-300 group">
                 <div className="w-12 h-12 bg-navy-50 rounded-full flex items-center justify-center text-navy-950 mb-6 group-hover:bg-navy-950 group-hover:text-white transition-colors">
                    <PieChart className="h-6 w-6" />
                 </div>
                 <h3 className="text-xl font-bold mb-4 font-serif">De résultat</h3>
                 <p className="text-gray-500 text-sm leading-relaxed mb-6">
                    Un honoraire complémentaire calculé sur les sommes gagnées ou économisées grâce à l'intervention de l'avocat.
                 </p>
                 <div className="border-t border-gray-100 pt-6">
                    <p className="text-sm font-medium text-navy-950 mb-2">Note :</p>
                    <p className="text-xs text-gray-500 leading-relaxed">
                       Ne peut être le seul mode de rémunération (interdiction légale). Vient en complément d'un honoraire fixe réduit.
                    </p>
                 </div>
              </div>
           </div>
        </div>

        {/* Info Grid */}
        <div className="bg-gray-50 p-12 mb-20">
           <div className="flex items-start mb-8">
              <AlertCircle className="h-6 w-6 text-brand-red mr-4 mt-1" />
              <div>
                 <h3 className="text-xl font-serif font-bold text-navy-950">Bon à savoir</h3>
                 <p className="text-sm text-gray-500 mt-1">Éléments influençant le coût de la procédure</p>
              </div>
           </div>
           
           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {[
                 "Complexité de l'affaire",
                 "Situation de fortune",
                 "Frais de procédure",
                 "Urgence de l'intervention"
              ].map((item, i) => (
                 <div key={i} className="bg-white p-4 text-center border border-gray-100 shadow-sm">
                    <span className="text-sm font-medium text-gray-700">{item}</span>
                 </div>
              ))}
           </div>
        </div>

      </div>
    </div>
  );
};