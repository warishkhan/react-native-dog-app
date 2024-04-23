import React, { createContext, useState } from 'react';

const BreedContext = createContext();

export const BreedProvider = ({ children }) => {
  const [selectedBreed, setSelectedBreed] = useState(null);
  const [selectedSubBreed, setSelectedSubBreed] = useState(null);
  const [mainBreed, setMainBreed] = useState(null);

  return (
    <BreedContext.Provider value={{ selectedBreed, setSelectedBreed, selectedSubBreed, setSelectedSubBreed, mainBreed, setMainBreed }}>
      {children}
    </BreedContext.Provider>
  );
};

export default BreedContext;
