import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useThemeColors } from "../../hooks/useThemeColors";

const SignupForm: React.FC = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [emailError, setEmailError] = useState("");
  const colors = useThemeColors();

  const isFormValid = firstName && lastName && email && password && !emailError;

  // Password strength calculation
  const calculatePasswordStrength = (password: string) => {
    if (!password) return { strength: 0, label: "", color: "", remainingRequirements: [] };
    
    const checks = {
      length: password.length >= 8,
      lowercase: /[a-z]/.test(password),
      uppercase: /[A-Z]/.test(password),
      number: /\d/.test(password),
      special: /[!@#$%^&*(),.?":{}|<>]/.test(password)
    };

    const score = Object.values(checks).filter(Boolean).length;
    
    // Create remaining requirements list
    const requirements = [
      { key: 'length', text: 'At least 8 characters', met: checks.length },
      { key: 'lowercase', text: 'One lowercase letter', met: checks.lowercase },
      { key: 'uppercase', text: 'One uppercase letter', met: checks.uppercase },
      { key: 'number', text: 'One number', met: checks.number },
      { key: 'special', text: 'One special character', met: checks.special }
    ];
    
    const remainingRequirements = requirements.filter(req => !req.met);

    if (score === 0) return { strength: 0, label: "Poor", color: "", remainingRequirements };
    if (score === 1) return { strength: 0, label: "Poor", color: "", remainingRequirements };
    if (score === 2) return { strength: 33, label: "Weak", color: "#ef4444", remainingRequirements };
    if (score === 3) return { strength: 66, label: "Fair", color: "#eab308", remainingRequirements };
    if (score === 4) return { strength: 80, label: "Good", color: "#1D79FF", remainingRequirements };
    return { strength: 100, label: "Strong", color: "#16a34a", remainingRequirements: [] };
  };

  const passwordStrength = calculatePasswordStrength(password);

  // Email validation function - ready for backend integration
  const validateEmail = async (email: string) => {
    if (!email) {
      setEmailError("");
      return;
    }

    // TODO: Replace with actual backend API call
    // const response = await fetch('/api/check-email', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({ email })
    // });
    // const data = await response.json();
    // setEmailError(data.exists ? "Email already exists" : "");

    // Simulate email validation for demo
    const existingEmails = ['test@example.com', 'demo@pacepard.com', 'admin@pacepard.com'];
    if (existingEmails.includes(email.toLowerCase())) {
      setEmailError("Email already exists");
    } else {
      setEmailError("");
    }
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    
    // Clear previous errors
    setEmailError("");
    setError("");
    
    // Validate email (with debounce for better UX)
    const timeoutId = setTimeout(() => {
      validateEmail(newEmail);
    }, 500);
    
    return () => clearTimeout(timeoutId);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isFormValid) {
      setError("All fields are required");
      return;
    }
    if (emailError) {
      setError("Please fix the email error");
      return;
    }
    setError("");
    // Simulate signup
    alert(`Account created for ${firstName} ${lastName} (${email})`);
  };

  return (
    <form onSubmit={handleSubmit} className="mx-auto flex flex-col" style={{
      width: 'clamp(300px, 28.9vw, 499px)',
      maxWidth: '499px',
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
          Create your account
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
          Enter your information below to create your account
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
          Sign up with GitHub
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
          Sign up with Google
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
        {/* First Name and Last Name Side by Side */}
        <div className="flex gap-2">
          <div className="flex-1">
            <label 
              className="block font-neue-montreal mb-1"
              style={{
                fontSize: 'clamp(11px, 0.8vw, 13px)',
                lineHeight: '1.3',
                fontWeight: 400,
                color: colors.textLabel
              }}
            >
              First Name
            </label>
            <div className="relative">
              <span className="absolute left-2 top-1/2 -translate-y-1/2">
                <img 
                  src="/images/user.svg" 
                  alt="User" 
                  className="h-3 w-3"
                  style={{ 
                    filter: colors.iconColor === '#ffffff' ? 'brightness(0) invert(1) brightness(1.2)' : 'none',
                    opacity: colors.iconColor === '#ffffff' ? 1 : 0.6
                  }}
                />
              </span>
              <Input
                type="text"
                value={firstName}
                onChange={e => setFirstName(e.target.value)}
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

          <div className="flex-1">
            <label 
              className="block font-neue-montreal mb-1"
              style={{
                fontSize: 'clamp(11px, 0.8vw, 13px)',
                lineHeight: '1.3',
                fontWeight: 400,
                color: colors.textLabel
              }}
            >
              Last Name
            </label>
            <div className="relative">
              <span className="absolute left-2 top-1/2 -translate-y-1/2">
                <img 
                  src="/images/user.svg" 
                  alt="User" 
                  className="h-3 w-3"
                  style={{ 
                    filter: colors.iconColor === '#ffffff' ? 'brightness(0) invert(1) brightness(1.2)' : 'none',
                    opacity: colors.iconColor === '#ffffff' ? 1 : 0.6
                  }}
                />
              </span>
              <Input
                type="text"
                value={lastName}
                onChange={e => setLastName(e.target.value)}
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
        </div>

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
                  opacity: 0.6 
                }}
              />
            </span>
            <Input
              type="email"
              value={email}
              onChange={handleEmailChange}
              className={`w-full pl-7 pr-2 py-1.5 border rounded-sm text-xs ${
                emailError ? 'border-red-500' : ''
              }`}
              style={{ 
                backgroundColor: colors.inputBackground,
                borderColor: emailError ? '#ef4444' : colors.inputBorder,
                color: colors.inputText,
                boxShadow: colors.inputShadow,
                fontSize: 'clamp(11px, 0.8vw, 13px)'
              }}
            />
          </div>
          {emailError && (
            <div className="text-red-500 text-sm mt-1">
              {emailError}
            </div>
          )}
        </div>
        
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
            Password
          </label>
          <div className="relative">
            <span className="absolute left-2 top-1/2 -translate-y-1/2">
              <img 
                src="/images/lock.svg" 
                alt="Password" 
                className="h-3 w-3"
                style={{ 
                  filter: colors.iconColor === '#ffffff' ? 'brightness(0) invert(1) brightness(1.2)' : 'none',
                  opacity: 0.6 
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
          
          {/* Password Strength Indicator */}
          {password && (
            <div className="mt-2">
              <div className="flex items-center gap-2 mb-1">
                <div className="flex-1 h-1 bg-gray-200 rounded-full overflow-hidden">
                  <div 
                    className="h-full transition-all duration-1000 ease-in-out rounded-full"
                    style={{
                      width: `${passwordStrength.strength}%`,
                      backgroundColor: passwordStrength.color
                    }}
                  />
                </div>
                {passwordStrength.label && (
                  <span 
                    className="font-neue-montreal font-medium"
                    style={{
                      fontSize: 'clamp(10px, 0.7vw, 12px)',
                      color: passwordStrength.color,
                      fontWeight: 500
                    }}
                  >
                    {passwordStrength.label}
                  </span>
                )}
              </div>
              
              {/* Password Requirements - Only show if not Strong */}
              {passwordStrength.remainingRequirements.length > 0 && (
                <div className="mt-1">
                  <p 
                    className="font-neue-montreal text-[#848484] mb-1"
                    style={{
                      fontSize: 'clamp(9px, 0.6vw, 11px)',
                      fontWeight: 400,
                      lineHeight: '1.3'
                    }}
                  >
                    Password needs:
                  </p>
                  <ul className="space-y-0.5">
                    {passwordStrength.remainingRequirements.map((req, index) => (
                      <li key={index} className="font-neue-montreal text-xs text-[#848484]">
                        • {req.text}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}
        </div>

      </div>
      {error && <div className="text-red-500 text-sm mb-4">{error}</div>}
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
          Create Account
        </Button>
        
        <div className="text-center">
          <span 
            className="font-neue-montreal font-normal"
            style={{
              fontSize: 'clamp(10px, 0.7vw, 12px)',
              fontWeight: 400,
              lineHeight: '100%',
              color: colors.textFooter
            }}
          >
            Already have an account?{" "}
          </span>
          <Link 
            to="/login"
            className="font-neue-montreal font-medium text-[#1D79FF] hover:underline"
            style={{
              fontSize: 'clamp(10px, 0.7vw, 12px)',
              fontWeight: 500,
              lineHeight: '100%'
            }}
          >
            Login
          </Link>
        </div>
      </div>
    </form>
  );
};

export default SignupForm;
