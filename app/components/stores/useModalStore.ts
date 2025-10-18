import { create } from 'zustand';
type ModalType = "add" | "edit" | "double";


type ModalState = {
    modal: Record<ModalType, boolean>,
    isOpen: (t: ModalType) => boolean,
    show: (t: ModalType) => void,
    hide: (t: ModalType) => void
}

const initialMap: Record<ModalType, boolean> = {
  add: false,
  edit: false,
  double: false,
};

export const useModalStore = create<ModalState>((set, get) => ({
  modal: initialMap,

  isOpen: (t) => get().modal[t],

  show: (t) =>
    set((s) => ({ modal: { ...s.modal, [t]: true } })),

  hide: (t) =>
    set((s) => ({ modal: { ...s.modal, [t]: false } })),
}));