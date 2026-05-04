
import React, { createContext, useContext, useState, useEffect } from 'react';
import pb from '@/lib/pocketbaseClient';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [adminUser, setAdminUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [initialLoading, setInitialLoading] = useState(true);

  useEffect(() => {
    if (pb.authStore.isValid && pb.authStore.model) {
      setAdminUser(pb.authStore.model);
      setIsAuthenticated(true);
    }
    setInitialLoading(false);
  }, []);

  const login = async (email, password) => {
    const authData = await pb.collection('admin_users').authWithPassword(email, password, { $autoCancel: false });
    setAdminUser(authData.record);
    setIsAuthenticated(true);
    return authData;
  };

  const logout = () => {
    pb.authStore.clear();
    setAdminUser(null);
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ adminUser, isAuthenticated, login, logout, initialLoading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
};
