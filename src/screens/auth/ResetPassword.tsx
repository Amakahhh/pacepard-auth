
import { AuthLayout } from "@/components/layouts/auth-layout";
import ResetPasswordForm from "@/components/shared/auth/reset-password";
import { useState } from "react";

const ResetPassword = () => {
  const [showSuccess, setShowSuccess] = useState(false);

  return (
    <>
      <AuthLayout
        title={showSuccess ? "" : "Reset your password"}
        description={showSuccess ? "" : "Enter your new password below"}
        hideHeaderOnSuccess={showSuccess}
      >
        <ResetPasswordForm onSuccess={() => setShowSuccess(true)} />
      </AuthLayout>
    </>
  );
};

export default ResetPassword;
