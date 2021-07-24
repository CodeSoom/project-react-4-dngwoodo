export function authServiceLogin() {
  return {};
}

export function authServiceLogout() {
  return null;
}

export function authServiceOnAuthChange(callback: () => void) {
  callback();
  return null;
}

export function persistAuthService() {
  return null;
}
