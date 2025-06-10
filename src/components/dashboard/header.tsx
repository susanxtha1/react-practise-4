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
      <header className="text-center">
        <h1>
          Good Morning,<span>Praveen</span>
        </h1>
        <p>
          It's {days[date.getDay()]}, {months[date.getMonth()]} {date.getDate()}
          , {date.getFullYear()} at {am_pm}
        </p>
      <Badge variant={"secondary"} className="p-2 pt-1 pb-1 rounded-3xl text-blue-500 bg-blue-300"><Sun/>28 &deg; C</Badge>
      </header>
    </>
  );
}
