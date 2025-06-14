import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
} from "../ui/card";
import { Switch } from "../ui/switch";

const detail = [
  { light: true, temperature: "72f", device: 6, title: "Living Room" },
  { light: false, temperature: "68f", device: 4, title: "Bedroom" },
  { light: true, temperature: "70f", device: 5, title: "Kitchen" },
  { light: false, temperature: "71f", device: 3, title: "Office " },
  { light: true, temperature: "71f", device: 6, title: "Living room" },
];

export function RoomDetail() {
  return (
    <div className="w-auto grid grid-flow-col grid-cols-5 gap-2 mt-9 ml-2 mr-3  ">
      {detail.map((item) => (
        <Card key={item.title} className="p-4">
          <CardTitle className="font-sans font-semibold text-base leading-[100%] tracking-[-0.01em] align-middle">
            {item.title}
          </CardTitle>
          <CardDescription className="text-start px-0">
            <CardContent className="px-0 flex justify-between">
              Lights: <Switch checked={item.light} className="bg-orange-600" />
            </CardContent>
            <CardContent className="mt-2 px-0 flex justify-between">
              Temperature:<span>{item.temperature} </span>
            </CardContent>
            <CardContent className="mt-2 px-0 flex justify-between">
              Devices:<span>{item.device} </span>
            </CardContent>
          </CardDescription>
          <CardFooter className="items-start px-0">
            <Button
              variant={"outline"}
              className=" bg-white border-slate-300 pl-11 pr-11"
            >
              View Details
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
