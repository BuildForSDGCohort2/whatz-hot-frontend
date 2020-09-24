import React from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase';
import { firebasemerch } from '../utils/MerchantUiConfig';

interface Iprops {
  fullLabel: string;
  firebaseauth: any;
  firebaseui: any;
}
interface signinprops {
  signInFlow: string;
  signInSuccessUrl: string;
  signInOptions: Array<any>;
}

const StyledFirebaseAuthUi: React.FC<Iprops> = ({
  fullLabel,
  firebaseauth,
  firebaseui
}) => {
  const uiConfig: signinprops = {
    signInFlow: 'redirect',
    signInSuccessUrl: '/homepage',
    signInOptions: [
      {
        provider: firebaseui.GoogleAuthProvider.PROVIDER_ID,
        fullLabel: `${fullLabel} with Google`
      },
      {
        provider: firebaseui.FacebookAuthProvider.PROVIDER_ID,
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
