import NavigationProcessDay from "../../components/NavigationProcessDay";
import Image from "next/image";

export default function ProcessDay(props) {

  const data = [
    {
      day: "Monday",
      link: "day1",
    },
    {
      day: "Tuesday",
      link: "day2",
    },
    {
      day: "Wednesday",
      link: "day3",
    },
    {
      day: "Thursday",
      link: "day4",
    },
    {
      day: "Friday",
      link: "day5",
    },
  ];
  const dayNavigation = data.map((weekday, index) => (
    <div className="  block group w-32" key={index}>
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
    <div className=" block group w-32" key={index}>
        <span className={`absolute  bg-yellow-700 `}></span>

        <span className="relative inline-block py-3 text-sm font-bold tracking-widest uppercase border-2 border-current w-32">
          {weekday.day}
        </span>
    </div>
  ));

  return (
    <>
      <NavigationProcessDay title={"Week 1 | Friday"} />
      <div className="pt-12 flex">
        <div className="fixed space-y-4">
          {dayNavigation}
        </div>
        <div className="ml-64 space-y-4">
          {dayContent}
          <Image src="/../../public/img/wi-fri-weekdays/1_monday.jpg" width="300px" layout="fill"/>   
          
        </div>

      </div>


    </>
  );
}
