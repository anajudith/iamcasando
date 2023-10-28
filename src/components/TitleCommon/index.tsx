import React from "react";
import { IProps } from "./TitleCommon.structure";

export default function TitleCommon({ title, className }: IProps) {
  return <span className={`text-4xl  ${className}`}>{title}</span>;
}
