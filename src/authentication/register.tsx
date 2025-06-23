import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router";
import { AuthContext } from "./authcontext";
import { object, string, ref } from "yup";
import { useFormik } from "formik";
import { error } from "console";

const { signUp } = useContext(AuthContext);
const navigate = useNavigate();

const registerSchema = object({
  email: string().required("Email is required").email("Invalid Email"),
  password: string().required("Password is required"),
  confirmPassword: string()
    .required("Confirm Password is required")
    .oneOf([ref("password")], "Passwords must match"),
  contact: string()
    .required("Phone No. is requird")
    .max(10, "Phone Number must be 10 digits")
    .min(10, "Phone Number must be 10 digits"),
});
export function Register() {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      confirmPassword: "",
      firstName: "",
      lastName: "",
      middleName: "",
      phoneNo: "",
    },
    onSubmit: (values, { resetForm }) => {
      console.log("Submit", resetForm);
      resetForm();
    },
    validationSchema: registerSchema,
  });
  const { values, errors, handleChange, handleSubmit } = formik;

  return (
    <div className=" text-center">
      <div className="w-[375px] h-[360px] shadow-md mt-45 ml-45 p-4  ">
        <h1 className="font-bold font-sans text-2xl capitalize p-2 mt-3 ">
          Register
        </h1>
        <div>
          {errors.confirmPassword}
        </div>
        <form onSubmit={handleSubmit}>
          <Input
            placeholder="Email"
            className=" mt-3 shadow-md w-2xs ml-5"
            value={values.email}
            onChange={handleChange}
            onError={errors.email}
          />
          <Input
            placeholder="Contact no"
            className=" mt-3 shadow-md w-2xs ml-5"
            onChange={handleChange}
            value={values.phoneNo}
            onError={errors.phoneNo}
          />
          <Input
            placeholder="Password"
            className=" mt-3 shadow-md w-2xs ml-5"
            onChange={handleChange}
            value={values.password}
            onError={errors.password}
          />
          <Input
            placeholder="Confirm Password"
            className=" mt-3 shadow-md w-2xs ml-5"
            onChange={handleChange}
            value={values.confirmPassword}
            onError={errors.confirmPassword}
          />
          <Button
            variant={"outline"}
            className="mt-2 px-5 ml-3"
           type="submit"
          >
            Submit
          </Button>
          <p className="mt-3">
            Already have an account?
            <NavLink to="/login" className="font-semibold ">
              Login
            </NavLink>
          </p>
        </form>
      </div>
    </div>
  );
}
