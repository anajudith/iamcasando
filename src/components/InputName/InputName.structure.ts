export interface IProps {
  label: string;
  name: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  type: string;
  disabled?: boolean;
  className?: string;
}
