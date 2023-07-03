'use client';

import React from 'react';

const CategoryContext = React.createContext(undefined);

export function CategoryProvider({ children }) {
  const [selectedCategory, setSelectedCategory] = React.useState(null);
  return (
    <CategoryContext.Provider value={[selectedCategory, setSelectedCategory]}>
      {children}
    </CategoryContext.Provider>
  );
}

export function useCategory() {
  const context = React.useContext(CategoryContext);
  if (context === undefined) {
    throw new Error('useCategory must be used within a CategoryProvider');
  }
  return context;
}
