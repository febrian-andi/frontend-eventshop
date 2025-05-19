import AuthLayout from "@/components/layouts/AuthLayout";
import Login from "@/components/views/Auth/Login";

const LoginPage = () => {
  return (
    <AuthLayout title="EventShop | Login">
      <Login />
    </AuthLayout>
  );
};

export default LoginPage;
