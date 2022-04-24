import NavigationProcessDay from "../../components/NavigationProcessDay";

export default function ProcessDay() {
  return (
    <>
      <div className="h-screen  bg-stone-800">
        <NavigationProcessDay pageTitle={"Week 1 | Thursday"} />

        <div className="relative m-auto w-[800px] h-64 pt-32 pb-4">
          <div
            className="
          absolute w-8 h-24 border-2 -translate-x-1/2 left-[6.25%]
          before:absolute before:-top-3 before:w-4 before:left-1/2 before:-translate-x-1/2 before:h-3 before:border-2"
          >
            <p className="absolute -top-12 left-1/2 -translate-x-1/2">8:30</p>
            <div className="relative flex flex-col-reverse w-full h-full">
              <div className="h-[25%] w-full bg-slate-500"></div>
            </div>
          </div>
          <div
            className="
          absolute w-8 h-24 border-2 -translate-x-1/2 left-[12.5%]
          before:absolute before:-top-3 before:w-4 before:left-1/2 before:-translate-x-1/2 before:h-3 before:border-2"
          >
            <p className="absolute -top-12 left-1/2 -translate-x-1/2">9:00</p>
            <div className="relative flex flex-col-reverse w-full h-full">
              <div className="h-[25%] w-full bg-slate-700"></div>
            </div>
          </div>
          <div
            className="
          absolute w-8 h-24 border-2 -translate-x-1/2 left-[18.75%]
          before:absolute before:-top-3 before:w-4 before:left-1/2 before:-translate-x-1/2 before:h-3 before:border-2"
          >
            <p className="absolute -top-12 left-1/2 -translate-x-1/2">9:30</p>
            <div className="relative flex flex-col-reverse w-full h-full">
              <div className="h-[75%] w-full bg-slate-500"></div>
              <div className="h-[25%] w-full bg-slate-700"></div>
            </div>
          </div>
          <div
            className="
          absolute w-8 h-24 border-2 -translate-x-1/2 left-[37.5%]
          before:absolute before:-top-3 before:w-4 before:left-1/2 before:-translate-x-1/2 before:h-3 before:border-2"
          >
            <p className="absolute -top-12 left-1/2 -translate-x-1/2">11:00</p>
            <div className="relative flex flex-col-reverse w-full h-full">
              <div className="h-[25%] w-full bg-slate-500"></div>
              <div className="h-[50%] w-full bg-slate-700"></div>
            </div>
          </div>
          <div
            className="
          absolute w-8 h-24 border-2 -translate-x-1/2 left-[43.75%]
          before:absolute before:-top-3 before:w-4 before:left-1/2 before:-translate-x-1/2 before:h-3 before:border-2"
          >
            <p className="absolute -top-12 left-1/2 -translate-x-1/2">11:30</p>
            <div className="relative flex flex-col-reverse w-full h-full">
              <div className="h-[25%] w-full bg-slate-700"></div>
            </div>
          </div>
          <div
            className="
          absolute w-8 h-24 border-2 -translate-x-1/2 left-[62.5%]
          before:absolute before:-top-3 before:w-4 before:left-1/2 before:-translate-x-1/2 before:h-3 before:border-2"
          >
            <p className="absolute -top-12 left-1/2 -translate-x-1/2">13:00</p>
            <div className="relative flex flex-col-reverse w-full h-full">
              <div className="h-[100%] w-full bg-slate-500"></div>
            </div>
          </div>
          <div
            className="
          absolute w-8 h-24 border-2 -translate-x-1/2 left-[68.75%] 
          before:absolute before:-top-3 before:w-4 before:left-1/2 before:-translate-x-1/2 before:h-3 before:border-2"
          >
            <p className="absolute -top-12 left-1/2 -translate-x-1/2">13:30</p>
            <div className="relative flex flex-col-reverse w-full h-full">
              <div className="h-[50%] w-full bg-slate-500"></div>
              <div className="h-[50%] w-full bg-slate-700"></div>
            </div>
          </div>
          <div
            className="
          absolute w-8 h-24 border-2 -translate-x-1/2 left-[81.25%]
          before:absolute before:-top-3 before:w-4 before:left-1/2 before:-translate-x-1/2 before:h-3 before:border-2"
          >
            <p className="absolute -top-12 left-1/2 -translate-x-1/2">14:30</p>
            <div className="relative flex flex-col-reverse w-full h-full">
              <div className="h-[100%] w-full bg-slate-500"></div>
            </div>
          </div>
          <div
            className="
          absolute w-8 h-24 border-2 -translate-x-1/2 left-[87.5%]
          before:absolute before:-top-3 before:w-4 before:left-1/2 before:-translate-x-1/2 before:h-3 before:border-2"
          >
            <p className="absolute -top-12 left-1/2 -translate-x-1/2">15:00</p>
            <div className="relative flex flex-col-reverse w-full h-full">
              <div className="h-[75%] w-full bg-slate-500"></div>
              <div className="h-[25%] w-full bg-slate-700"></div>
            </div>
          </div>
          <div
            className="
          absolute w-8 h-24 border-2 -translate-x-1/2 left-[100%]
          before:absolute before:-top-3 before:w-4 before:left-1/2 before:-translate-x-1/2 before:h-3 before:border-2"
          >
            <p className="absolute -top-12 left-1/2 -translate-x-1/2">16:00</p>
            <div className="relative flex flex-col-reverse w-full h-full">
              <div className="h-[25%] w-full bg-slate-500"></div>
              <div className="h-[25%] w-full bg-slate-700"></div>
            </div>
          </div>
        </div>
        <div className="relative m-auto w-[800px] bg-slate-100 h-0.5">
          <div className="absolute left-0">
            <div className="absolute h-5 w-0.5 bg-slate-100"></div>
            <p className="absolute top-4 -translate-x-1/2">8:00</p>
          </div>
          <div className="absolute left-1/2">
            <div className="absolute h-5 w-0.5 bg-slate-100"></div>
            <p className="absolute top-4 -translate-x-1/2">12:00</p>
          </div>
          <div className="absolute right-0">
            <div className="absolute h-5 w-0.5 bg-slate-100"></div>
            <p className="absolute top-4 -translate-x-1/2">16:00</p>
          </div>
        </div>
        <div className="text-center pt-32">
          <p className="text-5xl font-bold leading-snug">
            My{" "}
            <span className="cursor-pointer group relative text-slate-500 underline underline-offset-4">
              water
              <span className="
               hidden opacity-0  text-sm font-normal text-white w-48 text-center rounded-md px-5 py-1 absolute z-10 bg bg-stone-500 bg-opacity-60 bottom-[125%] left-1/2 -ml-24 transition-all
              after:absolute after:top-full after:left-1/2 after:-ml-1 after:border-8 after:border-transparent after:border-t-stone-500/[.60] group-hover:opacity-100 group-hover:visible
              ">
                I drank approximately 2.25 litres water using my 1L water bottle
              </span>
            </span>{" "}
            intake <br></br>
            during the day
          </p>
        </div>
      </div>
    </>
  );
}
