import { createContext, useState, useEffect } from "react";
export interface AuthContextType {
  isLoggedIn: boolean;
  currentUser: any;
  loading: boolean;
  login: (email: string, password: string) => boolean;
  logout: () => void;
  signUp: (
    email: string,
    password: string,
    confirmPassword: string,
    contactNumber: string
  ) => boolean;
}

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("currentUser");
    if (storedUser) {
      setCurrentUser(JSON.parse(storedUser));
      setIsLoggedIn(true);
    }
    setLoading(false);
  }, []);

  const login = (email, password) => {
    const users = JSON.parse(localStorage.getItem("users")) || [];

    const user = users.find(
      (u) => u.email === email && u.password === password
    );

    if (user) {
      setCurrentUser(user);
      setIsLoggedIn(true);
      localStorage.setItem("currentUser", JSON.stringify(user));
      return true;
    } else {
      alert("Invalid credentials");
      return false;
    }
  };

  const logout = () => {
    setCurrentUser(null);
    setIsLoggedIn(false);
    localStorage.removeItem("currentUser");
  };

  const signUp = (email, password, confirmPassword, contactNumber) => {
    if (!email || !password || !confirmPassword || !contactNumber) {
      alert("All fields are required.");
      return false;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return false;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];

    if (users.some((user) => user.email === email)) {
      alert("User already exists.");
      return false;
    }

    const newUser = { email, password, contactNumber };
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));
    alert("Signup successful!");
    return true;
  };

  return (
    <AuthContext.Provider
      value={{ isLoggedIn, login, logout, loading, currentUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};
