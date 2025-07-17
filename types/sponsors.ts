export type SponsorTier = 'Platinum' | 'Gold' | 'Silver' | 'Nos acompañan';

export interface Sponsor {
  id: number;
  name: string;
  tier: SponsorTier;
  logo?: string;
  website?: string;
  description?: string;
} 