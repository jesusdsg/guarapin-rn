import {create} from 'zustand';

interface SpinnerState {
  isVisible: boolean;
  setVisible: (visible: boolean) => void;
}

export const useSpinnerStore = create<SpinnerState>(set => ({
  isVisible: false,
  setVisible: (visible: boolean) => set({isVisible: visible}),
}));
