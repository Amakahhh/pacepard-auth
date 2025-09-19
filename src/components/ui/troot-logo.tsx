import React from "react";
import { useTheme } from "../../contexts/ThemeContext";

type TroottLogoProps = React.ImgHTMLAttributes<HTMLImageElement>;

export const TroottLogo: React.FC<Omit<TroottLogoProps, "src" | "alt">> = (props) => {
    const { isDark } = useTheme();

    const logoSrc = isDark
      ? "/images/assets/troott-icon.svg"
      : "/images/assets/troott-icon-dark.svg"
  
    return (
    <img
      src={logoSrc}
      alt="Troott Logo"
      width={100}
      height={100}
      {...props}
    />
  );
};
