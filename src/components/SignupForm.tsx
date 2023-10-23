'use client'
// SignupForm.tsx
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input"
import {useEffect, useState} from 'react';
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/router";
import toast from "react-hot-toast";

const SignupForm: React.FC = () => {
  // const router = useRouter();
  const [user, setUser] = useState({
    username: '',
    email: '',
    password: '',
  })
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    // Signup logic here
    e.preventDefault();

    try {
      
    } catch (error: any) {
      console.log("Signup failed", error.message)
      toast.error(error.message)
    }
    finally {

    }
  };

  useEffect(() => {
    if(user.email.length > 0 && user.password.length > 0 && user.username.length > 0) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user])
  

  return (
    <>
    <form onSubmit={handleSubmit} className="max-w-md mx-auto">
      <div className="mb-4">
        <label htmlFor="username" className="block text-gray-700 text-sm font-bold mb-2">
          Username
        </label>
        <Input
          type="text"
          id="username"
          placeholder="Enter your username"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          onChange={(e) => setUser({...user, username:e.target.value})}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
          Email
        </label>
        <Input
          type="email"
          id="email"
          placeholder="Enter your email"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          onChange={(e) => setUser({...user, email:e.target.value})}
        />
      </div>
      <div className="mb-6">
        <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
          Password
        </label>
        <Input
          type="password"
          id="password"
          placeholder="Enter your password"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          onChange={(e) => setUser({...user, password:e.target.value})}
        />
      </div>
      <Button type="submit" className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${buttonDisabled ? "pointer-events-none bg-gray-500 text-gray-200" : ""}`}>
      Sign Up
      </Button>
      <Button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 mx-4 px-4 rounded focus:outline-none focus:shadow-outline">
        <Link href={'/login'}>Login</Link>
      </Button>
    </form>
  </>
  );

};

export default SignupForm;
