// guards
// components
import MainLayout from "./main";
import DashboardLayout from "./dashboard";
import LogoOnlyLayout from "./LogoOnlyLayout";
import GuestGuard from "@root/guards/GuestGuard";

// ----------------------------------------------------------------------

export default function Layout({
  variant = "dashboard",
  children,
  ...other
}: any) {
 

  if (variant === "logoOnly") {
    return <LogoOnlyLayout> {children} </LogoOnlyLayout>;
  }

  if (variant === "main") {
    return <MainLayout>{children}</MainLayout>;
  }

  return (
      <DashboardLayout {...other}> {children} </DashboardLayout>
  );
}
