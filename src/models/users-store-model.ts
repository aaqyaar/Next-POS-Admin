import { types, Instance, SnapshotOut } from "mobx-state-tree";
import api from "services/api";
import { withSetPropAction } from "./helpers/with-set-prop";
import { withStatus } from "utils/with-status";
import { IUsers } from "types/users";

export const UsersStoreModel = types
  .model("UsersStore")
  .props({
    data: types.optional(types.array(types.frozen<IUsers>()), []),
  })
  .actions(withSetPropAction)
  .extend(withStatus)
  .views((store) => ({}))
  .actions((store) => ({
    getUsers: async () => {
      try {
        const response = await api.get("/users");
        store.setProp("data", response as any);
        return response;
      } catch (error) {
        return error;
      }
    },
  }));

export type UsersStore = Instance<typeof UsersStoreModel>;
export type UsersStoreModelSnapshot = SnapshotOut<typeof UsersStoreModel>;
