import { getAllBlessings } from '@/app/lib/action-sheet';
import { lusitana } from '@/app/ui/fonts';


export default async function Page() {
  const data = await getAllBlessings();

  console.log("!!!! data: ", data);

  return (
    <main>
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Blessings
      </h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
       <h2>View blessings</h2>
      </div>

    </main>
  );
}
