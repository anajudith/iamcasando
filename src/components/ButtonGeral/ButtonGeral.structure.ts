export interface IProps {
  type: "button" | "submit" | "reset";
  title: string;
  onClick?: () => void;
  disabled?: boolean;
}
