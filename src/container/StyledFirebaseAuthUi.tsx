import React from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase';

interface Iprops {}
interface signinprops {
  signInFlow: string;
  signInSuccessUrl: string;
  signInOptions: string[];
}

const StyledFirebaseAuthUi: React.FC<Iprops> = () => {
  const uiConfig: signinprops = {
    signInFlow: 'popup',
    signInSuccessUrl: '/homepage',
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID
    ]
  };
  return (
    <>
      <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
    </>
  );
};

export default StyledFirebaseAuthUi;
