import { Sun } from "lucide-react";
import { Badge } from "../ui/badge";

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const date = new Date();
let am_pm = date.toLocaleTimeString();
export function Header() {
  return (
    <>
      <header className="text-center mt-3">
        <h1 className="font-medium text-[33px]">
          Good Morning,<span className="text-black"> Praveen</span>
        </h1>
        <p className=" mt-1 text-slate-500 font-normal tracking-normal leading-[100%]">
          It's {days[date.getDay()]}, {months[date.getMonth()]} {date.getDate()}
          , {date.getFullYear()} at {am_pm}
        </p>
      <Badge variant={"secondary"} className="p-3 pt-2 pb-2 mt-3 rounded-3xl text-blue-500 bg-blue-300/25"><Sun/>28 &deg; C</Badge>
      </header>
    </>
  );
}
