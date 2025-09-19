import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useThemeColors } from "../../hooks/useThemeColors";

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const colors = useThemeColors();

  const isFormValid = email && password;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isFormValid) {
      setError("Email and password are required");
      return;
    }
    setError("");
    // Simulate login
    alert(`Logged in as ${email}`);
  };

  return (
    <form onSubmit={handleSubmit} className="mx-auto flex flex-col justify-between" style={{
      width: 'clamp(300px, 28.9vw, 499px)',
      height: 'clamp(400px, 54.1vh, 604px)',
      maxWidth: '499px',
      maxHeight: '604px',
      padding: '20px'
    }}>
      <h2 
        className="font-neue-montreal font-normal mb-1"
        style={{
          fontSize: 'clamp(20px, 2.1vw, 28px)',
          lineHeight: '1.2',
          fontWeight: 400,
          color: colors.textPrimary
        }}
      >
        Login to your account
      </h2>
      <p 
        className="font-neue-montreal font-medium mb-4"
        style={{
          fontSize: 'clamp(12px, 0.9vw, 14px)',
          lineHeight: '1.4',
          letterSpacing: '0.5%',
          fontWeight: 500,
          color: colors.textSecondary
        }}
      >
        Enter your email below to create your account
      </p>

      {/* Social Login Buttons - Responsive sizing */}
      <div className="flex gap-2 mb-3 flex-col sm:flex-row">
        <button 
          type="button" 
          className="flex items-center justify-center gap-2 rounded-sm border font-neue-montreal font-medium transition"
          style={{ 
            width: '100%',
            height: 'clamp(32px, 2.9vh, 36px)',
            padding: '8px 12px',
            boxShadow: '0px 1px 2px 0px #0000001A',
            fontSize: 'clamp(11px, 0.8vw, 13px)',
            backgroundColor: colors.socialButtonBackground,
            borderColor: colors.socialButtonBorder,
            color: colors.socialButtonText
          }}
        >
          <img 
            src={colors.iconColor === '#ffffff' ? "/images/gitdark.svg" : "/images/git.svg"} 
            alt="GitHub" 
            className="h-4 w-4" 
          />
          Sign in with GitHub
        </button>
        <button 
          type="button" 
          className="flex items-center justify-center gap-2 rounded-sm border font-neue-montreal font-medium transition"
          style={{ 
            width: '100%',
            height: 'clamp(32px, 2.9vh, 36px)',
            padding: '8px 12px',
            boxShadow: '0px 1px 2px 0px #0000001A',
            fontSize: 'clamp(11px, 0.8vw, 13px)',
            backgroundColor: colors.socialButtonBackground,
            borderColor: colors.socialButtonBorder,
            color: colors.socialButtonText
          }}
        >
          <img src="/images/google.svg" alt="Google" className="h-4 w-4" />
          Sign in with Google
        </button>
      </div>

      {/* Divider */}
      <div className="flex items-center my-3">
        <div 
          className="flex-1 h-px" 
          style={{ backgroundColor: colors.orContinueLine }}
        />
        <span 
          className="mx-3 font-neue-montreal font-normal"
          style={{
            fontSize: 'clamp(10px, 0.7vw, 12px)',
            fontWeight: 400,
            lineHeight: '100%',
            color: colors.orContinueText
          }}
        >
          Or continue with
        </span>
        <div 
          className="flex-1 h-px" 
          style={{ backgroundColor: colors.orContinueLine }}
        />
      </div>

      {/* Form Fields */}
      <div className="space-y-3 mb-4">
        <div>
          <label 
            className="block font-neue-montreal mb-1"
            style={{
              fontSize: 'clamp(11px, 0.8vw, 13px)',
              lineHeight: '1.3',
              fontWeight: 400,
              color: colors.textLabel
            }}
          >
            Email Address
          </label>
          <div className="relative">
            <span className="absolute left-2 top-1/2 -translate-y-1/2">
              <img 
                src="/images/sms.svg" 
                alt="Email" 
                className="h-3 w-3"
                style={{ 
                  filter: colors.iconColor === '#ffffff' ? 'brightness(0) invert(1) brightness(1.2)' : 'none',
                  opacity: colors.iconColor === '#ffffff' ? 1 : 0.6 
                }}
              />
            </span>
            <Input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              className="w-full pl-7 pr-2 py-1.5 border rounded-sm text-xs"
              style={{ 
                backgroundColor: colors.inputBackground,
                borderColor: colors.inputBorder,
                boxShadow: colors.inputShadow,
                fontSize: 'clamp(11px, 0.8vw, 13px)',
                color: colors.inputText
              }}
            />
          </div>
        </div>
        
        <div>
          <div className="flex justify-between items-center mb-1">
            <label 
              className="block font-neue-montreal"
              style={{
                fontSize: 'clamp(11px, 0.8vw, 13px)',
                lineHeight: '1.3',
                fontWeight: 400,
                color: colors.textLabel
              }}
            >
              Password
            </label>
            <Link 
              to="/forgot-password"
              className="font-neue-montreal hover:underline"
              style={{
                fontSize: 'clamp(10px, 0.7vw, 12px)',
                fontWeight: 400,
                color: colors.textLabel
              }}
            >
              Forgot password?
            </Link>
          </div>
          <div className="relative">
            <span className="absolute left-2 top-1/2 -translate-y-1/2">
              <img 
                src="/images/lock.svg" 
                alt="Password" 
                className="h-3 w-3"
                style={{ 
                  filter: colors.iconColor === '#ffffff' ? 'brightness(0) invert(1) brightness(1.2)' : 'none',
                  opacity: colors.iconColor === '#ffffff' ? 1 : 0.6 
                }}
              />
            </span>
            <Input
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              className="w-full pl-7 pr-7 py-1.5 border rounded-sm text-xs"
              style={{ 
                backgroundColor: colors.inputBackground,
                borderColor: colors.inputBorder,
                boxShadow: colors.inputShadow,
                fontSize: 'clamp(11px, 0.8vw, 13px)',
                color: colors.inputText
              }}
            />
          </div>
        </div>
      </div>
      {error && <div className="text-red-500 text-sm mb-4">{error}</div>}
      
      <Button 
        type="submit" 
        variant="secondary"
        disabled={!isFormValid}
        className="w-full rounded-sm font-neue-montreal font-bold text-white transition-colors"
        style={{
          backgroundColor: isFormValid ? colors.buttonPrimary : colors.buttonSecondary,
          cursor: isFormValid ? 'pointer' : 'not-allowed',
          height: 'clamp(32px, 2.9vh, 36px)',
          fontSize: 'clamp(12px, 0.9vw, 14px)',
          lineHeight: '1.2',
          fontWeight: 700
        }}
      >
        Login
      </Button>
      
      <div className="text-center mt-3">
        <span 
          className="font-neue-montreal"
          style={{
            fontSize: 'clamp(12px, 0.9vw, 14px)',
            fontWeight: 400,
            lineHeight: '100%',
            color: colors.textFooter
          }}
        >
          Don't have an account?{" "}
        </span>
        <Link 
          to="/register"
          className="font-neue-montreal hover:underline"
          style={{
            fontSize: 'clamp(12px, 0.9vw, 14px)',
            fontWeight: 400,
            lineHeight: '100%',
            color: colors.linkPrimary
          }}
        >
          Sign-up
        </Link>
      </div>
    </form>
  );
};

export default LoginForm;