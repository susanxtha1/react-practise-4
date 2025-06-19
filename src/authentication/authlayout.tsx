import { Outlet } from "react-router";

export function AuthLayout() {
  return (
    <>
      <div className="bg-white">
        <h1>authenticaton</h1>
        <Outlet />
      </div>
    </>
  );
}
