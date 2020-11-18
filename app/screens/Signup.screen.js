import React from 'react';
import { Button, View, Text, StyleSheet } from "react-native"
import { ScreenContainer } from "react-native-screens"

export const Signup = ({navigation})=>{

    handleAddImage = () => {
        alert('Signup')
    }
    return (
        <ScreenContainer>
            <View>
            <Text>
                Signup screen
            </Text>
            </View>
            <Button title="Signup" onPress={handleAddImage}/>
            <Button style={styles.btn} title="to signin" onPress={() => {navigation.push('Login')}}/>
        </ScreenContainer>
    )
}

const styles = StyleSheet.create({
  btn: {
    width: 200,
    height: 30,
    backgroundColor: "#fff",
    color: '#fff',
  }
})