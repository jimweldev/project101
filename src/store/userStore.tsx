import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

interface UserState {
  user: string | null;
  setUser: (user: any) => void;
}

const userStore = (set: any): UserState => ({
  user: null,
  setUser: (user: string) => {
    set(() => ({
      user,
    }));
  },
});

const useUserStore = create(
  devtools(
    persist(userStore, {
      name: "user",
    })
  )
);

export default useUserStore;
