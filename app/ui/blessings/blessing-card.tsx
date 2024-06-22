import Image from 'next/image'

import { BlessingData } from "@/app/lib/definitions";
import bgCard from '../../../public/images/p2_letter.png';


export const Card = ({ name, blessing, submittedAt }: BlessingData) => {
  return (
    <div className="w-[450px] h-[380px] relative rounded-lg">
      <div className="relative pt-[8rem] pl-[4.5rem] pr-[4.5rem] pb-[0.25rem] flex flex-col word-break" style={{
        zIndex: '2'
      }}>
        <p className="text-sm h-[250px]">{blessing}</p>
        <h3 className="text-center text-base font-medium basis-1/5">{name}</h3>
        {/* <p className="truncate text-sm  basis-1/5">{submittedAt}</p> */}
      </div>
      <Image
        src={bgCard}
        placeholder="blur"
        alt="message card"
        priority
        fill
        sizes="(min-width: 808px) 50%, 100%"
        style={{
          objectFit: 'contain',
          zIndex: '0'
        }}
      />
    </div>
  );
};
