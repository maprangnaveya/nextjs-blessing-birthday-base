import BlessingList from '@/app/ui/blessings/blessing-list';
import { lusitana } from '@/app/ui/fonts';


export default async function Page() {

  return (
    <main>
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Blessings
      </h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
       <h2>View blessings</h2>
       <BlessingList />
      </div>

    </main>
  );
}
