import LoginForm from '@/components/LoginForm'
import React from 'react'

const LoginPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-center text-2xl font-semibold mb-8">Login</h1>
      <LoginForm />
    </div>
  )
}

export default LoginPage;