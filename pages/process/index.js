import { Fragment } from "react";
import Link from "next/link";
import NavigationProcess from "../../components/NavigationProcess";

export default function ProcessPage() {
  return (
    <Fragment>
        <NavigationProcess />
      <ul>
        <li>
          <Link href="/process/w1-tue">Week 1 | Tuesday</Link>
        </li>
      </ul>
    </Fragment>
  );
}
