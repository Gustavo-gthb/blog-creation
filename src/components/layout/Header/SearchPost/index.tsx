"use client";

import { usePostContext } from "@/context/PostContext";
import React from "react";

const SearchPost = () => {
  const { filter, handleFilterChange } = usePostContext();

  return (
    <div>
      <input
        type="text"
        placeholder="pesquisar por titulo"
        onChange={(e) => handleFilterChange(e.target.value)}
        value={filter}
      />
    </div>
  );
};

export default SearchPost;  
