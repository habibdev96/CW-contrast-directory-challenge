import React, { createContext, useState, useContext } from 'react';

const useValue = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleMobileMenuClose = (): void => setIsMobileMenuOpen(false);
  const handleModalOpen = (): void => setIsModalOpen(true);
  const handleModalClose = (): void => setIsModalOpen(false);

  return {
    isMobileMenuOpen,
    setIsMobileMenuOpen,
    isModalOpen,
    setIsModalOpen,
    handleModalOpen,
    handleModalClose,
    handleMobileMenuClose,
  };
};

const GlobalStateContext = createContext({} as ReturnType<typeof useValue>);

export const GlobalStateProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <GlobalStateContext.Provider value={useValue()}>
      {children}
    </GlobalStateContext.Provider>
  );
};

export const useGlobalState = () => useContext(GlobalStateContext);
