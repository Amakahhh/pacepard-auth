import { PacepardLogo } from "@/components/shared/pacepard-logo";
import ThemeToggle from "@/components/shared/theme-toggle";
import { Copyright } from "@/components/ui/copyright";
import type { IAuthLayout } from "@/utils/interfaces.util";

export function AuthLayout(data: IAuthLayout) {
  const {
    children,
    title,
    description,
    showLogo = true,
    showCopyright = true,
    maxWidth = "xs",
    backgroundImage = "/images/four-friends.png",
    className = "",
    hideHeaderOnSuccess = false,
  } = data;

  const maxWidthClasses = {
    xs: "max-w-xs",
    sm: "max-w-sm",
    md: "max-w-md",
    lg: "max-w-lg",
  };

  return (
    <div className={`grid min-h-svh lg:grid-cols-10 ${className}`}>
      {/* Left side: Image section (modern look) */}
      <div className="relative hidden lg:col-span-6 lg:flex">
        <img
          src={backgroundImage}
          alt="Auth background"
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Logo + copyright inside the image section */}
        {showLogo && (
          <div className="absolute top-6 left-6 flex items-center gap-2 font-medium text-white">
            <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary text-primary-foreground">
              <PacepardLogo className="size-5" />
              <ThemeToggle/>
            </div>
            Pacepard
          </div>
        )}
        {showCopyright && (
          <div className="absolute bottom-6 left-6 text-white">
            <Copyright year={2025} company="troott" />
          </div>
        )}
      </div>

      {/* Right side: The main content section */}
      <div className="flex flex-col gap-4 p-6 md:p-10 lg:col-span-4">
        {/* On smaller screens, show logo and copyright above form */}
        <div className="lg:hidden flex justify-between items-center w-full">
          {showLogo && (
            <div className="flex items-center gap-2 font-medium">
              <div className="flex h-6 w-6 items-center justify-center rounded-md bg-primary text-primary-foreground">
                <PacepardLogo className="size-4" />
              </div>
              troott
            </div>
          )}
          {showCopyright && (
            <div className="flex justify-start">
              <Copyright year={2025} company="troott" />
            </div>
          )}
        </div>

        {/* Form content */}
        <div className="flex flex-1 items-center justify-center">
          <div className={`w-full ${maxWidthClasses[maxWidth]}`}>
            {(title || description) && !hideHeaderOnSuccess && (
              <div className="flex flex-col items-center gap-2 text-center mb-6">
                {title && <h1 className="text-2xl font-bold">{title}</h1>}
                {description && (
                  <p className="text-balance text-sm text-muted-foreground">
                    {description}
                  </p>
                )}
              </div>
            )}
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
