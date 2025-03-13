import { Connection as TConnection } from "../api/connection/Connection";

export const CONNECTION_TITLE_FIELD = "connectedUser";

export const ConnectionTitle = (record: TConnection): string => {
  return record.connectedUser?.toString() || String(record.id);
};
