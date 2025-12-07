import React from 'react';
import { Award, Briefcase, GraduationCap, Quote } from 'lucide-react';
import { Seo } from '../Seo';

export const CabinetView: React.FC = () => {
  return (
    <div className="animate-fade-in pb-20 font-sans">
      <Seo 
        title="Le Cabinet" 
        description="Découvrez le parcours de Maître Johanna Ostrowka. Avocate à Versailles, diplômée de l'Université Panthéon-Assas, spécialisée dans la défense des mineurs et le droit des victimes." 
      />

      {/* Header Minimaliste */}
      <div className="bg-navy-950 text-white py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <span className="text-gold-400 font-bold uppercase tracking-widest text-xs mb-4 block">Notre identité</span>
          <h1 className="text-5xl md:text-6xl font-serif font-medium">Le Cabinet</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 -mt-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Main Content */}
          <div className="lg:col-span-8 bg-white p-8 md:p-12 shadow-sm border border-gray-100">
            <div className="space-y-12">
               <section>
                 <h2 className="text-3xl font-serif font-medium text-navy-950 mb-8">Une approche humaine et rigoureuse</h2>
                 <div className="prose prose-lg text-gray-600 text-justify font-light leading-loose">
                   <p className="mb-6 first-letter:text-5xl first-letter:font-serif first-letter:text-navy-950 first-letter:float-left first-letter:mr-4 first-letter:mt-[-8px]">
                     Situé au cœur de Versailles, le cabinet de Maître Johanna OSTROWKA offre un espace d'écoute et de stratégie juridique dédié à la défense de vos intérêts.
                   </p>
                   <p className="mb-6">
                     Titulaire d'une Maîtrise de Droit privé général et d'un DEA de Droit international privé de l'Université Paris II Panthéon-Assas, Maître Ostrowka exerce au Barreau de Versailles depuis 2008. Elle a forgé son expérience au sein de cabinets reconnus avant de fonder sa propre structure.
                   </p>
                   <p>
                     Sa méthode repose sur une analyse minutieuse de chaque dossier et une relation de confiance absolue avec ses clients. Qu'il s'agisse de contentieux familiaux délicats ou de défense pénale, l'objectif reste immuable : obtenir le meilleur résultat possible.
                   </p>
                 </div>
               </section>

               <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="bg-navy-50 p-8">
                     <Award className="h-8 w-8 text-brand-red mb-4" />
                     <h3 className="text-lg font-serif font-bold text-navy-950 mb-3">Avocats d'enfants</h3>
                     <p className="text-sm text-gray-600 leading-relaxed">
                       Membre du groupe Avocats d'enfants depuis 15 ans, Maître Ostrowka possède une expertise reconnue pour faire entendre la voix des mineurs en justice.
                     </p>
                  </div>
                  <div className="bg-navy-50 p-8">
                     <Briefcase className="h-8 w-8 text-brand-red mb-4" />
                     <h3 className="text-lg font-serif font-bold text-navy-950 mb-3">Partenariats</h3>
                     <p className="text-sm text-gray-600 leading-relaxed">
                       Collaboration étroite avec Maître Nicolas GOUTX (Barreau de Versailles), renforçant notre pôle de compétences en droit pénal et droit des victimes.
                     </p>
                  </div>
               </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 space-y-8 pt-12 lg:pt-0">
            <div className="sticky top-28 space-y-8">
              <div className="relative">
                <img 
                  src="https://i.postimg.cc/yx7BNgK4/unnamed.jpg" 
                  alt="Portrait Johanna Ostrowka - Avocat Versailles" 
                  className="w-full h-auto shadow-lg grayscale-[10%]"
                  loading="lazy"
                />
                <div className="absolute inset-0 border-4 border-white/20"></div>
              </div>

              <div className="bg-navy-950 text-white p-8 shadow-xl">
                <h3 className="text-xl font-serif font-medium mb-8 text-gold-400 border-b border-gray-800 pb-4">Parcours & Formation</h3>
                
                <div className="space-y-8">
                  <div className="flex group">
                    <GraduationCap className="h-5 w-5 text-brand-red mr-4 mt-1 group-hover:text-gold-400 transition-colors" />
                    <div>
                      <h4 className="font-bold text-sm uppercase tracking-wide mb-1">Université Panthéon-Assas</h4>
                      <p className="text-sm text-gray-400 font-light">
                        Maîtrise Droit privé général<br/>
                        DEA Droit international privé
                      </p>
                    </div>
                  </div>

                  <div className="flex group">
                    <Quote className="h-5 w-5 text-brand-red mr-4 mt-1 group-hover:text-gold-400 transition-colors" />
                    <div>
                      <h4 className="font-bold text-sm uppercase tracking-wide mb-1">Barreau de Versailles</h4>
                      <p className="text-sm text-gray-400 font-light">
                        Prestation de serment en 2008.<br/>
                        Exercice individuel et partenariats.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};