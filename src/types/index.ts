import { ButtonHTMLAttributes, ReactNode } from 'react';

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

export type AuthContextProviderProps = {
  children: ReactNode;
}

export interface IUser {
  id: string;
  name: string;
  avatar: string;
}

export interface IAuthContext {
  user: IUser | undefined;
  signInWithGoogle: () => void;
}
