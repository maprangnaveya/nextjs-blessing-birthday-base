import Link from 'next/link';
import Image from 'next/image'

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-2 gap-y-4 items-center justify-center text-center text-white">
      <Image
        src="/images/zentail_post.png"
        width={500}
        height={50}
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
          src="/images/p1_button.png"
          width={300}
          height={50}
          alt="zentail post button to access messages page"
          priority
        />
      </Link>
      <p className="text-2xl">บริการรับฝากข้อความ<br />ข้ามดวงดาว</p>
    </main>
  );
}
