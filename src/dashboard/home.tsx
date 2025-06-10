import { Header } from "@/components/dashboard/header";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Smartphone } from "lucide-react";

export function Home() {
  return (
    <>
      <div className="w-full h-full ml-0 mt-5 mr-5 rounded-2xl bg-white">
        <Header />
        <div className="container mt-6">
          <div className="grid  grid-flow-col grid-4 ml-7 gap-4">
            <div className="bg-amber-200">
              <Card  className="w-full max-w-sm">
                <CardTitle className="flex justify-between">
                  2 <Smartphone />
                </CardTitle>
                <CardContent>Active mobile</CardContent>
              </Card>
            </div>
            <div className="bg-amber-400">ss</div>
            <div className="bg-amber-500">ss</div>
            <div className="bg-amber-700">ss</div>
          </div>
        </div>
      </div>
    </>
  );
}
