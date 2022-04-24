import Head from "next/head";
import Link from "next/dist/client/link";
import dingdong from '../styles/style.module.css';

export default function Home() {
  return (
    <>
      <Head>
        <title>max werner | IDA</title>
        <meta name="description" content="Exercises and projects within the IDA module of this semester" />
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <h1 className="font-bold h-9 pt-1.5 pl-1.5">max werner | IDA</h1>
      <div className="mt-4 flex flex-col text-center space-y-2">
        <p className="cursor-pointer line-through">&nbsp;&nbsp;project&nbsp;&nbsp;</p>
        <Link href="/process">-process-</Link>
{/*         <p className={dingdong.coloredtext}>sometext</p>
 */}
      </div>
    </>
  );
}
