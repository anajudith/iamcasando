import React from "react";
import { GoChevronDown } from "react-icons/go";
import { IProps } from "../icons.structure";

export default function ChevronDownIcon({
  color = "#1e293b",
  onClick,
  size = [14, 14],
}: IProps) {
  return <GoChevronDown onClick={onClick} size={size} color={color} />;
}
