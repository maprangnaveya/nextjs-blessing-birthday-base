import SideNav from '@/app/ui/dashboard/sidenav';
import Navbar from '../ui/navbar';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col md:overflow-hidden w-full">
      <div className="w-[48px] h-[48px] flex-row-reverse justify-end">
        <Navbar />
      </div>
      {children}
    </div>
  );
}
