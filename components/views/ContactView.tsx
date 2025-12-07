import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, ArrowRight } from 'lucide-react';
import { Seo } from '../Seo';

export const ContactView: React.FC = () => {
  const [formStatus, setFormStatus] = useState<'idle' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('success');
    setTimeout(() => setFormStatus('idle'), 5000);
  };

  return (
    <div className="animate-fade-in min-h-screen flex flex-col lg:flex-row font-sans">
      <Seo 
        title="Contact" 
        description="Prenez rendez-vous avec le Cabinet Ostrowka à Versailles. Contactez-nous par téléphone ou email pour une première consultation juridique." 
      />
      
      {/* LEFT SIDE - INFO (Dark) */}
      <div className="lg:w-5/12 bg-navy-950 text-white p-12 lg:p-20 flex flex-col justify-between relative overflow-hidden">
         {/* Background pattern */}
         <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none" 
              style={{backgroundImage: 'radial-gradient(circle at 20% 20%, #d4af37 1px, transparent 1px)', backgroundSize: '40px 40px'}}>
         </div>

         <div className="relative z-10">
            <span className="text-brand-red font-bold uppercase tracking-[0.2em] text-xs mb-6 block">Contact</span>
            <h1 className="text-5xl md:text-6xl font-serif font-medium mb-8 leading-tight">
               Parlons de <br/> <span className="text-gold-400 italic">votre affaire.</span>
            </h1>
            <p className="text-gray-400 text-lg font-light leading-relaxed max-w-md">
               Le cabinet vous reçoit sur rendez-vous à Versailles. Notre secrétariat est à votre écoute pour une première analyse de vos besoins.
            </p>
         </div>

         <div className="relative z-10 space-y-10 mt-16 lg:mt-0">
            <div className="group cursor-pointer">
               <div className="flex items-center text-gold-400 mb-2">
                  <Phone className="h-5 w-5 mr-3" />
                  <span className="text-xs font-bold uppercase tracking-widest">Téléphone</span>
               </div>
               <p className="text-3xl font-serif group-hover:text-brand-red transition-colors">09 56 12 94 25</p>
               <p className="text-sm text-gray-500 mt-1">Du Lundi au Vendredi, 9h - 19h</p>
            </div>

            <div>
               <div className="flex items-center text-gold-400 mb-2">
                  <MapPin className="h-5 w-5 mr-3" />
                  <span className="text-xs font-bold uppercase tracking-widest">Cabinet</span>
               </div>
               <p className="text-lg text-gray-200">
                  47 rue du Maréchal Foch<br/>
                  78000 Versailles
               </p>
            </div>

            <div>
               <div className="flex items-center text-gold-400 mb-2">
                  <Mail className="h-5 w-5 mr-3" />
                  <span className="text-xs font-bold uppercase tracking-widest">Email</span>
               </div>
               <a href="mailto:jostrowka.avocat@gmail.com" className="text-lg text-gray-200 hover:text-white border-b border-gray-700 hover:border-white transition-all pb-1 inline-block">
                  jostrowka.avocat@gmail.com
               </a>
            </div>
         </div>
      </div>

      {/* RIGHT SIDE - FORM (Light) */}
      <div className="lg:w-7/12 bg-white p-12 lg:p-20 overflow-y-auto">
         <div className="max-w-xl mx-auto">
            <h2 className="text-2xl font-serif font-bold text-navy-950 mb-8">Envoyer un message</h2>
            
            {formStatus === 'success' ? (
              <div className="bg-green-50 border-l-4 border-green-500 text-green-800 p-8 rounded-r shadow-sm">
                <p className="font-bold text-lg mb-2">Message envoyé</p>
                <p>Nous avons bien reçu votre demande et vous répondrons sous 24h ouvrées.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                   <div className="group">
                      <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2 group-focus-within:text-brand-red transition-colors">Prénom</label>
                      <input type="text" required className="w-full border-b border-gray-300 py-3 focus:outline-none focus:border-brand-red bg-transparent transition-colors text-navy-950" placeholder="Jean" />
                   </div>
                   <div className="group">
                      <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2 group-focus-within:text-brand-red transition-colors">Nom</label>
                      <input type="text" required className="w-full border-b border-gray-300 py-3 focus:outline-none focus:border-brand-red bg-transparent transition-colors text-navy-950" placeholder="Dupont" />
                   </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                   <div className="group">
                      <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2 group-focus-within:text-brand-red transition-colors">Email</label>
                      <input type="email" required className="w-full border-b border-gray-300 py-3 focus:outline-none focus:border-brand-red bg-transparent transition-colors text-navy-950" placeholder="jean.dupont@email.com" />
                   </div>
                   <div className="group">
                      <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2 group-focus-within:text-brand-red transition-colors">Téléphone</label>
                      <input type="tel" className="w-full border-b border-gray-300 py-3 focus:outline-none focus:border-brand-red bg-transparent transition-colors text-navy-950" placeholder="06 12 34 56 78" />
                   </div>
                </div>

                <div className="group">
                   <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2 group-focus-within:text-brand-red transition-colors">Sujet</label>
                   <select className="w-full border-b border-gray-300 py-3 focus:outline-none focus:border-brand-red bg-transparent transition-colors text-navy-950">
                      <option>Demande de rendez-vous</option>
                      <option>Droit de la famille</option>
                      <option>Droit pénal</option>
                      <option>Droit du travail</option>
                      <option>Autre demande</option>
                   </select>
                </div>

                <div className="group">
                   <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2 group-focus-within:text-brand-red transition-colors">Message</label>
                   <textarea rows={4} required className="w-full border-b border-gray-300 py-3 focus:outline-none focus:border-brand-red bg-transparent transition-colors text-navy-950 resize-none" placeholder="Décrivez brièvement votre situation..."></textarea>
                </div>

                <div className="pt-4">
                   <button type="submit" className="group flex items-center justify-between w-full bg-navy-950 text-white px-8 py-5 hover:bg-brand-red transition-all duration-300">
                      <span className="font-bold uppercase tracking-widest text-sm">Envoyer ma demande</span>
                      <ArrowRight className="h-5 w-5 transform group-hover:translate-x-2 transition-transform" />
                   </button>
                </div>
              </form>
            )}
         </div>
      </div>
    </div>
  );
};