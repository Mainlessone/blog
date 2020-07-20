import { IUser } from './user.interface';

export interface IPost {
  author: IUser | string;
  photo: string;
  title: string;
  description: string;
  article: string;
  dateOfCreation?: number;
  tag?: string;
  isEdited?: boolean;
  dateOfEdit?: number;
  _id?: string;
}
