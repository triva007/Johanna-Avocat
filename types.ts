import React from 'react';

export enum Page {
  HOME = 'HOME',
  CABINET = 'CABINET',
  COMPETENCES = 'COMPETENCES',
  HONORAIRES = 'HONORAIRES',
  CONTACT = 'CONTACT'
}

export interface NavItem {
  label: string;
  page: Page;
}

export interface ExpertiseItem {
  title: string;
  description: string;
  icon: React.ReactNode;
}