import NavigationProcessDay from "../../components/NavigationProcessDay";
import Image from "next/image";

export default function ProcessDay() {
  return (
    <>
      <NavigationProcessDay pageTitle={"Week 1 | Tuesday"} />
      <div className=" w-[700px] m-auto">
        <h1></h1>
        <p></p>
        <Image src={`/`} alt="" width="" height="" />
        <p></p>
      </div>
    </>
  );
}
