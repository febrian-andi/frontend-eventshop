import DashboardLayout from "@/components/layouts/DashboardLayout";
import Dashboard from "@/components/views/Admin/Dashboard";

const LoginPage = () => {
  return (
    <DashboardLayout title="Dashboard" description="Dashboard Admin" type="admin">
      <Dashboard />
    </DashboardLayout>
  );
};

export default LoginPage;
