import { useTheme } from '../contexts/ThemeContext';

export const useThemeColors = () => {
  const { isDark } = useTheme();

  return {
    // Background colors
    background: isDark ? '#000000' : '#ffffff',
    
    // Text colors - ALL WHITE in dark mode
    textPrimary: isDark ? '#ffffff' : '#100F14',
    textSecondary: isDark ? '#ffffff' : '#49475A',
    textMuted: isDark ? '#ffffff' : '#848484',
    textLabel: isDark ? '#ffffff' : '#9794AA',
    textFooter: isDark ? '#ffffff' : '#848484',
    
    // Button colors - Updated for dark mode
    buttonPrimary: isDark ? '#23234D' : '#030333', // Enabled button
    buttonSecondary: isDark ? '#BABADF' : '#5B5B88', // Disabled button
    buttonPrimaryHover: isDark ? '#23234D' : '#030333',
    
    // Input colors - Updated for dark mode
    inputBackground: isDark ? '#151515' : '#ffffff',
    inputBorder: isDark ? '#848484' : '#CBCAD7',
    inputText: isDark ? '#ffffff' : '#100F14',
    inputShadow: isDark ? '0px 2px 2px 0px #0000001A' : '0px 1px 2px 0px #0000001A',
    
    // Icon colors - WHITE in dark mode
    iconColor: isDark ? '#ffffff' : '#9794AA',
    
    // Link colors
    linkPrimary: '#1D79FF',
    linkSecondary: isDark ? '#ffffff' : '#100F14',
    
    // Social button colors - Updated for dark mode
    socialButtonBackground: isDark ? '#151515' : '#ffffff',
    socialButtonBorder: isDark ? '#848484' : '#CBCAD7',
    socialButtonText: isDark ? '#ffffff' : '#100F14',
    
    // Or continue with text and line - Updated for dark mode
    orContinueText: isDark ? '#C4C4C4' : '#848484',
    orContinueLine: isDark ? '#C4C4C4' : '#E5E5E5',
  };
};
