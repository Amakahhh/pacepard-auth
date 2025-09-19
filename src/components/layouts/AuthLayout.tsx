import React from "react";
import { useTheme } from "../../contexts/ThemeContext";

interface AuthLayoutProps {
  children: React.ReactNode;
  hideImage?: boolean;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ children, hideImage = false }) => {
  const { isDark } = useTheme();
  return (
    <div className="min-h-screen flex relative">
      {/* Four Friends Image - Positioned on top of layout, only visible on md+ screens */}
      {!hideImage && (
        <div className="absolute inset-0 z-10 pointer-events-none hidden md:block">
        <img 
          src="/images/four-friends.png" 
          alt="Four Friends" 
          className="absolute"
          style={{
            width: '52vw',
            height: '75vh',
            objectFit: 'contain',
            bottom: '0vh',
            right: '48vw',
            transform: 'translateX(9vw)'
          }}
        />
        </div>
      )}

      {/* Left Side */}
      <div className="hidden md:flex flex-col justify-between w-1/2 bg-[#D3F8E1] relative z-0">
        {/* Logo - Responsive positioning */}
        <div className="absolute z-10" style={{
          top: 'clamp(-40px, -2.5vw, -20px)',
          left: '-110px'
        }}>
          <img 
            src="/images/pacepard-text-and-logo.png" 
            alt="Pacepard Logo" 
            className="w-[360px] h-[117px] md:w-[400px] md:h-[130px] lg:w-[440px] lg:h-[143px] object-contain"
          />
        </div>
        
        {/* Text - Responsive specifications: font-family: Neue Montreal, font-weight: 500, font-size: 42px, line-height: 100% */}
        <div className="absolute z-10" style={{
          top: 'clamp(80px, 8vw, 120px)',
          left: 'clamp(30px, 3vw, 49px)'
        }}>
          <h1 
            className="font-neue-montreal font-medium leading-[100%] text-[#030333]"
            style={{
              fontSize: 'clamp(28px, 2.5vw, 42px)',
              fontWeight: 500,
              lineHeight: '100%'
            }}
          >
            Develop your<br />
            technical work <span className="text-[#1D79FF]">skills</span>
          </h1>
        </div>
      </div>

      {/* Right Side - Form Container */}
      <div 
        className="flex flex-col justify-center w-full md:w-1/2 px-4 md:px-16 relative z-0"
        style={{
          backgroundColor: isDark ? '#000000' : '#ffffff'
        }}
      >
        {children}
        
        {/* Footer - Positioned at very bottom of screen */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
          <div 
            className="font-neue-montreal font-bold text-[#848484] text-center"
            style={{
              fontSize: 'clamp(10px, 0.7vw, 12px)',
              fontWeight: 300,
              lineHeight: '100%',
              letterSpacing: '0%'
            }}
          >
            © 2025 Pacepard | All rights reserved
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
