import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import InputTag from "../../components/input/InputTag";
import SubmitButton from "../../components/button/SubmitButton";
import FormSwitch from "../../components/account/FormSwitch";
import SideImage from "../../components/account/SideImage";
import FormHeading from "../../components/account/FormHeading";
import useEmailAuth from "../../hooks/auth/useEmailAuth";

function LoginAndSignup() {
  const { type } = useParams();

  const [isSignInForm, setIsSignInForm] = useState(true);
  const { isLoading, handleSignup, handleLogin } = useEmailAuth();

  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    brandName: "",
    email: "",
    password: "",
    kisaanId: "abc",
  });

  const handleAuth = async () => {
    if (type === "seller" && isSignInForm && formData.kisaanId !== "abc") {
      alert("Invalid Kisaan ID. Please enter 'abc'.");
      return;
    }

    if (isSignInForm) {
      handleLogin(type, formData);
    } else {
      handleSignup(type, formData);
    }
  };

  useEffect(() => {
    if (isSignInForm) {
      setFormData((prevData) => ({
        ...prevData,
        email: "ak8835388@gmail.com",
        password: "1234567890",
        kisaanId: "abc",
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        email: "",
        password: "",
        kisaanId: "abc",
      }));
    }
  }, [isSignInForm]);

  return (
    <section className="flex flex-col-reverse md:flex-row md:h-screen">
      <SideImage type={type} />
      <div className="flex flex-col w-full lg:w-1/2 items-center justify-center px-6 py-8 lg:py-0">
        <div className="lg:p-6 space-y-4 md:space-y-6 sm:p-8 w-full">
          <FormHeading type={type} isSignInForm={isSignInForm} />
          <form
            className="space-y-4 md:space-y-6 w-full lg:w-3/5 mx-auto"
            onSubmit={(e) => {
              e.preventDefault();
              handleAuth();
            }}
          >
            {/* Sign Up Fields */}
            {!isSignInForm && (
              <>
                <InputTag
                  label={"Name"}
                  placeholder={"John"}
                  type={"text"}
                  outlineColor={
                    type === "seller" ? "outline-green-700" : "outline-blue-600"
                  }
                  value={formData.name}
                  setFormData={setFormData}
                  toUpdate={"name"}
                />
                <InputTag
                  label={"Contact No."}
                  placeholder={"9876543210"}
                  type={"text"}
                  outlineColor={
                    type === "seller" ? "outline-green-700" : "outline-blue-600"
                  }
                  value={formData.contact}
                  setFormData={setFormData}
                  toUpdate={"contact"}
                />
                {type === "seller" && (
                  <>
                    <InputTag
                      label={"Kisan ID"}
                      placeholder={"abcd"}
                      type={"text"}
                      outlineColor={"outline-green-700"}
                      value={formData.brandName}
                      setFormData={setFormData}
                      toUpdate={"brandName"}
                    />
                  </>
                )}
              </>
            )}

            {/* Common Login Fields */}
            <InputTag
              label={"Email"}
              placeholder={"john@doe.com"}
              type={"email"}
              outlineColor={
                type === "seller" ? "outline-green-700" : "outline-blue-600"
              }
              value={formData.email}
              setFormData={setFormData}
              toUpdate={"email"}
            />
            <InputTag
              label={"Password"}
              placeholder={"••••••••"}
              type={"password"}
              outlineColor={
                type === "seller" ? "outline-green-700" : "outline-blue-600"
              }
              value={formData.password}
              setFormData={setFormData}
              toUpdate={"password"}
            />

            {/* Kisaan ID for Seller Sign In
            {type === "seller" && isSignInForm && (
              <InputTag
                label={"Kisaan ID"}
                placeholder={"abc"}
                type={"text"}
                outlineColor={"outline-green-700"}
                value={formData.kisaanId}
                setFormData={setFormData}
                toUpdate={"kisaanId"}
              />
            )} */}

            <SubmitButton
              text={isSignInForm ? "Sign In" : "Create account"}
              bgColor={type === "seller" ? "bg-green-700" : "bg-blue-600"}
              hoverBgColor={type === "seller" ? "bg-green-600" : "bg-blue-700"}
              isLoading={isLoading}
            />

            <FormSwitch
              type={type}
              isSignInForm={isSignInForm}
              setIsSignInForm={setIsSignInForm}
            />

            {isSignInForm ? (
              <div className="text-xs font-medium text-rose-600">
                *In case you don't want to create an account, you can use the following credentials to login: <br />
                Email: ak8835388@gmail.com <br />
                Password: 1234567890
              </div>
            ) : (
              <div className="text-xs font-medium text-rose-600">
                *It is recommended to use temporary mail for creating account.{" "}
                <Link className="underline" to={"https://temp-mail.org/en/10minutemail"}>
                  Click here to go to 10 minutes mail
                </Link>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

export default LoginAndSignup;
