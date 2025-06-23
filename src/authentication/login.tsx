import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState, useContext } from "react";
import { NavLink, useNavigate } from "react-router";
import { AuthContext } from "./authcontext";

export function LogIn() {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    const success = login(email, password);
    if (success) {
      navigate("/dash");
    }
  };

  return (
    <div className="flex flex-col text-center  ">
      <div className="w-[375px] h-[270px] shadow-md mt-50 ml-50   ">
        <h1 className="font-bold font-sans text-2xl capitalize p-2 mt-3 ">login</h1>
        <span></span>
        <Input
          placeholder="Email"
          className=" shadow-md w-2xs ml-10 mt-3"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          placeholder="Password"
          className="  shadow-md w-2xs ml-10 mt-3"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          variant={"outline"}
          className=" bg-purple-400 text-white font-semibold pl-7 pr-7 mt-3"
          onClick={handleLogin}
        >
          Submit
        </Button>

      <p className="mt-3">Dont have an account? <NavLink to="/register" className="font-semibold ">Sign Up</NavLink> </p>
      </div>
    </div>
  );
}
