import Link from 'next/link';
import Image from 'next/image';

import buttonImage from '../public/images/p1_button_sm.png';
import zentailPostImage from '../public/images/zentail_post_sm.png';

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-2 gap-y-4 items-center justify-center text-center text-white">
      <Image
        src={zentailPostImage}
        width={500}
        height={270}
        alt="ZENTAIL POST"
        priority
      />

      <Link
        href="/blessings"
        className={
          "items-center justify-center gap-2 p-3 text-sm font-medium mt-8"

        }
      >
        <Image
          className="hover:brightness-125"
          src={buttonImage}
          width={300}
          height={59}
          alt="zentail post button to access messages page"
          priority
        />
      </Link>
      <p className="text-2xl">บริการรับฝากข้อความ<br />ข้ามดวงดาว</p>
    </main>
  );
}
