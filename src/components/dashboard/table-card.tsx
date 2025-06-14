import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useEffect, useState } from "react";

const item1 = [
  { rule: "Morning Routine", trigger: "7:30 Am", action: "Open" },
  { rule: "leave for work", trigger: "Geofence Exit", action: "Trun off" },
  { rule: "Return Home", trigger: "Geofence Enter", action: "Trun on" },
];
const item2 = [
  {
    time: "7:30 Am",
    event: "Motion Detected in Backyard",
    status: "Unresolved",
  },
  { time: "2:30 PM", event: "Front Door Opened", status: "Resolved" },
  { time: "7:15 PM", event: "Window Sensor Triggered", status: "Unresolved" },
];
interface Item1Type {
  rule: string;
  trigger: string;
  action: string;
  [key: string]: string;
}

interface Item2Type {
  time: string;
  event: string;
  status: string;
  [key: string]: string;
}

export function TableCard({ props }) {
  const check = props;
  const [item, setItem] = useState<Item1Type[] | Item2Type[]>([]);
  const [keys, setKeys] = useState<string[]>([]);
  useEffect(() => {
    if (check) {
      setItem(item1);
      setKeys(Object.keys(item1[0]));
    } else {
      setItem(item2);
      setKeys(Object.keys(item2[0]));
    }
  }, [check]);

  return (
    <>
      <Table className="">
        <TableHeader>
          <TableRow>
            {keys.map((item, index) => (
              <TableHead key={index} className="w-[100px] capitalize text-slate-500 font-medium">
                {item}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {item.map((item, index) => (
            <TableRow key={index}>
              {keys.map((key) => (
                <TableCell key={key}>{item[key]}</TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
}
