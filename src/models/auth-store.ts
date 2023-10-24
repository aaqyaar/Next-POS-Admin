import { types, applySnapshot, Instance, SnapshotOut } from "mobx-state-tree";
import { Profile, Tokens } from "types";
import api from "services/api";
import { withSetPropAction } from "./helpers/with-set-prop";
import { withStatus } from "utils/with-status";

export const AuthenticationStoreModel = types
  .model("AuthenticationStore")
  .props({
    profile: types.optional(types.frozen<Profile>(), {
      username: "",
      email: "",
      avatar: "",
    }),
    isAuthenticated: types.optional(types.boolean, false),
    tokens: types.optional(types.frozen<Tokens>(), {
      accessToken: "",
      refreshToken: "",
    }),
  })
  .actions(withSetPropAction)
  .extend(withStatus)
  .actions((store) => ({
    login: async (username: string, password: string) => {
      const data = { username, password };
      try {
        store.setStatus("pending");
        const response = await api.post<{
          tokens: Tokens;
          user: Profile;
        }>("/auth/login", data);
        store.setProp("tokens", response.tokens);
        store.setProp("profile", response.user);
        store.setProp("isAuthenticated", true);
        store.setStatus("done");
        return response;
      } catch (error) {
        store.setStatus("error");
        throw error;
      }
    },

    todos: async () => {
      try {
        const response = await api.get("todos");
        console.log(response);
        return response;
      } catch (error) {
        throw error;
      }
    },

    setProfile: () => {
      store.setProp("profile", {
        username: "abdizamed",
        email: "abdizamed@gmail.com",
        avatar: "https://avatars.githubusercontent.com/u/15075759?v=4",
      });
    },

    logout: () => {
      applySnapshot(store, {});
    },
  }));

export type AuthenticationStore = Instance<typeof AuthenticationStoreModel>;
export type AuthenticationStoreSnapshot = SnapshotOut<
  typeof AuthenticationStoreModel
>;
