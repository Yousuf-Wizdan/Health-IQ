'use client'
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = (e: any) => {
    e.preventDefault();
    // Handle registration logic
    console.log('Registered:', { email, password, confirmPassword });
  };

  return (
    <div className='flex justify-center items-center h-screen w-screen'>

    
    <div className="w-96 max-w-sm mx-auto p-6 rounded-xl shadow-lg bg-white">
      <h2 className="text-xl text-blue-600 font-semibold mb-4">Create an Account</h2>
      <form onSubmit={handleRegister} className="space-y-4">
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
        <Input
        //   label="Confirm Password"
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
          placeholder="Confirm your password"
        />
        <Button className='w-full bg-blue-600' type="submit" >
          Register
        </Button>
      </form>
    </div>
    </div>
  );
};

export default Register;
