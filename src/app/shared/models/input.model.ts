export interface InputConfig {
  id: string;
  label?: string;
  showLabel: boolean;
  type: 'text' | 'email' | 'tel' | 'textarea' | 'password';
  placeholder?: string;
  required?: boolean;
  customClass?: string;
  rows?: number;
}