import React, {useState, useEffect, useMemo} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';

import {Login} from './app/screens/Login.screen';
import {Signup} from './app/screens/Signup.screen';
import {Home} from './app/screens/Home.screen';
import {Profile} from './app/screens/Profile.screen';
import {MapScreen} from './app/screens/Map.screen';
import {AddTravel} from './app/screens/AddTravelImages.screen';
import {SettingsScreen} from './app/screens/Settings.screen';
import {LoadingComponent} from './app/components/Loading';
import {AuthContext} from './app/context/auth.context';

const AuthStack = createStackNavigator();
const Tabs = createBottomTabNavigator();
const AddTravelStack = createStackNavigator();
const MapsStack = createStackNavigator();
const HomeStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const Drower = createDrawerNavigator();
const SettingsStack = createStackNavigator();
const RootStack = createStackNavigator();

const AuthStackScreens = () => {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen
        name="Login"
        component={Login}
        options={{title: 'Sign In'}}
      />
      <AuthStack.Screen
        name="Signup"
        component={Signup}
        options={{title: 'Sign Up'}}
      />
    </AuthStack.Navigator>
  );
};

const DrowerScreens = () => {
  return (
    <Drower.Navigator>
      <Drower.Screen name="Home" component={DrowerTabs} />
      <Drower.Screen name="Profile" component={ProfileStackScreen} />
      <Drower.Screen name="Settings" component={SettingsStackScreen} />
    </Drower.Navigator>
  );
};

const RootStackScreen = ({token}) => {
  return (
    <RootStack.Navigator headerMode="none">
    {token ? (
      <RootStack.Screen name="App" component={DrowerScreens} />
    ) : (
      <RootStack.Screen name="Auth" component={AuthStackScreens} />
    )}
  </RootStack.Navigator>
  )
};
const HomeStackScreen = () => (
  <HomeStack.Navigator>
    <Tabs.Screen name="Home" component={Home} />
  </HomeStack.Navigator>
);

const AddTravelStackScreen = () => (
  <AddTravelStack.Navigator>
    <Tabs.Screen name="Add Travel" component={AddTravel} />
  </AddTravelStack.Navigator>
);

const MapStackScreen = () => (
  <MapsStack.Navigator>
    <Tabs.Screen name="Map" component={MapScreen} />
  </MapsStack.Navigator>
);

const ProfileStackScreen = () => (
  <ProfileStack.Navigator>
    <ProfileStack.Screen name="Profile" component={Profile} />
  </ProfileStack.Navigator>
);

const SettingsStackScreen = () => (
  <SettingsStack.Navigator>
    <ProfileStack.Screen name="Settings" component={SettingsScreen} />
  </SettingsStack.Navigator>
);

const DrowerTabs = () => (
  <Tabs.Navigator initialRouteName="Home">
    <Tabs.Screen name="Home" component={HomeStackScreen} />
    <Tabs.Screen name="Add Travel" component={AddTravelStackScreen} />
    <Tabs.Screen name="Maps" component={MapStackScreen} />
  </Tabs.Navigator>
);

const App = () => {
  const [loading, setLoading] = useState(true);
  const [token, setToken] = useState('fdf');

  const authContext = useMemo(() => {
    return {
      signIn: () => {
          setLoading(false);
          setToken('example');
      },
      signUp: () => {
          setLoading(false);
          setToken('example');
      },
      signOut: () => {
        console.log('signout');
        setLoading(false);
        setToken(null);
      },
    };
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) {
    return <LoadingComponent />;
  }

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        <RootStackScreen token={token} />
      </NavigationContainer>
    </AuthContext.Provider>
  );
};

export default App;
