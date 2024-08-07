import { Instance, SnapshotOut, types } from "mobx-state-tree";
import { AuthenticationStoreModel } from "models/auth-store-model";
import { UsersStoreModel } from "models/users-store-model";

/**
 * The root store, any properties defined here will be accessible
 * by any observers that consume it
 */
export const RootStoreModel = types.model("Root").props({
  authStore: types.optional(AuthenticationStoreModel, {}),
  usersStore: types.optional(UsersStoreModel, {}),
});

export type RootStore = Instance<typeof RootStoreModel>;
export type RootStoreSnapshot = SnapshotOut<typeof RootStoreModel>;
