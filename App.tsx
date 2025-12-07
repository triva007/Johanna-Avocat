import React, { useState, useEffect, Suspense } from 'react';
import { Page } from './types';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

// Lazy loading des vues pour optimiser la performance initiale
// React.lazy permet de ne charger le code JS de la page que si l'utilisateur la demande.
const HomeView = React.lazy(() => import('./components/views/HomeView').then(module => ({ default: module.HomeView })));
const CabinetView = React.lazy(() => import('./components/views/CabinetView').then(module => ({ default: module.CabinetView })));
const CompetencesView = React.lazy(() => import('./components/views/CompetencesView').then(module => ({ default: module.CompetencesView })));
const HonorairesView = React.lazy(() => import('./components/views/HonorairesView').then(module => ({ default: module.HonorairesView })));
const ContactView = React.lazy(() => import('./components/views/ContactView').then(module => ({ default: module.ContactView })));

// Loading spinner simple
const LoadingFallback = () => (
  <div className="min-h-screen flex items-center justify-center bg-white">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-brand-red"></div>
  </div>
);

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>(Page.HOME);

  useEffect(() => {
    // Scroll to top on navigation is handled inside views mostly, but good to ensure here
    window.scrollTo({ top: 0, behavior: 'auto' }); 
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case Page.HOME:
        return <HomeView onNavigate={setCurrentPage} />;
      case Page.CABINET:
        return <CabinetView />;
      case Page.COMPETENCES:
        return <CompetencesView />;
      case Page.HONORAIRES:
        return <HonorairesView />;
      case Page.CONTACT:
        return <ContactView />;
      default:
        return <HomeView onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-800">
      <Header currentPage={currentPage} onNavigate={setCurrentPage} />
      
      <main className="flex-grow">
        <Suspense fallback={<LoadingFallback />}>
          {renderPage()}
        </Suspense>
      </main>

      <Footer onNavigate={setCurrentPage} />
    </div>
  );
};

export default App;