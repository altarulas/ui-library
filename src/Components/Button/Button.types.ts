import React from "react";

export interface ButtonProps {
  label: string;
  size: "small" | "medium" | "large";
  rounded: "small" | "medium" | "large";
  borderColor?: string;
  backGroundColor?: string;
  hoverBackGroundColor?: string;
  children?: React.ReactNode;
}
