import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ConnectionUpdateInput = {
  connectedUser?: string | null;
  status?: "Option1" | null;
  user?: UserWhereUniqueInput | null;
};
