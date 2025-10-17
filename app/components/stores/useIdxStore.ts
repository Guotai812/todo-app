'use client';

import { create } from 'zustand';

interface IdxState {
  idx: number;
  setIdx: (idx: number) => void;
}

export const useIdxStore = create<IdxState>((set) => ({
  idx: 0,
  setIdx: (idx) => set({ idx }),
}));