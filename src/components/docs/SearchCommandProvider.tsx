
import React, { createContext, useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

type SearchCommandContextType = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  toggle: () => void;
};

const SearchCommandContext = createContext<SearchCommandContextType | undefined>(undefined);

export function SearchCommandProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggle = () => {
    setIsOpen((prev) => !prev);
  };

  // Close the command menu when the location changes
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Add keyboard shortcut listener
  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        toggle();
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <SearchCommandContext.Provider value={{ isOpen, setIsOpen, toggle }}>
      {children}
    </SearchCommandContext.Provider>
  );
}

export const useSearchCommand = () => {
  const context = useContext(SearchCommandContext);
  if (context === undefined) {
    throw new Error("useSearchCommand must be used within a SearchCommandProvider");
  }
  return context;
};
