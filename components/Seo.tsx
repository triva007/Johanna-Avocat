import React, { useEffect } from 'react';

interface SeoProps {
  title: string;
  description: string;
}

export const Seo: React.FC<SeoProps> = ({ title, description }) => {
  useEffect(() => {
    // Update Title
    document.title = `${title} | Cabinet Johanna Ostrowka - Versailles`;

    // Update Meta Description
    let metaDescription = document.querySelector("meta[name='description']");
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', description);
  }, [title, description]);

  return null;
};