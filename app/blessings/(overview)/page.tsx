import { getAllBlessings } from '@/app/lib/action-sheet';
import BlessingList from '@/app/ui/blessings/blessing-list';

export const revalidate = 600 // revalidate at most every 10 mins

export default async function Page() {
  const data = await getAllBlessings();

  console.log("!!!! data: ", data);
  return (
    <main>
      <BlessingList data={data} />
    </main>
  );
}
