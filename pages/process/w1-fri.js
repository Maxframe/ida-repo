import NavigationProcessDay from "../../components/NavigationProcessDay";

export default function ProcessDay(props) {

  const data = [
    {
      day: "Monday",
      link: "day1",
      color: "emerald"
    },
    {
      day: "Tuesday",
      link: "day2",
      color: "red"
    }
  ];
  const listItems = data.map((loc, index) => (
    <li className="writing-mode-vertical-rl text-6xl whitespace-nowrap origin-top-left -rotate-45" key={index}>
      {loc}
    </li>  
    ));
  return (
    <>
      <NavigationProcessDay title={"Week 1 | Friday"} />
      <div className="pt-12 space-y-4">
       
        <div className="block w-fit">
          <a
            className="relative inline-block group focus:outline-none focus:ring"
            href="#day2"
          >
            <span className="absolute inset-0 transition translate-x-0 translate-y-0 bg-emerald-700 group-hover:translate-y-1.5 group-hover:translate-x-1.5 group-hover:bg-emerald-500"></span>

            <span className="relative inline-block px-8 py-3 text-sm font-bold tracking-widest uppercase border-2 border-current">
              Monday
            </span>
          </a>
        </div>
        <div className="block w-fit">
          <a
            className="relative inline-block group focus:outline-none focus:ring"
            href="#day2"
          >
            <span className="absolute inset-0 transition translate-x-0 translate-y-0 bg-emerald-700 group-hover:translate-y-1.5 group-hover:translate-x-1.5 group-hover:bg-emerald-500"></span>

            <span className="relative inline-block px-8 py-3 text-sm font-bold tracking-widest uppercase border-2 border-current">
              Tuesday
            </span>
          </a>
        </div>


      </div>

      <div id="day1">
        <p>something about this day</p>
      </div>
      <div id="day2">
        <p>something about this day</p>
      </div>
      <div id="day3">
        <p>something about this day</p>
      </div>
      <div id="day4">
        <p>something about this day</p>
      </div>
      <div id="day5">
        <p>something about this day</p>
      </div>
      <div id="day6">
        <p>something about this day</p>
      </div>
      <div id="day7">
        <p>something about this day</p>
      </div>
    </>
  );
}
