import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ConnectionWhereInput = {
  connectedUser?: StringNullableFilter;
  id?: StringFilter;
  status?: "Option1";
  user?: UserWhereUniqueInput;
};
