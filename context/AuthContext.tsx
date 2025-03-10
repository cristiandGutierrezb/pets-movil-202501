import React, { createContext, useState, useEffect, ReactNode } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export interface AuthContextType {
  user: any; // Puedes definir un tipo más específico
  setUser: (user: any) => void;
}

export const AuthContext = createContext<AuthContextType>({
  user: null,
  setUser: () => {},
});

interface Props {
  children: ReactNode;
}

export const AuthProvider = ({ children }: Props) => {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);

  // Simula la comprobación del token almacenado en AsyncStorage
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const token = await AsyncStorage.getItem('@auth_token');
        if (token) {
          // Aquí podrías validar el token y obtener datos del usuario
          setUser({ token });
        } else {
          setUser(null);
        }
      } catch (error) {
        console.error('Error checking auth token:', error);
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, []);

  if (loading) {
    // Puedes mostrar una pantalla de carga mientras se determina el estado de autenticación
    return null; // o un componente <LoadingScreen />
  }

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};
