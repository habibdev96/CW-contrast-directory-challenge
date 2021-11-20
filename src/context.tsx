import React, { createContext, useState, useContext } from 'react';
import { useForm } from 'react-hook-form';

const useValue = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleMobileMenuClose = (): void => setIsMobileMenuOpen(false);
  const handleModalOpen = (): void => setIsModalOpen(true);
  const handleModalClose = (): void => setIsModalOpen(false);

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const onSubmit = (): void => console.log('hello world');

  return {
    isMobileMenuOpen,
    setIsMobileMenuOpen,
    isModalOpen,
    setIsModalOpen,
    handleModalOpen,
    handleModalClose,
    handleMobileMenuClose,
    handleSubmit,
    register,
    errors,
    onSubmit,
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
