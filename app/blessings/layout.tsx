import SideNav from '@/app/ui/dashboard/sidenav';
import Navbar from '../ui/navbar';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col md:overflow-hidden w-full">
      <div className="w-[48px] h-[48px] self-end pt-4">
        <Navbar />
      </div>
      {children}
    </div>
  );
}
