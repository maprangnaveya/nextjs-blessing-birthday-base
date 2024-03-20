import BlessingList from '@/app/ui/blessings/blessing-list';
import { lusitana } from '@/app/ui/fonts';

export const revalidate = 600 // revalidate at most every 10 mins

export default async function Page() {

  return (
    <main>
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Blessings
      </h1>
      <div className="">
        <h2>View blessings</h2>
        <BlessingList />
      </div>

    </main>
  );
}
