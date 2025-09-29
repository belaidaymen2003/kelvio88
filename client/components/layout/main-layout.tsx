import { Outlet } from "react-router-dom";
import { SiteHeader } from "./site-header";
import { SiteFooter } from "./site-footer";

export const MainLayout = () => {
  return (
    <div className="relative flex min-h-screen flex-col overflow-hidden text-foreground">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-x-0 top-[-30%] mx-auto h-[600px] w-[min(1200px,90%)] rounded-full bg-hero blur-3xl opacity-40" />
        <div className="absolute left-[-20%] top-1/4 h-[420px] w-[420px] rounded-full bg-hero-radial" />
        <div className="absolute right-[-10%] top-[60%] h-[520px] w-[520px] rounded-full bg-hero-radial opacity-70" />
      </div>
      <SiteHeader />
      <main className="flex-1">
        <Outlet />
      </main>
      <SiteFooter />
    </div>
  );
};
