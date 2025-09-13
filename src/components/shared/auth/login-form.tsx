import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import type { IForm } from "@/utils/interfaces.util";
import { Eye, EyeOff, Loader2, LockIcon, Mail } from "lucide-react";
import { useLoginStore } from "@/store/auth/login-store";
import { usePasswordUtils } from "@/hooks/app/useValidaton";
import { useAuth } from "@/hooks/useAuth";
import { OAuthButtons } from "@/components/shared/auth/oauth-buttons";

const LoginForm = (data: IForm) => {
  const { className, ...props } = data;

  const {
    formData,
    errors,
    touched,
    showPassword,
    passwordStrength,
    setField,
    setTouched,
    setErrors,
    togglePassword,
    setPasswordStrength,
  } = useLoginStore();

  const { validateEmail, validatePassword, calculateStrength } =
    usePasswordUtils();
  const { loginMutation } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Mark all fields as touched
    setTouched("email");
    setTouched("password");

    const newErrors: any = {};
    const emailErr = validateEmail(formData.email);
    const passErr = validatePassword(formData.password);

    if (emailErr) newErrors.email = emailErr;
    if (passErr) newErrors.password = passErr;

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      await loginMutation.mutate(formData);
    }
  };

  return (
    <>
      <form
        className={cn("flex flex-col gap-6 text-left", className)} // Added text-left
        onSubmit={handleSubmit}
        {...props}
      >
        {/* OAuth Buttons and separator on Top */}
        <div className="grid gap-4">
          <OAuthButtons formType="login"/>
        </div>

        {/*  Login Form */}
        <div className="grid gap-6">
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                value={formData.email}
                onChange={(e) => setField("email", e.target.value)}
                onBlur={() => {
                  setTouched("email");
                  const err = validateEmail(formData.email);
                  if (err) setErrors({ ...errors, email: err });
                }}
                className={cn(
                  "pl-9",
                  "pr-10",
                  "h-12",
                  "focus-visible:ring-2",
                  "focus-visible:ring-primary",
                  "focus-visible:outline-none",
                  errors.email &&
                    touched.email &&
                    "border-destructive focus-visible:ring-destructive"
                )}
                aria-invalid={errors.email && touched.email ? "true" : "false"}
                aria-describedby={
                  errors.email && touched.email ? "email-error" : undefined
                }
              />
            </div>
            {errors.email && touched.email && (
              <p
                id="email-error"
                className="text-sm text-destructive"
                role="alert"
              >
                {errors.email}
              </p>
            )}
          </div>

          <div className="grid gap-2">
            <div className="flex items-center">
              <Label htmlFor="password">Password</Label>
              <a
                href="/forgot-password"
                className="ml-auto text-sm underline-offset-4 hover:underline"
              >
                Forgot your password?
              </a>
            </div>

            <div className="relative">
              <LockIcon className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                value={formData.password}
                onChange={(e) => {
                  setField("password", e.target.value);
                  setPasswordStrength(calculateStrength(e.target.value));
                }}
                onBlur={() => {
                  setTouched("password");
                  const err = validatePassword(formData.password);
                  if (err) setErrors({ ...errors, password: err });
                }}
                className={cn(
                  "pl-9",
                  "pr-10",
                  "h-12",
                  errors.password &&
                    touched.password &&
                    "border-destructive focus-visible:ring-destructive"
                )}
                aria-invalid={
                  errors.password && touched.password ? "true" : "false"
                }
                aria-describedby={
                  errors.password && touched.password
                    ? "password-error"
                    : undefined
                }
              />

              <Button
                type="button"
                variant="ghost"
                size="sm"
                className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                onClick={togglePassword}
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? (
                  <EyeOff className="h-4 w-4 text-muted-foreground" />
                ) : (
                  <Eye className="h-4 w-4 text-muted-foreground" />
                )}
              </Button>
            </div>

            {/* Password Strength Indicator */}
            {formData.password && (
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                    <div
                      className={cn(
                        "h-full transition-all duration-300 rounded-full",
                        passwordStrength.score === 0 && "w-0",
                        passwordStrength.score === 1 && "w-1/5 bg-red-500",
                        passwordStrength.score === 2 && "w-2/5 bg-orange-500",
                        passwordStrength.score === 3 && "w-3/5 bg-yellow-500",
                        passwordStrength.score === 4 && "w-4/5 bg-blue-500",
                        passwordStrength.score === 5 && "w-full bg-green-500"
                      )}
                    />
                  </div>
                  <span
                    className={cn(
                      "text-xs font-medium",
                      passwordStrength.score <= 1 && "text-red-500",
                      passwordStrength.score === 2 && "text-orange-500",
                      passwordStrength.score === 3 && "text-yellow-600",
                      passwordStrength.score === 4 && "text-blue-500",
                      passwordStrength.score === 5 && "text-green-500"
                    )}
                  >
                    {passwordStrength.label}
                  </span>
                </div>

                {passwordStrength.feedback.length > 0 && (
                  <div className="text-xs text-muted-foreground">
                    <p className="mb-1">Password needs:</p>
                    <ul className="list-disc list-inside space-y-0.5">
                      {passwordStrength.feedback.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}

            {errors.password && touched.password && (
              <p
                id="password-error"
                className="text-sm text-destructive"
                role="alert"
              >
                {errors.password}
              </p>
            )}
          </div>
        </div>

        <Button
          type="submit"
          className="w-full h-12"
          disabled={loginMutation.isPending}
        >
          {loginMutation.isPending ? (
            <>
              <Loader2 className="animate-spin h-5 w-5 mr-2" />
              Signing in...
            </>
          ) : (
            "Login"
          )}
        </Button>
        <div className="text-center text-sm">
          Don&apos;t have an account?{" "}
          <a href="/register" className="underline underline-offset-4">
            Sign up
          </a>
        </div>
      </form>
    </>
  );
};

export default LoginForm;
