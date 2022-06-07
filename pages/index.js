import Head from "next/head";
import Link from "next/dist/client/link";
import dingdong from "../styles/style.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>max werner | IDA</title>
        <meta
          name="description"
          content="Exercises and projects within the IDA module of this semester"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className="absolute font-bold h-9 pt-1.5 pl-1.5 select-none">max werner | IDA</h1>
      <div className="absolute w-screen h-screen flex items-center justify-center">
      <div className="flex flex-col text-center space-y-2 select-none">
        <a href="https://where-are-we-heading-today.netlify.app/" target="_blank" rel="noreferrer">----workshop----</a>
        <a href="https://recapmymusic.netlify.app/" target="_blank" rel="noreferrer">----project----</a>
        <Link href="/process">----process----</Link>
      </div>
      </div>
    </>
  );
}
