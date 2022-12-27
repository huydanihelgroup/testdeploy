import { ReactNode } from 'react';

export type Variant = 'standard' | 'banner' | 'custom';

export interface IBannerCardProps {
  variant: Variant;
  icon?: string;
  heading?: string;
  body?: string;
  subtitle?: string;
  colors?: string[];
  children?: ReactNode;
}
