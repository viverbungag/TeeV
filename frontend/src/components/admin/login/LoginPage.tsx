'use client';

import { handleSignIn, handleSignOut } from '@/app/amplify/cognito-actions';
import IntegralCF from '@/utilities/fonts/integralCF/integralCF';
import React, { useEffect } from 'react';
import { useFormState, useFormStatus } from 'react-dom';
import { toast } from 'react-toastify';

const FormButton = () => {
  const { pending } = useFormStatus();

  return (
    <button type="submit" className="btn btn-sm" disabled={pending}>
      {pending ? 'Loading...' : 'Login'}
    </button>
  );
};

const LoginPage = () => {
  const [errorMessage, dispatch] = useFormState(handleSignIn, {
    status: '',
    message: '',
  });
  const { pending } = useFormStatus();

  const onLogin = () => {};
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <form
        className="flex flex-col items-center gap-2 border-[#C5C6C7] border-2 rounded-lg p-12"
        action={dispatch}
      >
        <h1 className={`${IntegralCF.className} text-2xl mb-8`}>Teevision</h1>
        <input
          className="input input-bordered input-sm"
          type="text"
          name="username"
          placeholder="Username"
        />
        <input
          className="input input-bordered input-sm"
          type="password"
          name="password"
          placeholder="Password"
        />
        <FormButton />
      </form>
    </div>
  );
};

export default LoginPage;
