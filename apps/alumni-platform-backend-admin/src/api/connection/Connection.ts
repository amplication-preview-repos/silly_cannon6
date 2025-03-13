import { User } from "../user/User";

export type Connection = {
  connectedUser: string | null;
  createdAt: Date;
  id: string;
  status?: "Option1" | null;
  updatedAt: Date;
  user?: User | null;
};
