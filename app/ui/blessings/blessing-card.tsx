import Image from 'next/image'

import { BlessingData } from "@/app/lib/definitions";
import bgCard from '../../../public/images/p2_letter_sm.png';


export const Card = ({ name, blessing, submittedAt }: BlessingData) => {
  return (
    <div className="w-[350px] h-[283px] md:w-[450px] md:h-[383px]  relative rounded-lg bg-transparent">
      <div className="relative pt-[5rem] md:pt-[8rem] pl-[4.5rem] pr-[4.5rem] pb-[0.25rem] flex flex-col word-break" style={{
        zIndex: '2'
      }}>
        <p className="text-sm h-[158px] md:h-[203px] overflow-auto">{blessing}</p>
        <h3 className="pl-[80px] md:pl-[180px] text-start text-base font-medium basis-1/5 truncate">{name}</h3>
        {/* <p className="truncate text-sm  basis-1/5">{submittedAt}</p> */}
      </div>
      <Image
        src={bgCard}
        alt={`${blessing} from ${name}`}
        priority
        fill
        sizes="(min-width: 808px) 50%, 100%"
        style={{
          objectFit: 'contain',
          zIndex: '0',
          backgroundColor: 'transparent',
        }}
      />
    </div>
  );
};
