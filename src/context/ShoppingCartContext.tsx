import { createContext, useContext, useReducer, useState } from "react";

type ShoppingCartContextType = {
  cartItems: CartItem[];
  cartQuantity: number;
  getItemQuantity: (id: number) => number;
  increaseItemQuantity: (id: number) => void;
  decreaseItemQuantity: (id: number) => void;
  removeFromCart: (id: number) => void;
  isOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
};

type CartItem = {
  id: number;
  quantity: number;
};

type Action = {
  type: string;
  id: number;
};

const ShoppingCartContext = createContext({} as ShoppingCartContextType);

export function useShoppingCart() {
  return useContext(ShoppingCartContext);
}

type ShoppingCartProviderProps = {
  children: React.ReactNode;
};

export function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {
  const [cartItems, dispatch] = useReducer(cartItemsReducer, [] as CartItem[]);
  const [isOpen, setIsOpen] = useState(false);

  const getItemQuantity = (id: number) => {
    return cartItems.find((item) => item.id === id)?.quantity ?? 0;
  };

  const increaseItemQuantity = (id: number) => {
    dispatch({ type: "increaseItemQuantity", id });
  };

  const decreaseItemQuantity = (id: number) => {
    dispatch({ type: "decreaseItemQuantity", id });
  };

  const removeFromCart = (id: number) => {
    dispatch({ type: "removeFromCart", id });
  };

  const cartQuantity = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const openCart = () => setIsOpen(true);

  const closeCart = () => setIsOpen(false);

  return (
    <ShoppingCartContext.Provider
      value={{
        cartItems,
        cartQuantity,
        getItemQuantity,
        increaseItemQuantity,
        decreaseItemQuantity,
        removeFromCart,
        isOpen,
        openCart,
        closeCart,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
}

function cartItemsReducer(cartItems: CartItem[], action: Action) {
  switch (action.type) {
    case "increaseItemQuantity": {
      const itemExists = cartItems.some((item) => item.id === action.id);
      if (!itemExists) return [...cartItems, { id: action.id, quantity: 1 }];
      else
        return cartItems.map((item) =>
          item.id === action.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
    }

    case "decreaseItemQuantity": {
      const item = cartItems.find((item) => item.id === action.id);
      if (item?.quantity === 1)
        return cartItems.filter((item) => item.id !== action.id);
      else
        return cartItems.map((item) =>
          item.id === action.id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        );
    }

    case "removeFromCart":
      return cartItems.filter((item) => item.id !== action.id);
    default:
      return cartItems;
  }
}
