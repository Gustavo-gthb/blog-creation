"use client";

import { createContext, useContext, useState } from "react";

type PostContextType = {
    filter: string;
    handleFilterChange: (filterValue: string) => void;
  };

const PostContext = createContext<PostContextType | undefined>(undefined);

export const PostProvider = ({ children }) => {
  const [filter, setFilter] = useState("");

  const handleFilterChange = (filterValue) => {
    setFilter(filterValue);
  };

  return (
    <PostContext.Provider value={{ filter, handleFilterChange }}>
      {children}
    </PostContext.Provider>
  );    
};

export const usePostContext = (): PostContextType => useContext(PostContext);
