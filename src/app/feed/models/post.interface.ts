import { IUser } from './user.interface';

export interface IPost {
  readonly author: IUser;
  readonly photo: string;
  readonly title: string;
  readonly description: string;
  readonly body: string;
  readonly dateOfCreation: number;
  readonly tag?: string;
  readonly isEdited?: boolean;
  readonly dateOfEdit?: number;
  readonly viewOfPost?: number;
  readonly _id?: string;
}
