import React from 'react';
import { Button, View, Text } from "react-native";
import { ScreenContainer } from "react-native-screens";

export const Login = ({navigation})=>{

    handleAddImage = () => {
        alert('Login')
    }
    return (
        <ScreenContainer>
            <View>
            <Text>
                Login screen
            </Text>
            </View>
            <Button title="Login" onPress={handleAddImage}/>
            <Button title="to signup" onPress={() => {navigation.push('Signup')}}/>
        </ScreenContainer>
    )
}