import { useState } from "react";
import AuthLayout from "../components/layouts/AuthLayout";
import CreateNewPasswordForm from "../components/forms/CreateNewPasswordForm";

const CreateNewPassword = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <AuthLayout hideImage={showModal}>
      <CreateNewPasswordForm onShowModal={setShowModal} />
    </AuthLayout>
  );
};

export default CreateNewPassword;
