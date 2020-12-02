import React, {useContext} from 'react';
import {Button, View, Text, StyleSheet} from 'react-native';
import {ScreenContainer} from 'react-native-screens';
import {connect} from 'react-redux';

import {login} from '../redux/auth/authActions';

const Login = ({navigation, loginUser}) => {
  const handleLogin = () => {
    loginUser({username: 'test', password: '123'});
    console.log('pressed');
  }
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

      <Button style={styles.btn} title="signin" onPress={() => handleLogin()} />
    </ScreenContainer>
  );
};

const mapStateToProps = state =>{
  return {
    auth: state.auth
  }
}

const mapDispatchToProps = dispatch => {
  return {
    loginUser: (credentials) => dispatch(login(credentials))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);


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
