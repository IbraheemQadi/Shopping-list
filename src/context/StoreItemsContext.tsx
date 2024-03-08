import { createContext, useContext } from "react";
import storeItems from "../data/items.json";

export type StoreItem = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
};

type StoreItemsContextType = {
  storeItems: StoreItem[];
};

const StoreItemsContext = createContext<StoreItemsContextType>(
  {} as StoreItemsContextType
);

export function useStoreItems() {
  return useContext(StoreItemsContext);
}

type StoreItemsProvider = {
  children: React.ReactNode;
};

export const StoreItemsProvider = ({ children }: StoreItemsProvider) => {
  return (
    <StoreItemsContext.Provider value={{ storeItems }}>
      {children}
    </StoreItemsContext.Provider>
  );
};


