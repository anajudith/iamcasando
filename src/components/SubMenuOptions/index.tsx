import Icons from "@/assets";
import React from "react";

import { IProps } from "./SubMenuOptions.structure";

export default function SidemenuButton({
  isActive = false,
  subMenus = [],
  label,
  // redirectTo,
  handleNavigation,
}: IProps) {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const node = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        node.current &&
        e.target instanceof Node &&
        !node.current.contains(e.target)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const renderSubmenus = React.useMemo(() => {
    return subMenus.map((subMenu) => {
      return (
        <div
          onClick={() => handleNavigation(subMenu.redirectTo)}
          key={subMenu.redirectTo}
          className="w-full flex justify-start text-start items-start p-3 gap-4"
        >
          <span className={`text-base font-semibold text-slate-700`}>
            {subMenu.label}
          </span>
        </div>
      );
    });
  }, [subMenus, handleNavigation]);

  return (
    <div ref={node} className="w-2/2 relative items-start select-none">
      <div className="h-[51px] flex justify-center items-center">
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="h-full  flex justify-start items-center transition-all relative gap-3  cursor-pointer"
        >
          <span className={`font-bold`}>{label}</span>
          {subMenus.length > 0 && (
            <div
              className={`transition-all duration-500 ${
                isOpen ? "rotate-180" : "rotate-0"
              }`}
            >
              <Icons
                name="chevronDownIcon"
                size={[20]}
                onClick={() => setIsOpen(!isOpen)}
              />
            </div>
          )}
        </div>
      </div>
      <div
        className={`fixed overflow-hidden ${
          isOpen
            ? "max-h-[1000px] transition-all duration-1000"
            : "max-h-0 transition-all duration-100"
        }`}
      >
        <div className="w-[150px] bg-slate-300 h-fit cursor-pointer">
          {renderSubmenus}
        </div>
      </div>
    </div>
  );
}
