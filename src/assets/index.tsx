import React from "react";

import { IIconProps, IIcons } from "./icons.structure";
import ChevronDownIcon from "./icons/ChevronDownIcon";
import ChevronUpIcon from "./icons/ChevronUpIcon";

/**
 * @description Component to render all svg icons
 * @example ````tsx
 * <Icons name= ChevronDownIcon size={20} color="#000" />
 * ````
 *
 *
 * @param size - size of icon
 * @param color - color of icon
 * @param name - name of icon
 */

export default function Icons({ color, onClick, size, name }: IIconProps) {
  const iconProps = {
    onClick,
    size,
    color,
  };

  const iconsHashmap: IIcons = {
    chevronDownIcon: <ChevronDownIcon {...iconProps} />,
    chevronUpIcon: <ChevronUpIcon {...iconProps} />,
  };

  return iconsHashmap[name] || null;
}
