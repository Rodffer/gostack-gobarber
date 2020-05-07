import React, { createContext, useContext, useCallback } from 'react';

import ToastContainer from '../components/ToastContainer';

interface ToastContextData {
  addToast(): void;
  removeToast(): void;
}

const ToastContext = createContext({} as ToastContextData);

export const ToastProvider: React.FC = ({ children }) => {
  const addToast = useCallback(() => {
    console.log('add');
  }, []);

  const removeToast = useCallback(() => {
    console.log('remov');
  }, []);

  return (
    <ToastContext.Provider value={{ addToast, removeToast}}>
      {children}
      <ToastContainer />
    </ToastContext.Provider>
  );
}

export function useToast(): ToastContextData {
  const context = useContext(ToastContext);

  if(!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }

  return context;
}
