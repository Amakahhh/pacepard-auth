import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useThemeColors } from "../../hooks/useThemeColors";

interface CreateNewPasswordFormProps {
  onShowModal?: (show: boolean) => void;
}

const CreateNewPasswordForm: React.FC<CreateNewPasswordFormProps> = ({ onShowModal }) => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [showModal, setShowModal] = useState(false);
  const colors = useThemeColors();

  const isFormValid = password && confirmPassword && password === confirmPassword;

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isFormValid) {
      setError("All fields are required and passwords must match");
      return;
    }
    if (password.length < 8) {
      setError("Password must be at least 8 characters long");
      return;
    }
    setError("");
    // Show success modal
    setShowModal(true);
    onShowModal?.(true);
  };

  return (
    <>
      {/* Success Modal */}
      {showModal && (
        <div 
          className="fixed inset-0 flex items-center justify-center" 
          style={{ 
            zIndex: 99999,
            backgroundColor: 'rgba(0, 0, 0, 0.3)'
          }}
        >
          <div 
            className="rounded-lg p-8 max-w-md w-full mx-4 text-center relative overflow-hidden"
            style={{ backgroundColor: colors.background }}
          >
            {/* Confetti Animation */}
            <div className="absolute inset-0 pointer-events-none">
              {[...Array(12)].map((_, i) => (
                <div
                  key={i}
                  className={`absolute w-2 h-2 rounded-full ${
                    ['bg-yellow-400', 'bg-blue-500', 'bg-green-400', 'bg-red-400'][i % 4]
                  }`}
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 3}s`,
                    animationDuration: `${2 + Math.random() * 2}s`,
                    animation: 'bounce 2s ease-in-out infinite'
                  }}
                />
              ))}
            </div>
            
            {/* Success Message */}
            <h2 
              className="font-neue-montreal font-medium mb-6 relative z-10"
              style={{
                fontSize: 'clamp(18px, 2vw, 24px)',
                lineHeight: '1.2',
                fontWeight: 500,
                color: colors.textPrimary
              }}
            >
              Account Verified Successfully
            </h2>
            
            {/* Animated Success Icon */}
            <div className="relative mb-6 z-10">
              <div 
                className="w-20 h-20 mx-auto bg-green-100 rounded-full flex items-center justify-center"
                style={{
                  animation: 'pulse 3s ease-in-out infinite'
                }}
              >
                <div 
                  className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center"
                  style={{
                    animation: 'ping 2s ease-in-out infinite'
                  }}
                >
                  <svg 
                    className="w-10 h-10 text-white" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                    style={{
                      animation: 'bounce 2.5s ease-in-out infinite'
                    }}
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={3} 
                      d="M5 13l4 4L19 7" 
                    />
                  </svg>
                </div>
              </div>
            </div>
            
            {/* Action Buttons */}
            <div className="space-y-3 z-10 relative">
              <Link
                to="/login"
                className="block w-full text-white py-3 px-6 rounded-sm font-neue-montreal font-medium transition-colors"
                style={{
                  backgroundColor: colors.buttonPrimary,
                  fontSize: 'clamp(12px, 1.2vw, 16px)',
                  fontWeight: 500
                }}
                onClick={() => {
                  setShowModal(false);
                  onShowModal?.(false);
                }}
              >
                Continue to Login
              </Link>
              
              <button
                onClick={() => {
                  setShowModal(false);
                  onShowModal?.(false);
                }}
                className="block w-full py-2 px-6 font-neue-montreal font-medium transition-colors"
                style={{
                  fontSize: 'clamp(11px, 1vw, 14px)',
                  fontWeight: 400,
                  color: colors.textMuted
                }}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="mx-auto flex flex-col justify-between" style={{
        width: 'clamp(300px, 28.9vw, 499px)',
        height: 'clamp(400px, 54.1vh, 604px)',
        maxWidth: '499px',
        maxHeight: '604px',
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
          Create new password
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
          Enter new password to continue using Pacepard
        </p>

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
              New Password
            </label>
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
                  color: colors.inputText,
                  boxShadow: colors.inputShadow,
                  fontSize: 'clamp(11px, 0.8vw, 13px)'
                }}
              />
            </div>
            
            {/* Password Strength Indicator */}
            {password && (
              <div className="mt-2">
                <div className="flex items-center gap-2 mb-1">
                  <div 
                    className="flex-1 h-1 rounded-full overflow-hidden"
                    style={{ backgroundColor: colors.textMuted + '30' }}
                  >
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
                      className="font-neue-montreal mb-1"
                      style={{
                        fontSize: 'clamp(9px, 0.6vw, 11px)',
                        fontWeight: 400,
                        lineHeight: '1.3',
                        color: colors.textMuted
                      }}
                    >
                      Password needs:
                    </p>
                    <ul className="space-y-0.5">
                      {passwordStrength.remainingRequirements.map((req, index) => (
                        <li key={index} className="font-neue-montreal text-xs" style={{ color: colors.textMuted }}>
                          • {req.text}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
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
              Confirm New Password
            </label>
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
                value={confirmPassword}
                onChange={e => setConfirmPassword(e.target.value)}
                className="w-full pl-7 pr-7 py-1.5 border rounded-sm text-xs"
                style={{ 
                  backgroundColor: colors.inputBackground,
                  borderColor: confirmPassword && password !== confirmPassword ? '#ef4444' : colors.inputBorder,
                  color: colors.inputText,
                  boxShadow: colors.inputShadow,
                  fontSize: 'clamp(11px, 0.8vw, 13px)'
                }}
              />
              {/* Password Match Indicator */}
              {confirmPassword && password && (
                <div className="absolute right-2 top-1/2 -translate-y-1/2">
                  {password === confirmPassword ? (
                    <svg className="h-4 w-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  ) : (
                    <svg className="h-4 w-4 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  )}
                </div>
              )}
            </div>
            {/* Password Match Message */}
            {confirmPassword && password !== confirmPassword && (
              <div className="mt-1">
                <p className="font-neue-montreal text-red-500 text-xs">
                  Passwords do not match
                </p>
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
          Update Password
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
    </form>
    </>
  );
};

export default CreateNewPasswordForm;
