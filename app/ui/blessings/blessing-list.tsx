import { getAllBlessings } from '@/app/lib/action-sheet';
import { lusitana } from '@/app/ui/fonts';

import { Card } from './blessing-card';


export default async function BlessingList() {
    const data = await getAllBlessings();

    console.log("!!!! data: ", data);

    return (
        <div className="flex w-full flex-col items-start justify-start gap-6">
            {data?.map((row, index: number) => {
                return (
                    <Card key={`blessing-card-${index}-${row[0]}`} name={row[1]} blessing={row[2]} submittedAt={row[0]} />
                )
            })}
        </div>
    );
}
