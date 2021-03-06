import Link from "next/dist/client/link";

export default function NavigationProcess() {
  return (
    <div className="absolute flex gap-4 z-50">
      <Link href="/">
      <svg className="mt-1 h-8 w-8 text-white cursor-pointer"  width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <polyline points="11 7 6 12 11 17" />  <polyline points="17 7 12 12 17 17" /></svg>
      </Link>
      <h1 className="font-bold mt-1.5">My Process</h1>
    </div>
  );
}
