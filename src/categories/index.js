import React from "react";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AddCategory from "./addCategory";
import { CategoryList } from "./categoryList";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity,
    },
  },
});

export const CategoriesWrapper = () => {
  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <AddCategory />
        <CategoryList />
      </QueryClientProvider>
    </div>
  );
};

export default CategoriesWrapper;
