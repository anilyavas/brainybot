import { DocumentData } from 'firebase/firestore';

export type User = {
  email: string;
  createdAt: number;
} & DocumentData;
