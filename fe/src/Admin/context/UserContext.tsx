import { createContext, useState, useEffect, ReactNode, FC } from 'react';

interface UserContextType {
  name: string;
}

export const UserContext = createContext<UserContextType | undefined>(undefined);

interface UserProviderProps {
  children: ReactNode;
}

const UserProvider: FC<UserProviderProps> = ({ children }) => {
  const [name, setName] = useState<string>('');

  useEffect(() => {
    const fetchWhoAmI = async () => {
      const token = localStorage.getItem('token');

      if (!token) {
        throw new Error('No token found');
      }

      const response = await fetch('http://localhost:3000/user/whoami', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        const errorMessage = `Failed to fetch: ${response.status} ${response.statusText}`;
        throw new Error(errorMessage);
      }

      const data = await response.json();
      setName(data.name);
    };

    fetchWhoAmI();
  }, []);

  return <UserContext.Provider value={{ name }}>{children}</UserContext.Provider>;
};

export default UserProvider;
