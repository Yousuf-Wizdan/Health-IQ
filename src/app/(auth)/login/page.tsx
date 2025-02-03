'use client'
import React, { useState } from 'react';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e: any) => {
    e.preventDefault();
    // Handle login logic
    console.log('Logged in:', { email, password });
  };

  return (
    <div className='flex items-center justify-center w-screen h-screen'>
    <div className="w-96 max-w-sm mx-auto p-6 rounded-xl shadow-lg bg-white ">
      <h2 className="text-xl font-semibold text-blue-600 mb-4">Login to Your Account</h2>
      <form onSubmit={handleLogin} className="space-y-4">
        <Input
        //   label="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          placeholder="Enter your email"
        />
        <Input
        //   label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          placeholder="Enter your password"
        />
        <Button type="submit" className='w-full bg-blue-600'>
          Login
        </Button>
      </form>
    </div>
    </div>
  );
};

export default Login;
