import { Form } from '@/app/ui/blessings/blessing-form';
import { lusitana } from '@/app/ui/fonts';


export default async function Page() {
  return (
    <main>
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Send a Blessing
      </h1>
      <div className="">
        <Form />
      </div>

    </main>
  );
}
