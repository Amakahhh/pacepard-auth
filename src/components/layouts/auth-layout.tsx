import { PacepardLogo } from "@/components/shared/pacepard-logo";
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
    backgroundImage = "/placeholder.svg",
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
      {/* Left side: Image and other elements - Spans 6/10 columns */}
      <div className="relative hidden bg-muted lg:block lg:col-span-6">
        <img
          src={backgroundImage || "/placeholder.svg"}
          alt="Authentication background"
          className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
        />
        {showLogo && (
          <div className="absolute top-6 left-6 flex justify-center gap-2 md:justify-start">
            <a href="#" className="flex items-center gap-2 font-medium">
              <div className="flex h-6 w-6 items-center justify-center rounded-md bg-primary text-primary-foreground">
                <PacepardLogo className="size-4" />
              </div>
              troott
            </a>
          </div>
        )}
        {showCopyright && (
          <div className="absolute bottom-6 left-6 flex justify-start">
            <Copyright year={2025} company="troott" />
          </div>
        )}
      </div>

      {/* Right side: The main content section - Spans 4/10 columns */}
      <div className="flex flex-col gap-4 p-6 md:p-10 lg:col-span-4">
        {/* On smaller screens, show logo and copyright on the right side */}
        <div className="lg:hidden flex justify-between items-center w-full">
          {showLogo && (
            <div className="flex justify-center gap-2 md:justify-start">
              <a href="#" className="flex items-center gap-2 font-medium">
                <div className="flex h-6 w-6 items-center justify-center rounded-md bg-primary text-primary-foreground">
                  <PacepardLogo className="size-4" />
                </div>
                troott
              </a>
            </div>
          )}
          {showCopyright && (
            <div className="flex justify-start">
              <Copyright year={2025} company="troott" />
            </div>
          )}
        </div>

        <div className="flex flex-1 items-center justify-center">
          <div className={`w-full ${maxWidthClasses[maxWidth]}`}>
            {(title || description) && !hideHeaderOnSuccess && (
              <div className="flex flex-col items-center gap-2 text-center mb-6">
                {title && <h1 className="text-2xl font-bold">{title}</h1>}
                {description && <p className="text-balance text-sm text-muted-foreground">{description}</p>}
              </div>
            )}
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}