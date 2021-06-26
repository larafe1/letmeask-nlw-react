import { ButtonHTMLAttributes, ReactNode } from 'react';

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  isOutlined?: boolean;
}

export type AuthContextProviderProps = {
  children: ReactNode;
}

export type RoomParams = {
  id: string;
}

export type RoomCodeProps = {
  code: string;
}

export type FirebaseQuestions = Record<string, {
  author: {
    name: string;
    avatar: string;
  }
  likes: Record<string, {
    authorId: string;
  }>
  content: string;
  isAnswered: boolean;
  isHighlighted: boolean;
}>

export interface IQuestion {
  id: string;
  children?: ReactNode;
  author: {
    name: string;
    avatar: string;
  }
  content: string;
  isAnswered: boolean;
  isHighlighted: boolean;
  likeCount: number;
  likeId: string | undefined;
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
