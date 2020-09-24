import { userAuth } from './Uiconfig';

// Sign In
export const doSignInWithEmailAndPassword = (email: string, password: string) =>
  userAuth.signInWithEmailAndPassword(email, password);

// Sign out
export const doSignOut = () => userAuth.signOut();

// Password Reset
export const doPasswordReset = (email: string) =>
  userAuth.sendPasswordResetEmail(email);

// Password Change
export const doPasswordUpdate = async (password: string) => {
  if (userAuth.currentUser) {
    await userAuth.currentUser.updatePassword(password);
  }
  throw Error('No auth.currentUser!');
};
