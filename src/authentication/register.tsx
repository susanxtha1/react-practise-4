import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useContext, useState } from "react";
import { useNavigate } from "react-router";
import { AuthContext } from "./authcontext";

export function Register() {
  const { signUp } = useContext(AuthContext);
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignup = () => {
    const success = signUp(email, password, confirmPassword, contact);
    if (success) {
      navigate("/login");
    }
  };

  return (
    <div>
      <h1 className="text-red-50">Register</h1>;
      <form action="">
        <Input
          placeholder="Email"
          className=" mt-3 shadow-md w-2xs"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          placeholder="Contact no"
          className=" mt-3 shadow-md w-2xs"
          value={contact}
          onChange={(e) => setContact(e.target.value)}
        />
        <Input
          placeholder="Password"
          className=" mt-3 shadow-md w-2xs"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Input
          placeholder="Confirm Password"
          className=" mt-3 shadow-md w-2xs"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <Button
          variant={"outline"}
          className="mt-2 px-5 ml-12"
          onClick={handleSignup}
        >
          Submit
        </Button>
        <p style={{ marginTop: "10px" }}>
          Already have an account? <a href="/login">Login</a>
        </p>
      </form>
    </div>
  );
}
