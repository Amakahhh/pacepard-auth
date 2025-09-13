import { AuthLayout } from "@/components/layouts/auth-layout";
import RegisterForm from "@/components/shared/auth/register-form";

const Register = () => {
  return (
    <>
    <AuthLayout
      title="Create your Pacepard account"
      description="Enter your information below to create your account"
      maxWidth="sm"
    >
      <RegisterForm />
    </AuthLayout>
    </>
  );
};

export default Register;
