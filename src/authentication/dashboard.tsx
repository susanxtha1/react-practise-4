import React, { useContext } from "react";
import { AuthContext, type AuthContextType } from "./authcontext";

const Dash: React.FC = () => {
  const context = useContext(AuthContext) as AuthContextType;

  return (
    <div style={{ padding: 20 }}>
      <h2>Welcome, {context.currentUser?.email}</h2>
      <button onClick={context.logout}>Logout</button>
    </div>
  );
};

export default Dash;
