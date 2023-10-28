import React from "react";
import { IProps } from "./SubTitleCommon";

export default function SubTitleCommon({ subTitle, className }: IProps) {
  return (
    <span className={`font-semibold tracking-widest ${className}`}>
      {subTitle}
    </span>
  );
}
