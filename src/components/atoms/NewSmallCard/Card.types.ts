import { ReactNode } from 'react';

export type Variant = 'standard' | 'nft' | 'nft2' | 'custom' | 'opacity';

export interface ICardProps {
  variant: Variant;
  icon?: string;
  heading?: string;
  body?: string;
  subtitle?: string;
  colors?: string[];
  colors2?: string[];
  children?: ReactNode;
}
