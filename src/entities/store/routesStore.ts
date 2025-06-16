import { create } from "zustand";
import type { Route } from "../route/model/types";
import { mockRoutes } from "../route/data/mockRoutes";
import type { SortingState, Updater } from "@tanstack/react-table";

interface RoutesState {
  routes: Route[];
  sorting: SortingState;
  setSorting: (updater: Updater<SortingState>) => void;
}

export const useRoutesStore = create<RoutesState>()((set, get) => ({
  routes: mockRoutes,
  sorting: [],
  setSorting: (updater) => {
    const current = get().sorting;
    const nextSorting =
      typeof updater === "function" ? updater(current) : updater;
    set({ sorting: nextSorting });
  },
}));
