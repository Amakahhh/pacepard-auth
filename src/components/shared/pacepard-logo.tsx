import React from "react";
import { useAppStore } from "@/store/app/app.store";

type PacepardLogoProps = React.ImgHTMLAttributes<HTMLImageElement>;

export const PacepardLogo: React.FC<Omit<PacepardLogoProps, "src" | "alt">> = (props) => {
  const resolvedTheme = useAppStore((s) => s.resolvedTheme);

  const logoSrc =
    resolvedTheme === "dark"
      ? "/blocks/pacepard-logo.svg"
      : "/blocks/pacepard-logo.svg"

  return (
    <img
      src={logoSrc}
      alt="Pacepard Logo"
      width={100}
      height={100}
      {...props}
    />
  );
};
