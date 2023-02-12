import { create } from "zustand";
import { api } from "../api/http";
import { AppSocket, ClientToServer, ServerToClient } from "../socketio";

export const useGameplayStore = create((set) => ({
  cursor: 0,
  isTurn: true,
  board: new Array<Array<boolean | null>>(6)
    .fill([null])
    .map((_) => new Array<boolean | null>(7).fill(null)),
}));

type GlobalState = {
  state: "MAIN_MENU" | "PENDING" | "PLAYING" | "END" | "LOGIN";
  username: string | null;
  me: () => Promise<void | { user: { username: string } } | { error: any }>;
  startVsCPU: () => void;
  startVsPlayer: (
    socket: AppSocket,
    callback: ServerToClient["gameCreated"]
  ) => void;
  login: (
    username: string
  ) => Promise<void | { user: { username: string } } | { error: any }>;
  wasAuth: boolean;
};

export const useGlobalStore = create<GlobalState>((set, get) => ({
  state: "MAIN_MENU",
  wasAuth: false,
  username: null,
  me: () => {
    return api.me().then((data) => {
      if ("user" in data) {
        set({
          username: data.user.username,
          state: "MAIN_MENU",
          wasAuth: true,
        });
      }
      if ("error" in data) {
        set({
          state: "LOGIN",
          wasAuth: true,
        });
      }
    });
  },
  startVsCPU: () => {
    console.log("boo");
    set({ ...get(), state: "PLAYING" });
  },
  login: async (username: string) => {
    return api.login(username).then((data) => {
      if ("user" in data) {
        set({
          username: data.user.username,
          state: "MAIN_MENU",
          wasAuth: true,
        });
      }
      if ("error" in data) {
        set({
          state: "LOGIN",
          wasAuth: false,
        });
      }
    });
  },
  startVsPlayer: (
    socket: AppSocket,
    callback: ServerToClient["gameCreated"]
  ) => {
    socket.on("gameCreated", (result) => {
      callback(result);
      if (result.ok) {
        set({ state: "PENDING" });
      }
    });
    socket.on("gameState", gameState => {
        set({ state: "PLAYING" });
    } )
    socket.connect()
    socket.emit("createGame");
  },
}));
