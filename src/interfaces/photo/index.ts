import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface PhotoInterface {
  id?: string;
  user_id: string;
  photo_url: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  _count?: {};
}

export interface PhotoGetQueryInterface extends GetQueryInterface {
  id?: string;
  user_id?: string;
  photo_url?: string;
}
