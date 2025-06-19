import  { useContext } from "react";
import { AuthContext } from "./AuthContext";

const Dashboard = () => {
  const { logout, currentUser } = useContext(AuthContext);

  return (
    <div style={{ padding: 20 }}>
      <h2>Welcome, {currentUser?.email}</h2>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Dashboard;
