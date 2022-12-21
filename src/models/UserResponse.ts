import { IResponse } from './IResponse';

export interface UserResponse extends IResponse {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
}
