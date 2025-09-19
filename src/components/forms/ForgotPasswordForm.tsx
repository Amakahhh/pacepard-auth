import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useThemeColors } from "../../hooks/useThemeColors";

const ForgotPasswordForm: React.FC = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const colors = useThemeColors();

  const isFormValid = email;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isFormValid) {
      setError("Email address is required");
      return;
    }
    setError("");
    setIsSubmitted(true);
    // Simulate password reset
    alert(`Password reset link sent to ${email}`);
  };

  if (isSubmitted) {
    return (
      <div className="mx-auto flex flex-col justify-between text-center" style={{
        width: 'clamp(300px, 28.9vw, 499px)',
        height: 'clamp(300px, 40vh, 400px)',
        maxWidth: '499px',
        maxHeight: '400px',
        padding: '20px'
      }}>
        <div>
          <div className="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
            <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 
            className="font-neue-montreal font-normal mb-2"
            style={{
              fontSize: 'clamp(20px, 2.1vw, 28px)',
              lineHeight: '1.2',
              fontWeight: 400,
              color: colors.textPrimary
            }}
          >
            Check your email
          </h2>
          <p 
            className="font-neue-montreal font-medium"
            style={{
              fontSize: 'clamp(12px, 0.9vw, 14px)',
              lineHeight: '1.4',
              letterSpacing: '0.5%',
              fontWeight: 500,
              color: colors.textSecondary
            }}
          >
            We've sent a password reset link to <br />
            <span className="font-semibold">{email}</span>
          </p>
        </div>

        <div className="space-y-3">
          <Button 
            type="button"
            onClick={() => setIsSubmitted(false)}
            className="w-full rounded-sm font-neue-montreal font-bold text-white transition-colors"
            style={{
              backgroundColor: colors.buttonPrimary,
              height: 'clamp(32px, 2.9vh, 36px)',
              fontSize: 'clamp(12px, 0.9vw, 14px)',
              lineHeight: '1.2',
              fontWeight: 700
            }}
          >
            Resend Email
          </Button>
          
          <div className="text-center">
            <Link
              to="/login"
              className="font-neue-montreal hover:underline"
              style={{
                fontSize: 'clamp(10px, 0.7vw, 12px)',
                fontWeight: 400,
                lineHeight: '100%',
                color: colors.textMuted
              }}
            >
              Back to Login
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="mx-auto flex flex-col justify-between" style={{
      width: 'clamp(300px, 28.9vw, 499px)',
      height: 'clamp(300px, 40vh, 400px)',
      maxWidth: '499px',
      maxHeight: '400px',
      padding: '20px'
    }}>
      <div>
        <h2 
          className="font-neue-montreal font-normal mb-1"
          style={{
            fontSize: 'clamp(20px, 2.1vw, 28px)',
            lineHeight: '1.2',
            fontWeight: 400,
            color: colors.textPrimary
          }}
        >
          Forgot your password?
        </h2>
        <p 
          className="font-neue-montreal font-medium mb-6"
          style={{
            fontSize: 'clamp(12px, 0.9vw, 14px)',
            lineHeight: '1.4',
            letterSpacing: '0.5%',
            fontWeight: 500,
            color: colors.textSecondary
          }}
        >
          Enter your email and we'll send you a verification code
        </p>

        {/* Email Field */}
        <div className="mb-4">
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
                color: colors.inputText,
                boxShadow: colors.inputShadow,
                fontSize: 'clamp(11px, 0.8vw, 13px)'
              }}
            />
          </div>
          {error && <div className="text-red-500 text-sm mt-1">{error}</div>}
        </div>
      </div>
      
      <div className="space-y-3">
        <Button 
          type="submit" 
          variant="secondary"
          disabled={!isFormValid}
          className="w-full rounded-sm font-neue-montreal font-bold text-white transition-colors"
          style={{
            backgroundColor: isFormValid ? colors.buttonPrimary : colors.buttonSecondary,
            height: 'clamp(32px, 2.9vh, 36px)',
            fontSize: 'clamp(12px, 0.9vw, 14px)',
            lineHeight: '1.2',
            fontWeight: 700,
            cursor: isFormValid ? 'pointer' : 'not-allowed'
          }}
        >
          Request OTP
        </Button>
        
        <div className="text-center">
          <span 
            className="font-neue-montreal"
            style={{
              fontSize: 'clamp(10px, 0.7vw, 12px)',
              fontWeight: 400,
              lineHeight: '100%',
              color: colors.textMuted
            }}
          >
            Remember your password?{" "}
          </span>
          <Link
            to="/login"
            className="font-neue-montreal hover:underline"
            style={{
              fontSize: 'clamp(10px, 0.7vw, 12px)',
              fontWeight: 400,
              lineHeight: '100%',
              color: colors.linkPrimary
            }}
          >
            Back to Login
          </Link>
        </div>
      </div>
    </form>
  );
};

export default ForgotPasswordForm;
