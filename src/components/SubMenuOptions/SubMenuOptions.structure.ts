import { MenuSubItem } from "@/utils/list";

export interface IProps {
  isActive?: boolean;
  subMenus?: MenuSubItem[];
  children?: JSX.Element;
  label: string;
  // redirectTo: string;
  handleNavigation: (route: string) => void;
}
