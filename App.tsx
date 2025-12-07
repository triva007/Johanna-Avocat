import React, { useState, useEffect } from 'react';
import { Page } from './types';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomeView } from './components/views/HomeView';
import { CabinetView } from './components/views/CabinetView';
import { CompetencesView } from './components/views/CompetencesView';
import { HonorairesView } from './components/views/HonorairesView';
import { ContactView } from './components/views/ContactView';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>(Page.HOME);

  // Simple animation effect for page transitions
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
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
        {renderPage()}
      </main>

      <Footer onNavigate={setCurrentPage} />
    </div>
  );
};

export default App;