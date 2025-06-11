import { TableCard } from "@/components/dashboard/table-card";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardTitle } from "@/components/ui/card";

export function TableGrid() {
  return (
    <>
      <div className="grid grid-flow-col grid-3 gap-4 mt-9 ml">
        <Card className="ml-3">
          <CardTitle>Automation Rules</CardTitle>
          <TableCard props={true}></TableCard>
          <CardFooter className="flex flex-col gap-2">
            <Button
              variant={"outline"}
              className="pl-19 pr-19 bg-orange-50 border-orange-300 text-orange-600"
            >
              Add New Automation
            </Button>
            <Button
              variant={"outline"}
              className="pl-20.5 pr-20.5 bg-white text-slate-950 border-slate-300"
            >
              Good Night Routine
            </Button>
          </CardFooter>
        </Card>
        <Card>
          <CardTitle>Automation Rules</CardTitle>
          <TableCard props={false}></TableCard>
        </Card>
        <Card className="mr-3">
          <CardTitle>Automation Rules</CardTitle>
          <TableCard props={true}></TableCard>
          <CardFooter className="flex flex-col gap-2">
            <Button
              variant={"outline"}
              className="pl-19 pr-19 bg-orange-50 border-orange-300 text-orange-600"
            >
              Arm Security System
            </Button>

            <Button
              variant={"outline"}
              className="pl-19 pr-19 bg-white text-slate-950 border-slate-300"
            >
              Review Camera Feed
            </Button>
          </CardFooter>
        </Card>
      </div>
    </>
  );
}
