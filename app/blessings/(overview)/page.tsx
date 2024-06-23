import { getAllBlessings } from '@/app/lib/action-sheet';
// import BlessingList from '@/app/ui/blessings/blessing-list';
// import BlessingGridList from '@/app/ui/blessings/blessing-grid-slide';
import BlessingPagination from '@/app/ui/blessings/blessing-pagination';

export const revalidate = 600 // revalidate at most every 10 mins

export default async function Page() {
  const data = await getAllBlessings();

  // console.log("!!!! data: ", data);
  return (
    <main className="h-full relative">
      {/* <BlessingList data={data} />
       */}
      {/* <BlessingGridList data={data} /> */}
      <BlessingPagination data={data || []} />
    </main>
  );
}
