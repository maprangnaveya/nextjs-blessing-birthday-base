

import { BlessingData } from "@/app/lib/definitions";
import { getDateText } from "@/app/lib/utils";

export const Card = ({ name, blessing, submittedAt }: BlessingData) => {
  return (
    <div className="w-full rounded-lg p-2 hover:cursor-pointer hover:bg-purple-100 hover:text-zinc-800">
      <div className="flex flex-col">
        <h3 className="truncate text-xl font-medium">{name}</h3>
        <p className="truncate text-sm">{blessing}</p>
        <p className="truncate text-sm">{getDateText(submittedAt)}</p>
      </div>
    </div>
  );
};
