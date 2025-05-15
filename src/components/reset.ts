import { auth } from '../api/firebase';
import { sendPasswordResetEmail } from 'firebase/auth';

export async function resetPassword(email: string): Promise<void> {
  try {
    await sendPasswordResetEmail(auth, email);
    alert(`A password reset link has been sent to ${email}`);
  } catch (error: any) {
    console.error('Error sending reset email:', error.message);
    alert(`Error: ${error.message}`);
  }
}
