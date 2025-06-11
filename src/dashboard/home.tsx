import { Header } from "@/components/dashboard/header";
import { InfoCard } from "@/components/dashboard/info-card";
import { RoomDetail } from "@/components/dashboard/room-detail";
import { TableGrid } from "@/components/dashboard/table-grid";


export function Home() {
  return (
    <>
      <div className="w-full max-w-full h-full ml-0 mt-5 mr-5 rounded-2xl bg-white">
        <Header />
        <div className="mt-6">
          <InfoCard />
          <TableGrid/>
          <RoomDetail/>
          

           
        </div>
      </div>
    </>
  );
}
