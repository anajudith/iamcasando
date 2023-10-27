import { IIcons } from "@/assets/icons.structure";

export type MenuSubItem = Pick<IPagesMenu, "label" | "redirectTo">;

interface IPagesMenu {
  label: string;
  redirectTo: string;
  iconName?: keyof IIcons;
  subItems?: MenuSubItem[];
}

export const headerMenus = [
  {
    label: "Páginas",
    redirectTo: "/",
    subItems: [
      {
        label: "Página inicial",
        redirectTo: "/pageInit",
      },
      {
        label: "Nossa história",
        redirectTo: "/ourHistory",
      },
      {
        label: "Mensagens",
        redirectTo: "/message",
      },
      {
        label: "Cerimônia",
        redirectTo: "/ceremony",
      },
      {
        label: "Sobre os padrinhos",
        redirectTo: "/aboutGodparents",
      },
    ],
  },
  {
    label: "Presentes",
    redirectTo: "/",
    subItems: [
      {
        label: "Lista de presentes",
        redirectTo: "/gifts",
      },
    ],
  },
  {
    label: "Confirmar presença",
    redirectTo: "/confirmPresence",
    subItems: [
      {
        label: "Casamento",
        redirectTo: "/confirmPresence",
      },
    ],
  },
  {
    label: "Language",
    redirectTo: "/about",
    subItems: [
      {
        label: "apenas teste",
        redirectTo: "/billet/generate",
      },
    ],
  },
] satisfies IPagesMenu[];
