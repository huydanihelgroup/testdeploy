export type Theme = 'dark' | 'light';
export type Variant = 'standard' | 'filled' | 'outlined';

export interface IAutoCompleteProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  darkmode?: boolean;
  variant: Variant;
  hasError?: boolean;
  helperText?: string;
  optionProps?: OptionsRowProps[];
}
export interface OptionsRowProps {
  value: string;
  label: string;
}
