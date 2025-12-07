import React from 'react';
import { Page } from '../types';
import { Linkedin, MapPin, Mail, Phone, ChevronRight } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: Page) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-navy-950 text-white font-sans border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          
          {/* Column 1: Brand */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-serif font-bold text-white">OSTROWKA</h3>
              <p className="text-brand-red text-xs uppercase tracking-[0.2em] mt-1">Société d'avocats</p>
            </div>
            
            <div className="space-y-4">
               <div className="flex items-start text-gray-400 hover:text-white transition-colors">
                  <MapPin className="h-5 w-5 mr-3 mt-1 flex-shrink-0 text-brand-red" />
                  <span className="text-sm">47 rue du Maréchal Foch<br/>78000 Versailles</span>
               </div>
               <div className="flex items-center text-gray-400 hover:text-white transition-colors">
                  <Phone className="h-5 w-5 mr-3 text-brand-red" />
                  <span className="text-sm">09 56 12 94 25</span>
               </div>
               <div className="flex items-center text-gray-400 hover:text-white transition-colors">
                  <Mail className="h-5 w-5 mr-3 text-brand-red" />
                  <span className="text-sm">jostrowka.avocat@gmail.com</span>
               </div>
            </div>

            <div className="pt-4">
               <h4 className="text-sm font-bold mb-3">Suivez-nous</h4>
               <div className="flex space-x-4">
                 <a href="https://fr.linkedin.com/in/johanna-ostrowka-3b1b3b1b" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-brand-red transition-colors">
                   <Linkedin className="h-4 w-4" />
                 </a>
               </div>
            </div>
          </div>

          {/* Column 2: Compétences */}
          <div>
            <h3 className="text-lg font-bold mb-6">Compétences</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              {['Droit public', 'Droit pénal', 'Droit des indépendants', 'Droit des plateformes', 'Droit des nouvelles technologies', 'Droit commercial'].map((item, i) => (
                 <li key={i}>
                    <button onClick={() => onNavigate(Page.COMPETENCES)} className="hover:text-brand-red transition-colors flex items-center">
                       {item}
                    </button>
                 </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Le Site */}
          <div>
            <h3 className="text-lg font-bold mb-6">Le site</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              {['Nos avocats', 'Procès', 'FAQ', 'Actions', 'Actualités', 'Contact'].map((item, i) => (
                 <li key={i}>
                    <button onClick={() => onNavigate(Page.HOME)} className="hover:text-brand-red transition-colors">
                       {item}
                    </button>
                 </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Newsletter / Info */}
          <div>
            <h3 className="text-lg font-bold mb-6">Informations</h3>
            <ul className="space-y-3 text-sm text-gray-400 mb-8">
               <li>Mentions légales</li>
               <li>CGV</li>
               <li>Politique de confidentialité</li>
            </ul>

            <h3 className="text-lg font-bold mb-4">Inscrivez-vous à la newsletter</h3>
            <div className="flex flex-col space-y-2">
               <input type="email" placeholder="Votre email" className="bg-gray-800 border-none text-white px-4 py-2 rounded focus:ring-1 focus:ring-brand-red outline-none text-sm" />
               <button className="bg-brand-red hover:bg-red-700 text-white font-bold py-2 rounded text-sm transition-colors">
                  Je m'inscris
               </button>
            </div>
          </div>

        </div>
        
        <div className="border-t border-gray-800 mt-16 pt-8 text-center text-xs text-gray-600">
          <p>Copyright 2025 Cabinet Johanna Ostrowka. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};