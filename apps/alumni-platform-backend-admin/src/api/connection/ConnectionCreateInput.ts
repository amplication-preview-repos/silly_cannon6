import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ConnectionCreateInput = {
  connectedUser?: string | null;
  status?: "Option1" | null;
  user?: UserWhereUniqueInput | null;
};
