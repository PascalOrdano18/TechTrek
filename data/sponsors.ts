import { Sponsor } from '@/types/sponsors';

export const sponsors: Sponsor[] = [
  // Platinum Sponsors
  {
    id: 1,
    name: "Google",
    tier: "Platinum",
    website: "https://google.com",
    description: "Líder mundial en tecnología e innovación"
  },
  {
    id: 2,
    name: "Microsoft",
    tier: "Platinum",
    website: "https://microsoft.com",
    description: "Tecnología que empodera a cada persona y organización"
  },
  
  // Gold Sponsors
  {
    id: 3,
    name: "Mercado Libre",
    tier: "Gold",
    website: "https://mercadolibre.com",
    description: "Plataforma de e-commerce líder en América Latina"
  },
  {
    id: 4,
    name: "Globant",
    tier: "Gold",
    website: "https://globant.com",
    description: "Empresa de servicios de tecnología"
  },
  
  // Silver Sponsors
  {
    id: 5,
    name: "Auth0",
    tier: "Silver",
    website: "https://auth0.com",
    description: "Plataforma de identidad y autenticación"
  },
  {
    id: 6,
    name: "Despegar",
    tier: "Silver",
    website: "https://despegar.com",
    description: "Plataforma de viajes online"
  },
  {
    id: 7,
    name: "Ualá",
    tier: "Silver",
    website: "https://uala.com.ar",
    description: "Fintech argentina"
  },
  {
    id: 8,
    name: "PedidosYa",
    tier: "Silver",
    website: "https://pedidosya.com",
    description: "Plataforma de delivery"
  },
  
  // Nos acompañan
  {
    id: 9,
    name: "ITBA",
    tier: "Nos acompañan",
    website: "https://itba.edu.ar",
    description: "Instituto Tecnológico de Buenos Aires"
  },
  {
    id: 10,
    name: "Startup Buenos Aires",
    tier: "Nos acompañan",
    website: "https://startupbuenosaires.com",
    description: "Comunidad de startups"
  },
  {
    id: 11,
    name: "TechBA",
    tier: "Nos acompañan",
    website: "https://techba.org",
    description: "Programa de aceleración"
  },
  {
    id: 12,
    name: "Cafecito",
    tier: "Nos acompañan",
    website: "https://cafecito.app",
    description: "Plataforma de monetización"
  }
];

export const getSponsorsByTier = (tier: Sponsor['tier']) => {
  return sponsors.filter(sponsor => sponsor.tier === tier);
}; 