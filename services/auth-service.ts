import { firebaseAuth, githubProvider, googleProvider } from './firebase';

function getProvider(providerName: string) {
  if (providerName === 'Google') {
    return googleProvider;
  }

  if (providerName === 'GitHub') {
    return githubProvider;
  }

  throw new Error(`not supported provider: ${providerName}`);
}

export function authServiceLogin(providerName: string) {
  const authProvider = getProvider(providerName);
  return firebaseAuth.signInWithPopup(authProvider);
}

export function authServiceLogout() {
  firebaseAuth.signOut();
}

export function authServiceOnAuthChange(onUserChanged: any) {
  firebaseAuth.onAuthStateChanged((user) => {
    onUserChanged(user);
  });
}
