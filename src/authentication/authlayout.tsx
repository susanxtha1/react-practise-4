import { Outlet } from "react-router";


export function AuthLayout() {
  return (
    <>
      <div className="bg-white max-w-full h-max flex flex-row">
        <div className="w-[800px]   bg-emerald-500">
          <img src="" alt=""  />
        </div>
        <div className="w-full h-[700px] ">
          <Outlet />
        </div>
      </div>
    </>
  );
}
