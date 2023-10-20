import SignupForm from "@/components/SignupForm";
import React from "react";

const SignupPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-center text-2xl font-semibold mb-8">Signup</h1>
      <SignupForm />
    </div>
  );
};

export default SignupPage;
