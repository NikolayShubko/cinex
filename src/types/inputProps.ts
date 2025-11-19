export interface InputProps {
  type: string;
  id: string;
  value?: string;
  label: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
  checked?: boolean;
}
