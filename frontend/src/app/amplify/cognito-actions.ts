import { toast } from 'react-toastify';
import { redirect } from 'next/navigation';

import { signIn, signOut } from 'aws-amplify/auth';

import { getErrorMessage } from '@/utilities/get-error-message';

export async function handleSignIn(
  prevState: { message: string; status: string } | undefined,
  formData: FormData
): Promise<{ message: string; status: string }> {
  try {
    await signIn({
      username: String(formData.get('username')),
      password: String(formData.get('password')),
    });
  } catch (error) {
    toast.error(getErrorMessage(error));
    return { status: '', message: getErrorMessage(error) };
  }

  redirect('/admin/dashboard');
}

export async function handleSignOut() {
  try {
    await signOut();
  } catch (error) {
    console.error(getErrorMessage(error));
  }
  redirect('/admin/login');
}
