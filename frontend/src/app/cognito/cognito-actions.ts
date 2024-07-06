import { redirect } from 'next/navigation';
import {
  signUp,
  confirmSignUp,
  signIn,
  signOut,
  resendSignUpCode,
} from 'aws-amplify/auth';
import { getErrorMessage } from '@/utilities/get-error-message';
import { toast } from 'react-toastify';

export async function handleSignIn(
  prevState: { status: string; message: string } | undefined,
  formData: FormData
): Promise<{ status: string; message: string }> {
  try {
    const { isSignedIn, nextStep } = await signIn({
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
    console.log(getErrorMessage(error));
  }
  redirect('/admin/login');
}
