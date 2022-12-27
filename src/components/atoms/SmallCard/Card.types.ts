import { ReactNode } from 'react';

export type Variant = 'standard' | 'nft' | 'custom' | 'opacity';

export interface ICardProps {
  variant: Variant;
  icon?: string;
  heading?: string;
  body?: string;
  subtitle?: string;
  colors?: string[];
  children?: ReactNode;
}
