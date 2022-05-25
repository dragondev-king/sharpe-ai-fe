import { createContext } from "react";

export const NavbarContext = createContext({
  subIsOpened: false,
  selectedNumber: 1,
  setSubIsOpened: () => {},
  setSelectedNumber: () => {}
})

