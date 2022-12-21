import { IResponse } from './IResponse';

export interface ProductResponse extends IResponse {
  id: number;
  name: string;
  price: number;
  categoryId: number;
  count: number;
}
