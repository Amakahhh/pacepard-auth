import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useThemeColors } from "../../hooks/useThemeColors";

const OTPForm: React.FC = () => {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [error, setError] = useState("");
  const colors = useThemeColors();

  const handleOtpChange = (index: number, value: string) => {
    if (value.length <= 1) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
      
      // Auto-focus next input
      if (value && index < 5) {
        const nextInput = document.getElementById(`otp-${index + 1}`);
        nextInput?.focus();
      }
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      const prevInput = document.getElementById(`otp-${index - 1}`);
      prevInput?.focus();
    }
  };

  const isFormValid = otp.every(digit => digit !== "");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isFormValid) {
      setError("Please enter all digits");
      return;
    }
    setError("");
    // Simulate OTP verification
    alert(`OTP verified: ${otp.join('')}`);
  };

  const handleResend = () => {
    setOtp(["", "", "", "", "", ""]);
    setError("");
    // Simulate resend
    alert("OTP resent to your email");
  };

  return (
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
          Verify your email
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
          Enter the 6-digit code sent to your email address
        </p>

        {/* OTP Input Fields */}
        <div className="flex gap-2 justify-center mb-6">
          {otp.map((digit, index) => (
            <Input
              key={index}
              id={`otp-${index}`}
              type="text"
              inputMode="numeric"
              maxLength={1}
              value={digit}
              onChange={(e) => handleOtpChange(index, e.target.value)}
              onKeyDown={(e) => handleKeyDown(index, e)}
              className="w-12 h-12 text-center border rounded-sm text-lg font-semibold"
              style={{ 
                backgroundColor: colors.inputBackground,
                borderColor: colors.inputBorder,
                color: colors.inputText,
                boxShadow: colors.inputShadow,
                fontSize: '18px'
              }}
            />
          ))}
        </div>

        {error && <div className="text-red-500 text-sm mb-4 text-center">{error}</div>}

        <div className="text-center mb-6">
          <span 
            className="font-neue-montreal font-normal"
            style={{
              fontSize: 'clamp(10px, 0.7vw, 12px)',
              fontWeight: 400,
              lineHeight: '100%',
              color: colors.textMuted
            }}
          >
            Didn't receive the code?{" "}
          </span>
          <button
            type="button"
            onClick={handleResend}
            className="font-neue-montreal font-medium hover:underline"
            style={{
              fontSize: 'clamp(10px, 0.7vw, 12px)',
              fontWeight: 500,
              lineHeight: '100%',
              color: colors.linkPrimary
            }}
          >
            Resend
          </button>
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
          Verify Code
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
  );
};

export default OTPForm;
