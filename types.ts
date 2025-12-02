import React from 'react';

export interface ServiceItem {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface GeneratedImageResult {
  imageUrl: string;
  prompt: string;
}

export interface ContactInfo {
  address: string;
  city: string;
  zip: string;
  email: string;
  website: string;
  phone?: string;
}