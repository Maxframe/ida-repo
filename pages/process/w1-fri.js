import NavigationProcessDay from "../../components/NavigationProcessDay";
import Head from "next/head";
import Image from "next/image";

export default function ProcessDay(props) {

  const data = [
    {
      day: "Monday",
      link: "day1",
      image: "w1-fri-1",
    },
    {
      day: "Tuesday",
      link: "day2",
      image: "w1-fri-2",
    },
    {
      day: "Wednesday",
      link: "day3",
      image: "w1-fri-3",
    },
    {
      day: "Thursday",
      link: "day4",
      image: "w1-fri-4",
    },
    {
      day: "Friday",
      link: "day5",
      image: "w1-fri-5",
    },
    {
      day: "Saturday",
      link: "day6",
      image: "w1-fri-6",
    },
    {
      day: "Sunday",
      link: "day7",
      image: "w1-fri-7",
    },
  ];
  const dayNavigation = data.map((weekday, index) => (
    <div className="block group w-32" key={index}>
      <a
        className="relative inline-block focus:outline-none focus:ring w-32 text-center"
        href={`#${weekday.link}`}
      >
        <span className={`absolute inset-0 transition translate-x-0 translate-y-0 group-hover:translate-y-1.5 group-hover:translate-x-1.5 bg-yellow-700 group-hover:bg-yellow-500`}></span>

        <span className="relative inline-block py-3 text-sm font-bold tracking-widest uppercase border-2 border-current w-32">
          {weekday.day}
        </span>
      </a>
    </div>
  ));

  const dayContent = data.map((weekday, index) => (
    <div className=" block w-full -mt-8 pt-8" id={`${weekday.link}`} key={index}>
      <div className="border-2 border-current">
        <p className="relative block p-3 text-sm font-bold tracking-widest uppercase w-32">
          {weekday.day}
        </p>
        <div className="px-2 pb-2">
          <Image src={`/${weekday.image}.jpg`} alt="weekdays" width="800" height="800" />
        </div>
      </div>
    </div>
  ));

  return (
    <>
      <Head>
        <title>max werner | process</title>
      </Head>
      <NavigationProcessDay pageTitle={"Week 1 | Friday"} />

      <div className="py-16 px-8 flex">
        <div className="fixed space-y-4">
          {dayNavigation}
        </div>
        <div className="sm:ml-64 ml-48 space-y-4">
          {dayContent}
        </div>
      </div>
    </>
  );
}
