import { AppSidebar } from "@/components/layout/AppSidebar";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen bg-gray-950">
      <AppSidebar />
      <main className="flex-1 overflow-y-auto">
        <div className="mx-auto max-w-6xl p-8">{children}</div>
      </main>
    </div>
  );
}
