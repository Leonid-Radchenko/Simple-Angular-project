export interface ButtonConfig {
  label: string;
  color?: 'primary' | 'secondary' | 'success' | 'danger';
  className?: string;
  icon?: string;
  disabled?: boolean;
}