const USER_EMAIL_KEY_NAME = 'six-cities-user-email';


export const getUserEmail = (): string =>
  localStorage.getItem(USER_EMAIL_KEY_NAME)?? '';

export const saveUserEmail = (userEmail: string): void =>
  localStorage.setItem(USER_EMAIL_KEY_NAME, userEmail);

export const dropUserEmail = (): void =>
  localStorage.removeItem(USER_EMAIL_KEY_NAME);
