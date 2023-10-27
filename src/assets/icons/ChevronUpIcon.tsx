import React from "react";
import { GoChevronDown, GoChevronUp } from "react-icons/go";

import { IProps } from "../icons.structure";

export default function ChevronUpIcon({
  color = "#1e293b",
  onClick,
  size = [14, 14],
}: IProps) {
  return <GoChevronUp onClick={onClick} size={size} color={color} />;
}
