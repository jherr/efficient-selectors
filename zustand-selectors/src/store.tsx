import create from "zustand";

export const useStore = create<{
  firstNumber: number;
  secondNumber: number;
  numbers: number[];
  doNothing: () => void;
  addToFirst: () => void;
  addToSecond: () => void;
}>((set) => ({
  firstNumber: 0,
  secondNumber: 0,
  numbers: [0],
  doNothing: () => set((state) => ({ ...state })),
  addToFirst: () =>
    set((state) => ({
      ...state,
      firstNumber: state.firstNumber + 1,
      numbers: [state.firstNumber + 1],
    })),
  addToSecond: () =>
    set((state) => ({
      ...state,
      secondNumber: state.secondNumber + 1,
      numbers: [state.firstNumber],
    })),
}));
