'use client';
import React from 'react';
import Image from 'next/image';
import { signIn } from 'next-auth/react';
type Props = {};

const Login = (props: Props) => {
  return (
    <div className='flex-col-center h-screen text-center bg-theme-2'>
      <Image src='/chatgpt.png' width={450} height={450} alt='logo' />
      <button
        className='animate-pulse text-4xl font-bold text-white tracking-wide -mt-10'
        onClick={() => signIn('google', { callbackUrl: location.href })}
      >
        Sign in to use ChapGPT
      </button>
    </div>
  );
};

export default Login;
