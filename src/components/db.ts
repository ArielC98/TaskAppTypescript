import { db } from '../api/firebase';
import { setDoc, doc } from 'firebase/firestore';

export async function saveUserProfile(uid: string, name: string, username: string) {
  const userRef = doc(db, 'users', uid);
  await setDoc(userRef, {
    name,
    username,
    createdAt: new Date()
  });
}
