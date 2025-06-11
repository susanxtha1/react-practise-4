import { Smartphone, Zap, Clock5, BellDot } from "lucide-react";
import { Card, CardContent, CardTitle } from "../ui/card";

const item = [
  { title: "28", icon: Smartphone, description: "Active device" },
  { title: "3.2 kwh", icon: Zap, description: "Energy Usage" },
  { title: "5", icon: Clock5, description: "Automation rules" },
  { title: "28", icon: BellDot, description: "Security alerts" },
];

export function InfoCard() {
  return (
    <>
      {" "}
      <div className=" grid  grid-flow-col grid-4 ml-4 ">
        {item.map((item) => (
          <div key={item.title} className="py-0 grid-cols-1 mr-3">
            <Card className="w-full flex  mt-4 py-0 gap-0 bg-gradient-to-r from-fuchsia-500 via-rose-500 to-amber-400 ">
              <CardTitle className="flex justify-between  font-bold text-2xl  text-white pt-3 pl-3 ">
                {item.title}
                <item.icon size={"30px"} className="mr-3 " />
              </CardTitle>
              <CardContent className="m-0 p-0 text-white font-medium text-sm mt-0 pb-5 pl-3">
                {item.description}
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </>
  );
}
