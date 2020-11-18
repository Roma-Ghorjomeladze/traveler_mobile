import React, {useContext} from 'react';
import {Button, View, Text, StyleSheet} from 'react-native';
import {ScreenContainer} from 'react-native-screens';

import {AuthContext} from '../context/auth.context';

export const Login = ({navigation}) => {
  const {signIn} = useContext(AuthContext);
  return (
    <ScreenContainer>
      <View>
        <Text style={styles.txt}>Login screen</Text>
      </View>
      <Button
        style={styles.btn}
        title="go to sign up"
        onPress={() => {
          navigation.push('Signup');
        }}
      />

      <Button style={styles.btn} title="signin" onPress={() => signIn()} />
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  btn: {
    width: 200,
    height: 30,
    backgroundColor: '#fff',
    color: '#fff',
    marginBottom: 20,
  },
  txt: {
    width: '100%',
    fontSize: 25,
    marginBottom: 40,
  },
});
