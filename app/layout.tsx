import '@/app/ui/global.css';
import { rubik } from '@/app/ui/fonts';
import localFont from 'next/font/local'

// Font files can be colocated inside of `pages`
const mainFont = localFont({ src: '../public/fonts/pk-mukdahan-medium.otf' })


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (

    <html lang="en">
      <body
        className={`${mainFont.className} antialiased} flex min-h-screen select-none justify-center p-0 antialiased`}
      >
        <main className="main-content flex min-h-full w-full flex-col px-3 pb-3 lg:px-10 lg:pb-10  md:w-7/12">
          {children}
        </main>
      </body>
    </html>
  );
}
