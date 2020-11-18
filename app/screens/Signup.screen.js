import React, {useContext} from 'react';
import {Button, View, Text, StyleSheet} from 'react-native';
import {ScreenContainer} from 'react-native-screens';

import {AuthContext} from '../context/auth.context';

export const Signup = ({navigation}) => {
  const {signUp} = useContext(AuthContext);
  return (
    <ScreenContainer>
      <View>
        <Text style={styles.txt}>Signup screen</Text>
      </View>
      <Button style={styles.btn} title="to signin" onPress={() => signUp()} />
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
