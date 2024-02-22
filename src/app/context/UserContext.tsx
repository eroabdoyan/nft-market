"use client"


import React, { createContext, useContext, useState, ReactNode, Dispatch, SetStateAction } from 'react';
import { User } from '../interface/types';

interface UserContextProps {
  user: User | null;
  setUser: Dispatch<SetStateAction<User | null>>;
}

const UserContext = createContext<UserContextProps | undefined>(undefined);

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};

interface UserProviderProps {
  children: ReactNode;
}

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const storedUser = localStorage.getItem('user');
  const [user, setUser] = useState<User | null>(storedUser ? JSON.parse(storedUser) : null);

  const updateUser: Dispatch<SetStateAction<User | null>> = (newUser) => {
    setUser((prevUser) => {
      const updatedUser = typeof newUser === 'function' ? (newUser as (prevUser: User | null) => User | null)(prevUser) : newUser;
      
      if (prevUser !== undefined) {
        return updatedUser;
      } else {
        return null;
      }
    });

    if (newUser && typeof newUser !== 'function') {
      localStorage.setItem('user', JSON.stringify(newUser));
    } else {
      localStorage.removeItem('user');
    }
  };

  return (
    <UserContext.Provider value={{ user, setUser: updateUser }}>
      {children}
    </UserContext.Provider>
  );
};
