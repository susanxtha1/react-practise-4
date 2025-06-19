import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState, useContext } from "react";
import { useNavigate } from "react-router";
import { AuthContext } from "./authcontext";

export function LogIn() {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    const success = login(email, password);
    if (success) {
      navigate("/dashboard");
    }
  };

  return (
    <div>
      <h1>login</h1>
      <Input
        placeholder="Email"
        className=" mt-3 shadow-md w-2xs"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        placeholder="Password"
        className=" mt-3 shadow-md w-2xs"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button
        variant={"outline"}
        className="mt-2 px-5 ml-12"
        onClick={handleLogin}
      >
        Submit
      </Button>
    </div>
  );
}
