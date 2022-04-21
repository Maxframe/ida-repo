import { Fragment } from "react";
import Link from "next/link";

export default function ProcessPage() {
    return <Fragment>
        <h1 className="font-bold">My Process</h1>
        <li><Link href="/process/w1-tue">Week 1 | Tuesday</Link></li>
        <ul>
             
        </ul>
    </Fragment>
  }