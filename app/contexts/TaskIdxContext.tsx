import { createContext, useState, useContext } from "react";

const idxContext = createContext<
  { idx: number; setIdx: (idx: number) => void } | undefined
>(undefined);

export function IdxContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [idx, setIdx] = useState<number>(0);
  return (
    <idxContext.Provider value={{ idx, setIdx }}>
      {children}
    </idxContext.Provider>
  );
}

export default function useIdxContext() {
  const context = useContext(idxContext);
  if (!context) {
    throw new Error("useIdxContext must be used within an IdxContextProvider");
  }
  return context;
}
