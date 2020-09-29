import React from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase';

interface Iprops {
  fullLabel: string;
  firebaseauth: any;
}
interface signinprops {
  signInFlow: string;
  signInSuccessUrl: string;
  signInOptions: Array<any>;
}

const StyledFirebaseAuthUi: React.FC<Iprops> = ({
  fullLabel,
  firebaseauth
}) => {
  const uiConfig: signinprops = {
    signInFlow: 'redirect',
    signInSuccessUrl: '/homepage',
    signInOptions: [
      {
        provider: firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        fullLabel: `${fullLabel} with Google`
      },
      {
        provider: firebase.auth.FacebookAuthProvider.PROVIDER_ID,
        fullLabel: `${fullLabel} with Facebook`
      }
    ]
  };
  return (
    <>
      <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebaseauth} />
    </>
  );
};

export default StyledFirebaseAuthUi;
