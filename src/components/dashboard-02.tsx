import MobileSheet from "./mobileSheet";
import DesktopSidebar from "./desktopSidebar";

const Dashboard = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="grid min-h-screen dark:bg-black/95 dark:text-white w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <MobileSheet />
      <div className="flex flex-col">
        <DesktopSidebar />
        <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
