import { getAllBlessings } from '@/app/lib/action-sheet';
import { lusitana } from '@/app/ui/fonts';

import { Card } from './blessing-card';


export default async function BlessingList({ data }: { data: any[][] | null | undefined }) {

    return (
        <div className="flex w-full flex-row items-start justify-between gap-6">
            {data?.map((row, index: number) => {
                return (
                    <Card key={`blessing-card-${index}-${row[0]}`} name={row[1]} blessing={row[2]} submittedAt={row[0]} />
                )
            })}
        </div>
    );
}
