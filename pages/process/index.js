import Link from "next/link";
import Head from "next/head";
import NavigationProcess from "../../components/NavigationProcess";


export default function ProcessPage() {
  return (
    <>
      <Head>
        <title>max werner | process</title>
      </Head>
      <NavigationProcess />
      <div className="flex flex-wrap max-w-md m-auto justify-between gap-12 mt-4 select-none">
        <ul className="mx-6">
          <li>-------------------</li>
          <li>
            <Link href="/process/w1-tue">Week 1 | Tuesday</Link>
          </li>
          <li>-------------------</li>
          <li>
            <Link href="/process/w1-thu">Week 1 | Thursday</Link>
          </li>
          <li>
            <Link href="/process/w1-fri">Week 1 | Friday</Link>
          </li>
        </ul>
        <ul className="mx-6">
          <li>------------ru-----</li>
          <Link href="/process/w2-tue">Week 2 | Tuesday</Link>
          <li>-------------------</li>
          <li>-------------------</li>
          <li>-------------------</li>
        </ul>
        <ul className="mx-6">
          <li>-------------------</li>
          <li>-------------------</li>
          <li>-------------------</li>
          <li>-------------------</li>
          <li>-------------------</li>
        </ul>
        <ul className="mx-6">
          <li>-------------------</li>
          <li>-------------------</li>
          <li>-------------------</li>
          <li>--n----------------</li>
          <li>-------------------</li>
        </ul>
        <ul className="mx-6">
          <li>-------------------</li>
          <li>---------d---------</li>
          <li>-------------------</li>
          <li>-------------------</li>
          <li>-------------------</li>
        </ul>
        <ul className="mx-6">
          <li>-------------------</li>
          <li>-------------------</li>
          <li>-------------------</li>
          <li>-------------------</li>
          <li>-------------------</li>
        </ul>
        <ul className="mx-6">
          <li>------------------x</li>
          <li>-------------------</li>
          <li>---r---------------</li>
          <li>-------------------</li>
          <li>-------------------</li>
        </ul>
        <ul className="mx-6">
          <li>-------------------</li>
          <li>-------------------</li>
          <li>----__-------------</li>
          <li>-------------------</li>
          <li>-------------------</li>
        </ul>
      </div>
    </>
  );
}
