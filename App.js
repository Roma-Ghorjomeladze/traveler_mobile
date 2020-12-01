import React, { useState, useEffect, useMemo } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';
import { Provider } from 'react-redux';

import { LoadingComponent } from './app/components/Loading';
import { AuthContext } from './app/context/auth.context';
import { RootStackScreen } from './app/navigation/stackScreens';
import store from './app/redux/store';

const App = () => {
  const [loading, setLoading] = useState(true);
  const [token, setToken] = useState(null);

  const authContext = useMemo(() => {
    return {
      signIn: async () => {
        const token = 'wohooo';
        await AsyncStorage.setItem('user_token', token);
        setLoading(false);
        setToken(token);
      },
      signUp: async () => {
        const token = 'wohooo';
        await AsyncStorage.setItem('user_token', token);
        setLoading(false);
        setToken(token);
      },
      signOut: async () => {
        await AsyncStorage.removeItem('user_token');
        setLoading(false);
        setToken(null);
      },
    };
  }, []);

  useEffect(() => {
    getToken();
  }, []);

  const getToken = async () => {
    try {
      const token = await AsyncStorage.getItem('user_token');
      if (!token) {
        setToken(null);
        setLoading(false);
      } else {
        setToken(token);
        setLoading(false);
      }
    } catch (error) {
      console.log({ error });
    }
  };

  if (loading) {
    return <LoadingComponent />;
  }

  return (
    <Provider store = {store}>
      <AuthContext.Provider value={authContext}>
        <NavigationContainer>
          <RootStackScreen token={token}/>
        </NavigationContainer>
      </AuthContext.Provider>
    </Provider>
  );
};

export default App;
